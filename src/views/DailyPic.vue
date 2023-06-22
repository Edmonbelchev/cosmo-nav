<template>
    <div class="container">
        <div class="datepicker-container">
            <label for="datepicker">Select Date:</label>
            <VueDatePicker :format="formatDate" v-model="selectedDate" :max-date="new Date()">
                <template #dp-input="{ value }">
                    <input type="text" :value="value" />
                </template>
            </VueDatePicker>
        </div>

        <template v-if="response">
            <h1>{{ response.title }}</h1>
            <p>{{ response.explanation }}</p>
            <img :src="response.url" :alt="response.title" />
        </template>
        
        <template v-else>
            <p>Loading...</p>
        </template>
    </div>
</template>
  
<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { formatDate } from '../utils';

const response = ref(null);

/* CURRENT DATE AS DEFAULT */
const selectedDate = ref('');

/* ASSIGN FUNCTION FOR RETRIEVING IMAGE OF THE DAY */
const fetchData = async (date = selectedDate.value) => {
    response.value = null
    try {
        const result = await axios.get(
            `https://api.nasa.gov/planetary/apod?api_key=${window.nasa_api_key}&date=${date}`
        );
        response.value = result.data;
    } catch (error) {
        console.error(error);
        response.value = null;
    }
};

/* RUN FETCH DATA IF DATE IS UPDATED */
watch(selectedDate, (newDate) => {
    const formattedDate = formatDate(newDate);
    selectedDate.value = formattedDate;

    fetchData();
});

/* FETCH DATA WHEN VIEW IS MOUNTED */
onMounted(() => {
    const formattedDate = formatDate(new Date());
    selectedDate.value = formattedDate;
});
</script>
  
<style lang="scss" scoped>
.container {
    h1 {
        margin-bottom: 20px;
    }

    p {
        margin-bottom: 40px;
    }

    img {
        width: 100%;
        object-fit: contain;
    }

    .datepicker-container {
        margin-bottom: 20px;
    }
}
</style>
  