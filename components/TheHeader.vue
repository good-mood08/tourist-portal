<template>
    <header class="header">
      <div class="header__container">
            <img src="../public/images/Group 2.svg" alt="">
        <a href="#top" class="header__logo">Туристический <br> Нижний Новгород</a>
  
        <!-- Основное меню для десктопа -->
        <nav class="desktop-nav">
          <ul class="nav-list">
            <li v-for="(item, index) in menuItems" :key="index" class="nav-item">
              <a 
                :href="item.anchor" 
                class="nav-link"
                @click="handleAnchorClick"
              >
                {{ item.title }}
              </a>
            </li>
          </ul>
        </nav>
  
        <!-- Бургер-меню для мобильных -->
        <button 
          class="burger-menu"
          :class="{ 'active': isMenuOpen }"
          @click="toggleMenu"
          aria-label="Меню"
        >
          <span class="burger-line"></span>
          <span class="burger-line"></span>
          <span class="burger-line"></span>
        </button>
  
        <!-- Мобильное меню -->
        <transition name="fade">
          <div v-if="isMenuOpen" class="mobile-menu-overlay" @click="closeMenu">
            <div class="mobile-menu-content" @click.stop>
              <nav class="mobile-nav">
                <ul class="mobile-nav-list">
                  <li 
                    v-for="(item, index) in menuItems" 
                    :key="index" 
                    class="mobile-nav-item"
                  >
                    <a 
                      :href="item.anchor" 
                      class="mobile-nav-link"
                      
                    >
                      {{ item.title }}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </transition>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMenuOpen: false,
        menuItems: [
          { title: 'Экскурсии', anchor: '#tours' },
          { title: 'Достопримечательности', anchor: '#attractions' },
          { title: 'Туристко-Информационные центры', anchor: '#info-centers' },
          { title: 'События', anchor: '#events' },
          { title: 'Путеводитель', anchor: '#guide' },
          { title: 'О городе', anchor: '#about' }
        ]
      }
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen
        document.body.style.overflow = this.isMenuOpen ? 'hidden' : 'auto'
      },
      closeMenu() {
        this.isMenuOpen = false
        document.body.style.overflow = 'auto'
      },
      handleAnchorClick(e) {
        e.preventDefault()
        const target = e.target.getAttribute('href')
        document.querySelector(target).scrollIntoView({
          behavior: 'smooth'
        })
      },
      handleMobileAnchorClick(e) {
        link
      }
    }
  }
  </script>
  
  <style scoped>
  /* Базовые стили */
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    padding: 1rem 0;
  }
  
  .header__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  /* Логотип */
  .header__logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
  }
  
  /* Десктопное меню */
  .desktop-nav {
    display: block;
  }
  
  .nav-list {
    display: flex;
    gap: 1.5rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .nav-link {
    color: #2c3e50;
    text-decoration: none;
    font-weight: 500;
    padding: 0.5rem 0;
    position: relative;
    transition: color 0.3s ease;
  }
  
  .nav-link:hover {
    color: #3498db;
  }
  
  .nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #3498db;
    transition: width 0.3s ease;
  }
  
  .nav-link:hover::after {
    width: 100%;
  }
  
  /* Бургер-меню */
  .burger-menu {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 28px;
    height: 20px;
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    z-index: 1002;
  }
  
  .burger-line {
    display: block;
    width: 100%;
    height: 2px;
    background: #2c3e50;
    transition: all 0.3s ease;
  }
  
  .burger-menu.active .burger-line:nth-child(1) {
    transform: translateY(9px) rotate(45deg);
  }
  
  .burger-menu.active .burger-line:nth-child(2) {
    opacity: 0;
  }
  
  .burger-menu.active .burger-line:nth-child(3) {
    transform: translateY(-9px) rotate(-45deg);
  }
  
  /* Мобильное меню */
  .mobile-menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1001;
    display: flex;
    justify-content: flex-end;
  }
  
  .mobile-menu-content {
    width: 70%;
    height: 100%;
    background: white;
    padding: 2rem;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .mobile-nav-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 4rem;
  }
  
  .mobile-nav-link {
    display: block;
    color: #2c3e50;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 500;
    padding: 0.5rem 0;
    transition: color 0.3s ease;
  }
  
  .mobile-nav-link:hover {
    color: #3498db;
  }
  
  /* Анимации */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }
  
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  
  /* Адаптивность */
  @media (max-width: 768px) {
    .desktop-nav {
      display: none;
    }
    
    .burger-menu {
      display: flex;
    }
  }
  
  @media (max-width: 480px) {
    .mobile-menu-content {
      width: 85%;
      padding: 1.5rem;
    }
    
    .header__logo {
      font-size: 1.3rem;
    }
  }
  </style>