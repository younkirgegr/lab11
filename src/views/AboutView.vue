<template>
  <div class="about-view">
    <div class="about-header">
      <h1>О нашей компании</h1>
      <p>Узнайте больше о нашей миссии и команде</p>
    </div>

    <section class="about-content">
      <article class="mission">
        <h2>Наша миссия</h2>
        <p>{{ missionText }}</p>
      </article>

      <article class="team">
        <h2>Наша команда</h2>
        <div class="team-grid">
          <TeamMember
            v-for="member in teamMembers"
            :key="member.id"
            :member="member"
            @member-click="showMemberDetails"
          />
        </div>
      </article>
    </section>

    <MemberModal 
      v-if="selectedMember"
      :member="selectedMember"
      @close="selectedMember = null"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import TeamMember from '@/components/TeamMember.vue'
import MemberModal from '@/components/MemberModal.vue'

interface TeamMember {
  id: number
  name: string
  position: string
  bio: string
  photo: string
  skills: string[]
}

export default defineComponent({
  name: 'AboutView',
  components: {
    TeamMember,
    MemberModal
  },
  setup() {
    const missionText = ref('Мы стремимся создавать инновационные продукты, которые делают жизнь наших клиентов проще и лучше. Наша цель - предоставлять решения, которые действительно работают.')

    const teamMembers = ref<TeamMember[]>([
      {
        id: 1,
        name: 'Алексей Петров',
        position: 'Frontend разработчик',
        bio: 'Опыт работы с Vue.js более 5 лет. Участвовал в разработке 20+ проектов.',
        photo: 'https://i.pravatar.cc/150?img=1',
        skills: ['Vue.js', 'TypeScript', 'UI/UX']
      },
      {
        id: 2,
        name: 'Мария Иванова',
        position: 'Дизайнер',
        bio: 'Специализируется на пользовательских интерфейсах. Создала дизайн для 15+ приложений.',
        photo: 'https://i.pravatar.cc/150?img=2',
        skills: ['Figma', 'Photoshop', 'User Research']
      },
      {
        id: 3,
        name: 'Иван Сидоров',
        position: 'Backend разработчик',
        bio: 'Эксперт в Node.js и базах данных. Разрабатывал масштабируемые системы для тысяч пользователей.',
        photo: 'https://i.pravatar.cc/150?img=3',
        skills: ['Node.js', 'MongoDB', 'Docker']
      }
    ])

    const selectedMember = ref<TeamMember | null>(null)

    const showMemberDetails = (member: TeamMember) => {
      selectedMember.value = member
    }

    return {
      missionText,
      teamMembers,
      selectedMember,
      showMemberDetails
    }
  }
})
</script>

<style scoped>
.about-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 40px;
}

.about-header {
  text-align: center;
  padding: 60px 0 40px;
  background-color: #f8f9fa;
  border-radius: 10px;
  margin-bottom: 40px;
}

.about-header h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 15px;
}

.about-header p {
  font-size: 1.2rem;
  color: #7f8c8d;
}

.about-content {
  display: grid;
  gap: 40px;
}

.mission, .team {
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.mission h2, .team h2 {
  color: #2c3e50;
  margin-bottom: 20px;
  font-size: 1.8rem;
}

.mission p {
  line-height: 1.8;
  color: #555;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
  margin-top: 30px;
}

@media (max-width: 768px) {
  .about-header {
    padding: 40px 0 30px;
  }
  
  .about-header h1 {
    font-size: 2rem;
  }
  
  .mission, .team {
    padding: 20px;
  }
}
</style>