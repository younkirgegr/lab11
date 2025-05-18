import { createRouter, createWebHistory } from 'vue-router'

// Импорт компонентов страниц
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Главная страница'
    }
  },
  {
    path: '/about',
    name: 'about',
    // Ленивая загрузка (чтобы не грузить все сразу)
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: 'О компании'
    }
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('../views/ServicesView.vue'),
    meta: {
      title: 'Наши услуги'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    meta: {
      title: 'Контакты'
    }
  },
  {
    path: '/:pathMatch(.*)*', // 404 страница
    name: 'not-found',
    component: () => import('../views/NotFoundView.vue'),
    meta: {
      title: 'Страница не найдена'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active-link', // класс для активных ссылок
  scrollBehavior(to, from, savedPosition) {
    // Прокрутка вверх при смене страницы
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Динамическое изменение title страницы
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Vue App'
  next()
})

export default router