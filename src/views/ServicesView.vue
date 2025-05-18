<template>
  <div class="services">
    <h2>Наши тарифы</h2>
    <table>
      <tr v-for="plan in plans" :key="plan.id">
        <td>{{ plan.name }}</td>
        <td>{{ plan.price }} ₽/мес</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
interface Plan {
  id: number;
  name: string;
  price: number;
}

export default {
  setup() {
    const plans: Plan[] = [
      { id: 1, name: 'Старт', price: 500 },
      { id: 2, name: 'Профи', price: 1500 }
    ];

    return { plans };
  }
};
</script>