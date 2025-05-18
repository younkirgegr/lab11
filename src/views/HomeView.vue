<template>
  <div class="home-view">
    <section class="hero">
      <h1 class="hero-title">Добро пожаловать в наше приложение</h1>
      <p class="hero-subtitle">Лучшее решение для вашего бизнеса</p>
      
      <div class="cta-buttons">
        <router-link 
          to="/services" 
          class="btn btn-primary"
        >
          Наши услуги
        </router-link>
        <router-link 
          to="/contact" 
          class="btn btn-outline"
        >
          Связаться с нами
        </router-link>
      </div>
    </section>

    <section class="features">
      <h2 class="section-title">Наши преимущества</h2>
      <div class="features-grid">
        <FeatureCard
          v-for="(feature, index) in features"
          :key="index"
          :title="feature.title"
          :description="feature.description"
          :icon="feature.icon"
        />
      </div>
    </section>
  </div>
</template>

<script>
import FeatureCard from '@/components/FeatureCard.vue'

export default {
  name: 'HomeView',
  components: {
    FeatureCard
  },
  data() {
    return {
      features: [
        {
          title: 'Высокая скорость',
          description: 'Наше приложение работает быстрее конкурентов',
          icon: '⚡'
        },
        {
          title: 'Надежность',
          description: 'Гарантированная стабильность 99.9%',
          icon: '🛡️'
        },
        {
          title: 'Простота',
          description: 'Интуитивно понятный интерфейс',
          icon: '✨'
        }
      ]
    }
  },
  mounted() {
    console.log('HomeView mounted')
  },
  methods: {
    navigateTo(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
.home-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero {
  text-align: center;
  padding: 80px 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 10px;
  margin-bottom: 40px;
}

.hero-title {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #2c3e50;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: #7f8c8d;
  margin-bottom: 30px;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.btn {
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-primary {
  background-color: #42b983;
  color: white;
  border: 2px solid #42b983;
}

.btn-primary:hover {
  background-color: #369f6b;
  border-color: #369f6b;
}

.btn-outline {
  background-color: transparent;
  color: #42b983;
  border: 2px solid #42b983;
}

.btn-outline:hover {
  background-color: #42b983;
  color: white;
}

.features {
  margin-bottom: 60px;
}

.section-title {
  text-align: center;
  margin-bottom: 40px;
  font-size: 2rem;
  color: #2c3e50;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

@media (max-width: 768px) {
  .hero {
    padding: 60px 0;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 100%;
    max-width: 300px;
  }
}
</style>