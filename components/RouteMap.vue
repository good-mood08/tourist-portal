<template>
    <div class="map-container">
      <!-- Фоновая картинка -->
      <img 
        src="/river.png" 
        alt="Custom Map" 
        class="map-bg"
      />
  
      <!-- Абсолютные точки -->
      <div 
        v-for="point in points"
        :key="point.id"
        class="map-point"
        :style="{ left: `${point.x}%`, top: `${point.y}%` }"
        @mouseenter="hoveredId = point.id"
        @mouseleave="hoveredId = null"
      >
        <div class="point-dot"></div>
        <div class="point-label" :class="{ active: hoveredId === point.id }">
          <h2>{{ point.name }}</h2>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const points = [
    { id: 1, x: 42, y: 40, name: "Стрелка" },
    { id: 2, x: 50, y: 52, name: "Нижегородский кремль" },
    { id: 3, x: 58.5, y: 46, name: "Чкаловская лестница" },
    { id: 4, x: 35, y: 52, name: "Нижегородская ярмарка" },
    { id: 5, x: 30, y: 35, name: "Стадион Нижний Новгород" },
  ];
  
  const hoveredId = ref(null);
  </script>
  
  <style scoped>
  .map-container {
    position: relative;
    width: 100%;
    
    /* max-width: 1200px; */
    /* height: 100%; */
    margin: 0 auto;
  }
  
  .map-bg {
    width: 100%;
    height: auto;
    display: block;
  }
  
  .map-point {
    position: absolute;
    transform: translate(-50%, -50%);
    cursor: pointer;
    z-index: 2;
  }
  
  .point-dot {
    width: 20px;
    height: 20px;
    background: #d33f46;
    border-radius: 50%;
    border: 3px solid white;
    box-shadow: 0 0 0 3px #d6d6d6;
    transition: all 0.3s;
  }
  
  .point-label {
    position: absolute;
    top: 25px;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 14px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
    white-space: nowrap;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
  
  .map-point:hover .point-dot {
    background: #FF5722;
    box-shadow: 0 0 0 2px #FF5722;
  }
  
  .point-label.active {
    opacity: 1;
    visibility: visible;
  }
  </style>