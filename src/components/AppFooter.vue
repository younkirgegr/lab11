<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3 class="footer-title">VueRouting</h3>
          <p class="footer-text">
            Лучшее решение для вашего бизнеса
          </p>
        </div>
        
        <div class="footer-section">
          <h3 class="footer-title">Навигация</h3>
          <ul class="footer-links">
            <li v-for="link in navLinks" :key="link.path">
              <router-link :to="link.path" class="footer-link">
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h3 class="footer-title">Контакты</h3>
          <address class="footer-address">
            <p>г. Москва, ул. Примерная, 123</p>
            <p>Email: info@vuerouting.ru</p>
            <p>Телефон: +7 (123) 456-78-90</p>
          </address>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p class="copyright">
          &copy; {{ currentYear }} VueRouting. Все права защищены.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'AppFooter',
  setup() {
    const currentYear = ref(new Date().getFullYear())
    const navLinks = ref([
      { path: '/', name: 'Главная' },
      { path: '/about', name: 'О нас' },
      { path: '/services', name: 'Услуги' },
      { path: '/contact', name: 'Контакты' }
    ])
    
    return {
      currentYear,
      navLinks
    }
  }
}
</script>

<style scoped>
.app-footer {
  background-color: var(--secondary-color);
  color: white;
  padding: 40px 0 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 30px;
}

.footer-section {
  margin-bottom: 20px;
}

.footer-title {
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: var(--primary-color);
}

.footer-text {
  line-height: 1.6;
  opacity: 0.8;
}

.footer-links {
  list-style: none;
}

.footer-links li {
  margin-bottom: 10px;
}

.footer-link {
  color: white;
  text-decoration: none;
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.footer-link:hover {
  opacity: 1;
  text-decoration: underline;
}

.footer-address p {
  margin-bottom: 10px;
  opacity: 0.8;
  font-style: normal;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
  text-align: center;
}

.copyright {
  opacity: 0.7;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
  }
}
</style>