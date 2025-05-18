<template>
  <div class="feature-card">
    <div class="feature-icon">{{ icon }}</div>
    <h3 class="feature-title">{{ title }}</h3>
    <p class="feature-description">{{ description }}</p>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FeatureCard',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: '✅'
    }
  },
  setup(props) {
    // Логика компонента может быть здесь
    return {
      // Возвращаем props для использования в template
    }
  }
})
</script>

<style scoped>
.feature-card {
  background: white;
  border-radius: 8px;
  padding: 25px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 2rem;
  margin-bottom: 15px;
}

.feature-title {
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: #2c3e50;
}

.feature-description {
  color: #7f8c8d;
  line-height: 1.6;
}
</style>