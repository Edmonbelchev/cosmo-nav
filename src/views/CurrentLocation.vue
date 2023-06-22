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
            <div class="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Date</th>
                            <th>Dataset</th>
                            <th>Planet</th>
                        </tr>
                    </thead>
    
                    <tbody>
                        <tr>
                            <td>
                                {{ response.id }}
                            </td>
                            <td>
                                {{ response.date }}
                            </td>
                            <td>
                                {{ response.resource.dataset }}
                            </td>
                            <td>
                                {{ response.resource.planet }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div ref="imageContainer" class="image-container">
                <img v-if="imageLoaded" :src="response.url">
                <div v-else class="loader">Loading Image...</div>
            </div>
        </template>

        <template v-else>
            <span class="error" v-if="errorMsg">
                {{ errorMsg }}
            </span>
            <span v-else>
                Loading...
            </span>
        </template>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import axios from 'axios'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { formatDate } from '../utils';

/* VARIABLES */
const errorMsg = ref(null)
const response = ref(null)
const position = ref(null)
const imageLoaded = ref(false)
const imageContainer = ref(null)
let selectedDate = ref(null)

/* ACCEPTS DATE PARAM. GET TODAY IF NO DATE IS SEND AS PARAMETER */
const getUserLocation = (date = null) => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                position.value = pos

                /* GET DATE */
                const formattedDate = formatDate(new Date(), 700)
                selectedDate.value = formattedDate

                fetchData(position.value, formattedDate)
            },
            (error) => {
                console.error('Error getting user location:', error)
            }
        )
    } else {
        console.error('Geolocation is not supported by this browser.')
    }
};

const fetchData = async (position, date) => {
    try {
        errorMsg.value = null
        response.value = null

        const result = await axios.get(`https://api.nasa.gov/planetary/earth/assets?lon=${position.coords.latitude}&lat=${position.coords.longitude}&dim=0.300&date=${date}&api_key=${window.nasa_api_key}`);

        response.value = result.data;
    } catch(error){
        errorMsg.value = error.message
        console.log(errorMsg.value)

        response.value = null;
    } finally {
        if(errorMsg.value != null) return

        setTimeout(() => {
            /* CALL OBSERVER IF IMAGE IS LOADING */
            intersectionObserver.observe(imageContainer.value);
        }, 100)
    }
};

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
}

const intersectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Image is in the viewport
      imageLoaded.value = false; // Set imageLoaded state to false to show loading state
      const image = new Image()
      image.src = response.value.url
      image.onload = () => {
        console.log('loaded')
        imageLoaded.value = true; // Set imageLoaded state to true once the lazy image is loaded
      }
      intersectionObserver.unobserve(entry.target)
    }
  })

}, observerOptions)

watch(selectedDate, (newDate) => {
    const formattedDate = formatDate(newDate);
    selectedDate.value = formattedDate;

    fetchData(position.value, formattedDate)
});

onMounted(() => {
    getUserLocation()
})
</script>

<style lang="scss" scoped>
.datepicker-container{
    margin-bottom: 20px;
}
.table-wrapper{
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 20px;
    table{
        width: 100%;
        border-collapse: collapse;
        color: #000000;
        td, th{
            border-width: 2px;
            border-color: #E36B6B;
            border-style: solid;
            padding: 5px;
        }
        thead{
            background-color: #E34242;
            color: $light;
        }
        tbody{
            background: #eee;
            td{
                font-size: 15px;
            }
        }
    }
}
img {
    max-width: 900px;
    width: 100%;
}
</style>