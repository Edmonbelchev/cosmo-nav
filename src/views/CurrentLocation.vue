<template>
    <div class="container">
        <div class="heading">
            <h1>Detect Current Location</h1>
            <span class="sub-title">
                Please enable location detection on your device.
            </span>
        </div>

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

            <div ref="imageContainer" class="image-container" @mousedown="startPan" @mousemove="handlePan" @mouseup="endPan">
                <div class="zoom-buttons" v-if="imageLoaded">
                    <a href="javascript:void(0);" @click="handleZoom($event, true)">
                        <i class="cs-zoom-in"></i>
                    </a>
                    <a href="javascript:void(0);" @click="handleZoom($event, false)">
                        <i class="cs-zoom-out"></i>
                    </a>
                </div>
                <img v-if="imageLoaded" :src="response.url" :style="imageStyle">
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
import { ref, reactive, onMounted, watch } from 'vue'
import axios from 'axios'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { formatDate } from '../utils';

interface Geo {
    coords: {
        latitude: number,
        longitude: number
    }
}

/* VARIABLES */
const errorMsg = ref(null)
const response: any = ref(null)

const position: Geo | any = ref({})

const imageLoaded = ref(false)
const imageContainer: HTMLElement | any = ref(null)
let selectedDate: any = ref(null)

/* ACCEPTS DATE PARAM. GET TODAY IF NO DATE IS SEND AS PARAMETER */
const getUserLocation = () => {
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

const fetchData = async (position: Geo, date: any) => {
    try {
        errorMsg.value = null
        response.value = null

        const result = await axios.get(`https://api.nasa.gov/planetary/earth/assets?lon=${position.coords.latitude}&lat=${position.coords.longitude}&dim=0.300&date=${date}&api_key=${window.nasa_api_key}`);

        response.value = result.data;
    } catch(error: any){
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

const imageStyle = reactive({
    transform: 'scale(1) translate(0, 0)',
});

let isPanning = false
let startPanX = 0
let startPanY = 0
let translateX = 0
let translateY = 0
let scale = 1

const getEventX = (event: MouseEvent | TouchEvent) => {
if (event instanceof MouseEvent) {
    return event.clientX;
} else if (event.touches.length > 0) {
    return event.touches[0].clientX;
}
    return 0;
}

const getEventY = (event: MouseEvent | TouchEvent) => {
if (event instanceof MouseEvent) {
    return event.clientY;
} else if (event.touches.length > 0) {
    return event.touches[0].clientY;
}
    return 0;
}

const startPan = (event: MouseEvent | TouchEvent) => {
    isPanning = true
    startPanX = getEventX(event)
    startPanY = getEventY(event)
}

const handlePan = (event: MouseEvent | TouchEvent) => {
    if (isPanning) {
    const offsetX = getEventX(event) - startPanX
    const offsetY = getEventY(event) - startPanY
    translateX += offsetX
    translateY += offsetY
    startPanX = getEventX(event)
    startPanY = getEventY(event)
    updateImageTransform()
    }
}

const endPan = () => {
    isPanning = false
}

/* HANDLE ZOOM IN AND ZOOM OUT */
const handleZoom = (event: MouseEvent, zoomIn: boolean = true) => {
    const zoomDelta = event.shiftKey ? -0.1 : 0.1 // ZOOM SPEED
    const newScale = zoomIn ? scale + zoomDelta : scale - zoomDelta

    if (newScale >= 0.5 && newScale <= 2) { // MINIMUM AND MAXIMUM ZOOM LEVEL
        const containerRect = imageContainer.value.getBoundingClientRect();
        const containerCenterX = containerRect.width / 2;
        const containerCenterY = containerRect.height / 2;
        const mouseX = event.clientX - containerRect.left;
        const mouseY = event.clientY - containerRect.top;

        const scaleRatio = newScale / scale;
        const translateXDelta = (1 - scaleRatio) * (mouseX - containerCenterX);
        const translateYDelta = (1 - scaleRatio) * (mouseY - containerCenterY);

        translateX += translateXDelta;
        translateY += translateYDelta;
        scale = newScale;

        imageStyle.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`
    }
}

const updateImageTransform = () => {
    imageStyle.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`
};

watch(selectedDate, (newDate: any) => {
    const formattedDate = formatDate(newDate);
    selectedDate.value = formattedDate;

    fetchData(position.value, formattedDate)
});

onMounted(() => {
    getUserLocation()
})
</script>

<style lang="scss" scoped>
.heading{
    margin-bottom: 20px;
}
.datepicker-container{
    margin-bottom: 20px;
}
.table-wrapper{
    border-radius: 3px;
    overflow: hidden;
    margin-bottom: 20px;
    overflow: scroll;
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
                @media (max-width: 480px){
                    font-size: 13px;
                }
            }
        }
    }
}

.loader{
    padding: 10px;
}

.image-container{
    width: 100%;
    height: 100%;
    overflow: hidden;
    cursor: grab;
    position: relative;
    border: 2px solid $light;
    border-radius: 10px;
    max-height: 800px;
    .zoom-buttons{
        position: absolute;
        top: 20px;
        right: 20px;
        z-index: 1;
        a{
            text-decoration: none;
            color: $light;
            font-size: 24px;
            &:first-of-type{
                margin-right: 20px;
            }
        }
    }
    img {
        width: 100%;
        display: block;
        transition: transform 0.2s ease;
        pointer-events: none;
    }
}
</style>