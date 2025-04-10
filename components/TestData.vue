<!-- <template>
    <div class="calendar">
      <div class="header">
        <select v-model="selectedMonth">
          <option v-for="(month, index) in months" :value="index" :key="month">
            {{ month }}
          </option>
        </select>
        <input type="number" v-model="selectedYear" min="1900" max="2100">
      </div>
  
      <div class="week-grid">
        <div class="day-cell" v-for="day in daysOfWeek" :key="day">{{ day }}</div>
      </div>
      
      <div class="week-grid">
        <div 
          v-for="day in currentWeek" 
          :key="day.date"
          class="day-cell"
          :class="{ selected: isSelected(day.date) }"
          @click="selectDate(day.date)"
        >
          {{ day.day }}
        </div>
      </div>
  
      <div class="nav-buttons">
        <button @click="changeWeek(-1)">◀</button>
        <button @click="changeWeek(1)">▶</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, watch } from 'vue';
  
  const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  const months = [
    'Январь', 'Февраль', 'Март', 'Апрель',
    'Май', 'Июнь', 'Июль', 'Август',
    'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
  ];
  
  const currentDate = ref(new Date());
  const selectedDate = ref(null);
  const selectedMonth = ref(new Date().getMonth());
  const selectedYear = ref(new Date().getFullYear());
  
  const getWeekDates = (date) => {
    const startDate = new Date(date);
    startDate.setDate(date.getDate() - date.getDay() + 1);
    
    return Array.from({ length: 7 }, (_, i) => {
      const dayDate = new Date(startDate);
      dayDate.setDate(startDate.getDate() + i);
      return {
        date: dayDate,
        day: dayDate.getDate(),
        month: dayDate.getMonth(),
        year: dayDate.getFullYear()
      };
    });
  };
  
  const currentWeek = computed(() => getWeekDates(currentDate.value));
  
  const isSelected = (date) => {
    return selectedDate.value?.toDateString() === date.toDateString();
  };
  
  const selectDate = (date) => {
    selectedDate.value = date;
  };
  
  const changeWeek = (offset) => {
    const newDate = new Date(currentDate.value);
    newDate.setDate(newDate.getDate() + offset * 7);
    currentDate.value = newDate;
    syncControlsWithCurrentDate();
  };
  
  const syncControlsWithCurrentDate = () => {
    selectedMonth.value = currentDate.value.getMonth();
    selectedYear.value = currentDate.value.getFullYear();
  };
  
  watch([selectedMonth, selectedYear], () => {
    currentDate.value = new Date(
      selectedYear.value,
      selectedMonth.value,
      currentDate.value.getDate()
    );
  });
  </script> -->
  <template>
    <div class="calendar-container">
      <!-- Controls -->
      <div class="controls">
        <select v-model="selectedMonth" @change="updateCalendar">
          <option v-for="(month, index) in months" :value="index" :key="month">
            {{ month }}
          </option>
        </select>
        <input 
          type="number" 
          v-model="selectedYear" 
          @change="updateCalendar"
          min="1900" 
          max="2100"
        >
      </div>
  
      <!-- Week Days Header -->
      <div class="week-header">
        <div 
          v-for="day in daysOfWeek" 
          :key="day"
          class="day-label"
        >
          {{ day }}
        </div>
      </div>
  
      <!-- Week Grid -->
      <div class="week-grid">
        <div
          v-for="day in currentWeek"
          :key="day.date.toString()"
          class="day-cell"
          :class="{
            selected: isSelected(day.date),
            'different-month': !day.isCurrentMonth
          }"
          @click="selectDate(day.date)"
        >
          {{ day.number }}
        </div>
      </div>
  
      <!-- Navigation -->
      <div class="navigation">
        <button @click="scrollWeek(-1)">← Предыдущая</button>
        <button @click="scrollWeek(1)">Следующая →</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, watch } from 'vue';
  
  const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  const months = [
    'Январь', 'Февраль', 'Март', 'Апрель',
    'Май', 'Июнь', 'Июль', 'Август',
    'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
  ];
  
  const currentDate = ref(new Date());
  const selectedDate = ref(null);
  const selectedMonth = ref(new Date().getMonth());
  const selectedYear = ref(new Date().getFullYear());
  
  const currentWeek = computed(() => {
    const startDate = new Date(currentDate.value);
    startDate.setDate(startDate.getDate() - startDate.getDay() + 1);
    
    return Array.from({ length: 7 }, (_, i) => {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      
      return {
        date: date,
        number: date.getDate(),
        isCurrentMonth: date.getMonth() === currentDate.value.getMonth()
      };
    });
  });
  
  const isSelected = (date) => {
    return selectedDate.value?.toDateString() === date.toDateString();
  };
  
  const selectDate = (date) => {
    selectedDate.value = date;
  };
  
  const scrollWeek = (weeks) => {
    const newDate = new Date(currentDate.value);
    newDate.setDate(newDate.getDate() + weeks * 7);
    currentDate.value = newDate;
    updateControls();
  };
  
  const updateControls = () => {
    selectedMonth.value = currentDate.value.getMonth();
    selectedYear.value = currentDate.value.getFullYear();
  };
  
  const updateCalendar = () => {
    currentDate.value = new Date(
      selectedYear.value,
      selectedMonth.value,
      currentDate.value.getDate()
    );
  };
  
  watch([selectedMonth, selectedYear], updateCalendar);
  </script>
  <style  scoped>
  .calendar-container {
    max-width: 600px;
    margin: 2rem auto;
    padding: 1.5rem;
    background: #ffffff;
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    font-family: 'Segoe UI', system-ui, sans-serif;
  }
  
  .controls {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
  
  select {
    padding: 0.6rem 1rem;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 1rem;
    background: #f8f9fa;
    transition: all 0.2s ease;
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 0.8rem center;
    background-size: 1em;
  }
  
  select:focus {
    outline: none;
    border-color: #4d90fe;
    box-shadow: 0 0 0 3px rgba(77, 144, 254, 0.15);
  }
  
  input[type="number"] {
    padding: 0.6rem 1rem;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 1rem;
    background: #f8f9fa;
    transition: all 0.2s ease;
  }
  
  input[type="number"]:focus {
    outline: none;
    border-color: #4d90fe;
    box-shadow: 0 0 0 3px rgba(77, 144, 254, 0.15);
  }
  
  .week-header {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 0.25rem;
    margin-bottom: 0.5rem;
  }
  
  .day-label {
    text-align: center;
    padding: 0.75rem;
    font-weight: 600;
    color: #6b7280;
    font-size: 0.9em;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  
  .week-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 0.25rem;
  }
  
  .day-cell {
    padding: 1rem;
    text-align: center;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    font-weight: 500;
    background: #ffffff;
    border: 2px solid transparent;
    color: #1f2937;
  }
  
  .day-cell:hover {
    background: #f3f4f6;
    transform: translateY(-1px);
  }
  
  .day-cell.selected {
    background: #3b82f6;
    color: white;
    border-color: #2563eb;
    box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.3);
  }
  
  .day-cell.different-month {
    color: #9ca3af;
    background: #f8f9fa;
  }
  
  .navigation {
    margin-top: 1.5rem;
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
  }
  
  button {
    padding: 0.6rem 1.25rem;
    background: #3b82f6;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  button:hover {
    background: #2563eb;
    transform: translateY(-1px);
    box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.3);
  }
  
  @media (max-width: 640px) {
    .calendar-container {
      margin: 1rem;
      padding: 1rem;
      border-radius: 12px;
    }
    
    .day-cell {
      padding: 0.75rem;
      font-size: 0.9em;
    }
    
    button {
      padding: 0.5rem 1rem;
      font-size: 0.9em;
    }
  }

  .calendar {
    font-family: Arial, sans-serif;
    max-width: 350px;
  }
  
  .header {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
  }
  
  .week-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 2px;
  }
  
  .day-cell {
    padding: 10px;
    text-align: center;
    border: 1px solid #ddd;
    cursor: pointer;
  }
  
  .selected {
    background-color: #ff4444;
    color: white;
  }
  
  .nav-buttons {
    margin-top: 10px;
    display: flex;
    gap: 5px;
  }
  </style>