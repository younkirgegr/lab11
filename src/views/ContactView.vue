<template>
  <div class="contact">
    <form @submit.prevent="sendForm">
      <input v-model="form.name" placeholder="Имя">
      <input v-model="form.email" type="email" placeholder="Email">
      <textarea v-model="form.message"></textarea>
      <button type="submit">Отправить</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: { name: '', email: '', message: '' }
    }
  },
  methods: {
    sendForm() {
      console.log('Форма отправлена', this.form);
    }
  }
}
</script>