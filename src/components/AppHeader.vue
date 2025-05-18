<template>
  <header class="app-header">
    <div class="container">
      <router-link to="/" class="logo">
        <span>Vue</span>Routing
      </router-link>
      
      <nav class="nav">
        <router-link 
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="nav-link"
        >
          {{ link.name }}
        </router-link>
      </nav>
      
      <button class="mobile-menu-button" @click="toggleMobileMenu">
        ☰
      </button>
      
      <div class="mobile-menu" :class="{ 'is-open': isMobileMenuOpen }">
        <router-link 
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="mobile-nav-link"
          @click="isMobileMenuOpen = false"
        >
          {{ link.name }}
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'AppHeader',
  setup() {
    const isMobileMenuOpen = ref(false)
    const navLinks = ref([
      { path: '/', name: 'Главная' },
      { path: '/about', name: 'О нас' },
      { path: '/services', name: 'Услуги' },
      { path: '/contact', name: 'Контакты' }
    ])
    
    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value
    }
    
    return {
      navLinks,
      isMobileMenuOpen,
      toggleMobileMenu
    }
  }
}
</script>

<style scoped>
.app-header {
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: var(--secondary-color);
}

.logo span {
  color: var(--primary-color);
}

.nav {
  display: flex;
  gap: 20px;
}

.nav-link {
  text-decoration: none;
  color: var(--secondary-color);
  font-weight: 500;
  padding: 5px 0;
  position: relative;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: var(--primary-color);
}

.mobile-menu-button {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.mobile-menu {
  display: none;
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  background-color: white;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  flex-direction: column;
  gap: 15px;
}

.mobile-menu.is-open {
  display: flex;
}

.mobile-nav-link {
  text-decoration: none;
  color: var(--secondary-color);
  padding: 10px;
  border-bottom: 1px solid #eee;
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }
  
  .mobile-menu-button {
    display: block;
  }
}
</style>