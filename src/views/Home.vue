<template>
  <div class="home-container">


    <div class="content-wrapper">
      <div class="text-content">
        <div class="highlight-box">
          <p id="jobsearch"><strong>{{ $t('home.jobSearch') }}</strong></p>
        </div>

        <div class="intro-section">
          <!-- <h1>{{ $t('home.greeting') }} <span class="name">{{ $t('home.name') }}</span></h1> -->
          <p>{{ $t('home.intro1') }}</p>

        </div>
        <div>
          <p>{{ $t('home.researchFocus') }}</p>
          <!-- <p class="tagline">{{ $t('home.tagline') }}</p> -->
        </div>

        <div class="action-section">
          <p><strong><em>{{ $t('home.researchInterest') }}</em></strong></p>
        </div>

        <div class="action-section">
          <p>{{ $t('home.hobbies') }}</p>
        </div>

        <div class="action-section">
          <p>{{ $t('home.viewMore') }} </p>
        </div>

        <div class="action-section">
          <!-- <a href="#">{{ $t('home.cvLink') }}</a> -->
          <p>{{ $t('home.contact') }} </p>
          <!-- <a href="mailto:cuisl@hnu.edu.cn">cuisl@hnu.edu.cn</a> -->
        </div>
      </div>

      <div class="image-content">
        <div class="photo-container">
          <img src="@/assets/home_photo.png" alt="Cui Shenglan">
          <div class="photo-caption">
          </div>
        </div>

        <div>
          <h2 class="keywords1">{{ $t('home.name') }}</h2>
        </div>
        <div>
          <p class="keywords2">{{ $t('home.position') }}</p>
        </div>
        <div>
          <p class="topic">{{ $t('home.topics') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LanguageToggle from '@/components/LanguageToggle.vue'

export default {
  name: 'HomeView',
}
</script>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 80px auto 0;
  padding: 50px;
}

.content-wrapper {
  display: flex;
  gap: 50px;
  align-items: flex-start;
}

.text-content {
  flex: 3;
}

.image-content {
  flex: 2;
  display: grid;
  place-items: center;
}

.highlight-box {
  background-color: #f9f2e9;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.intro-section {
  margin-bottom: 30px;
}

.name {
  color: #8b4513;
  font-weight: bold;
}

.tagline {
  font-style: italic;
  color: #6a5acd;
  font-weight: 500;
  margin: 15px 0;
}

.action-section {
  margin-top: 20px;
  line-height: 1.5;
}

.contact {
  margin-top: 10px;
  font-weight: bold;
}

a {
  color: #8b4513;
  text-decoration: underline;
  transition: color 0.3s;
}

a:hover {
  color: #6a3813;
}

.photo-container {
  display: grid;
  /* position: relative; */
  place-items: center;
  margin-bottom: 10px;
}

.photo-container img {
  /* position: middle; */
  width: 50%;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.photo-caption {
  position: absolute;
  bottom: 10px;
  left: 15px;
  color: white;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
  font-size: 16px;
  padding: 5px 10px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
}

.photo-caption p {
  margin: 5px 0;
}

.keywords1 {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 5px 0;
}
.keywords2 {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 5px 0;
}

.topic {
  display: grid;
  grid-template-columns: repeat(auto, minmax(300px, 1fr));
  background-color: #f0f0f0;
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 14px;
  color: #555;
}
</style>