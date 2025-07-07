<template>
  <div class="research-container">

    <h2 class="title">{{ $t('research1.title') }}</h2>


    <div class="projects">
      <div class="project-card">
        <img src="@/assets/1.png" alt="Research project" class="project-image">
        <div class="project-info">
          <h3>{{ $t('research1.minititles1') }}</h3>
          <p>{{ $t('research1.description1') }}</p>
          <div class="project-period">{{ $t('research1.periods') }}</div>
        </div>
      </div>
      <div class="project-card">
        <img src="@/assets/2.png" alt="Research project" class="project-image">
        <div class="project-info">
          <h3>{{ $t('research1.minititles2') }}</h3>
          <p>{{ $t('research1.description2') }}</p>
          <div class="project-period">{{ $t('research1.periods') }}</div>
        </div>
      </div>
      <div class="project-card">
        <img src="@/assets/3.png" alt="Research project" class="project-image">
        <div class="project-info">
          <h3>{{ $t('research1.minititles3') }}</h3>
          <p>{{ $t('research1.description3') }}</p>
          <div class="project-period">{{ $t('research1.periods') }}</div>
        </div>
      </div>
    </div>

    <h2 class="title">{{ $t('research2.title') }}</h2>
    <div class="projects">
      <div class="project-card">
        <img src="@/assets/4.png" alt="Research project" class="project-image">
        <div class="project-info">
          <h3>{{ $t('research2.minititles1') }}</h3>
          <p>{{ $t('research2.description1')}}</p>
          <div class="project-period">{{ $t('research2.periods') }}</div>
        </div>
      </div>
      <div class="project-card">
        <img src="@/assets/5.png" alt="Research project" class="project-image">
        <div class="project-info">
          <h3>{{ $t('research2.minititles2') }}</h3>
          <p>{{ $t('research2.description2')}}</p>
          <div class="project-period">{{ $t('research2.periods') }}</div>
        </div>
      </div>
    </div>

    <h2 class="title">{{ $t('research3.title') }}</h2>
    <div class="projects">
      <div class="project-card">
        <img src="@/assets/6.png" alt="Research project" class="project-image">
        <div class="project-info">
          <h3>{{ $t('research3.minititles1') }}</h3>
          <p>{{ $t('research3.description1')}}</p>
          <div class="project-period">{{ $t('research3.periods') }}</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import LanguageToggle from '@/components/LanguageToggle.vue'

export default {
  name: 'ResearchView',
}
</script>

<style scoped>
.research-container {
  max-width: 1200px;
  margin: 80px auto 0;
  padding: 20px;
}

.title {
  padding: 0 50px;
  text-align: left;
}

h1 {
  color: #333;
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.2rem;
  font-weight: 600;
}

.projects {
  display: grid;
  margin: 20px auto 0;
  padding: 0 50px;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
}

.project-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-image {
  width: 100%;
  height: auto;
  aspect-ratio: 1840/880;
  object-fit: contain;
  border-bottom: 1px solid #eee;
}

.project-info {
  padding: 0 20px;
}

.project-info h3 {
  color: #8b4513;
  margin-bottom: 8px;
  font-size: 1.4rem;
}

.project-period {
  background-color: #f9f2e9;
  color: #8b4513;
  display: inline-block;
  padding: 1px 1px;
  border-radius: 3px;
  font-size: 0.9rem;
  margin-bottom: 12px;
}

.project-info p {
  color: #8b4513;
  line-height: 1;
  font-size: 12px;
  padding: 0 0 10px 0;
}

.other-areas {
  background-color: #f9f9f9;
  padding: 25px 30px;
  border-radius: 8px;
  border-left: 4px solid #8b4513;
  margin-top: 40px;
}

.other-areas h2 {
  color: #333;
  margin-bottom: 15px;
  font-size: 1.6rem;
}

.other-areas ul {
  list-style-type: none;
  padding-left: 0;
}

.other-areas li {
  padding: 8px 0;
  border-bottom: 1px dashed #ddd;
  color: #555;
}
</style>