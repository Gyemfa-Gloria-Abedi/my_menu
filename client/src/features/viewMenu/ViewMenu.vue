<template>
  <div>
    <h4 class="heading">View Your Menu</h4>
    <div class="cards">
        <Transition name="button-press">
            <div class="createCard" 
                @mousedown="pressedCreateCard = true"
                @mouseup="pressedCreateCard = false"
                @mouseleave="pressedCreateCard = false"
                :class="{ pressed: pressedCreateCard }"
            >
                <p class="icon">+</p>
                <p class="text">Create New Menu</p>
            </div>
        </Transition>

        <Transition name="button-press">
            <div class="copyCard"
                @mousedown="pressedcopyCard = true"
                @mouseup="pressedcopyCard = false"
                @mouseleave="pressedcopyCard = false"
                :class="{ pressedcopyCard: pressedcopyCard }"
            >
                <Copy/>
                <p class="text">Copy Existing</p>
            </div>
        </Transition>
    </div>
    
    <!-- date -->
    <div class="date-picker">
        <VueDatePicker v-model="date" :calendar="calendarFn" class="vue-date-picker"></VueDatePicker>

        <!-- Custom 7-day layout -->
  <div class="week-container">
    <div
      v-for="(day, index) in weekDays"
      :key="index"
      @click="selectDay(day.dateObj, index)"
      class="day-box"
      :class="{ selected: selectedIndex === index }"
    >
      <span class="day-name">{{ day.name }}</span>
      <span class="day-number">{{ day.date }}</span>
    </div>
  </div>
    </div> 

    <!-- view menu for a selected date -->
     <div class="menu-category">
        <!-- breakfast -->
         <h4 class="category-title">Breakfast</h4>
         <div v-for="menu in allFoods" :key="menu.id" class="menu" v-show="menu.category === 'breakfast'">
            <MenuCard :menu-image="menu.image" :menu-name="menu.name" />
         </div>
         <!-- lunch -->
         <h4 class="category-title">Lunch</h4>
         <div v-for="menu in allFoods" :key="menu.id" class="menu" v-show="menu.category === 'lunch'">
            <MenuCard :menu-image="menu.image" :menu-name="menu.name" />
         </div>
          <!-- supper -->
           <h4 class="category-title">Supper</h4>
         <div v-for="menu in allFoods" :key="menu.id" class="menu" v-show="menu.category === 'supper'">
            <MenuCard :menu-image="menu.image" :menu-name="menu.name" />
         </div>
         <!-- snacks -->
           <h4 class="category-title">Snacks</h4>
         <div v-for="menu in allFoods" :key="menu.id" class="menu" v-show="menu.category === 'snacks'">
            <MenuCard :menu-image="menu.image" :menu-name="menu.name" />
         </div>
     </div>
    
     <!-- recent menu -->
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';
import { format, addDays, startOfWeek } from 'date-fns'
import Copy from '@/assets/icons/copy.vue';
import VueDatePicker, { type CalendarWeek } from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { foods } from './viewMenu.data';
import MenuCard from '@/components/MenuCard.vue';
import type { Food } from './viewMenu.types';

const date = ref(new Date());
const calendarFn = (weeks:CalendarWeek[]) => {
  return weeks
        .filter((week) => week.days.some((day) => day.text === 15))
        .map((week) => ({
          ...week,
          days: week.days.map((day) => {
            day.classData['custom-class'] = true;
            return day;
          }),
        }));
}

// Set selected index to today
const selectedIndex = ref(new Date().getDay()) // 0 (Sun) to 6 (Sat)

// Get current week's 7 days
const weekStart = computed(() => startOfWeek(date.value, { weekStartsOn: 0 })) // Sunday
const weekDays = computed(() =>
  Array.from({ length: 7 }, (_, i) => {
    const d = addDays(weekStart.value, i)
    return {
      name: format(d, 'EEE'),     // "Sun"
      date: format(d, 'd'),       // "14"
      dateObj: d,
    }
  })
)

// Handle custom day selection
function selectDay(day: Date, index: number) {
  date.value = day
  selectedIndex.value = index
}

const allFoods = ref<Food[]>([]);
const unsplashAccess = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

async function fetchFoodImages(foodArray: Food[]) {
  return await Promise.all(
    foodArray.map(async (food) => {
      const query = encodeURIComponent(food.name);
      const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=1&client_id=${unsplashAccess}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        const imageUrl = data.results[0]?.urls?.regular;

        return {
          ...food,
          image: imageUrl
        };
      } catch (error) {
        console.error(`Error fetching image for ${food.name}:`, error);
        return {
          ...food,
          image: 'https://via.placeholder.com/150?text=Error'
        };
      }
    })
  );
}

onMounted(async () => {
    allFoods.value = await fetchFoodImages(foods);
});

const pressedCreateCard = ref(false);

const pressedcopyCard = ref(false);
</script>

<style scoped>
.heading{
    color: #FFFFFF;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.5rem;
    margin-top: 1.5rem;
}
.cards{
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
    margin-bottom: 2.375rem;
}
.createCard, .copyCard{
    padding: 1rem 3.6rem;
    display: flex;
    flex-direction: column;
    border-radius: 0.75rem;
    width: fit-content;
    align-items: center;
    cursor: pointer;
    transition: transform 0.1s ease;
}
.createCard{
    background-color: #3B82F6;
}
.createCard .icon{
    font-size: xx-large;
    color: #000;
}
.createCard .text, .copyCard{
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 400;
}
.createCard.pressed, .copyCard.pressedcopyCard{
    box-shadow: rgba(171, 170, 248, 0.35) 0px 5px 15px;
    transform: scale(0.95);
}
.button-press-enter-active,
.button-press-leave-active {
  transition: all 0.1s ease;
}
.copyCard{
    background-color: #10B981;
    height: fit-content;
    gap: 18px;
}
.date-picker{
    border-top: 2px solid #CED4DA;
    padding-top: 2px;
    margin-bottom: 1.5rem;
}
.vue-date-picker{
    display: none !important;
}
.week-container {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 10px;
  max-width: 100%;
  overflow-x: auto;
  color: white;
}

.day-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.4rem 1.1rem;
  border-radius: 50%;
  cursor: pointer;
  background-color: transparent;
  transition: background-color 0.3s ease;
  color: white;
  overflow-x: hidden;
}

.day-box.selected {
  background-color: #e0ebff;
  color: #2563eb;
  font-weight: bold;
}
.menu{
    margin-bottom: 1rem;
}
.category-title{
    margin-bottom: 0.8rem;
}
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;

}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>