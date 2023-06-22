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

        <template v-if="response && response.images.length > 0">
            <swiper
                :slides-per-view="1"
                @swiper="onSwiper"
                :modules="[Thumbs]" 
                :thumbs="{ swiper: thumbsSwiper }"
            >
                <swiper-slide v-for="(image, key) in response.images" :key="key">
                    <img :src="image" >
                </swiper-slide>
            </swiper>

            <swiper
                ref="thumbsSwiper"
                :modules="[Thumbs]"
                watch-slides-progress
                @swiper="setThumbsSwiper"
                :slides-per-view="5"
                :space-between="10"
                class="thumbnails-wrapper"
                :breakpoints="{
                    '640': {
                        slidesPerView: 7,
                    },
                    '1024': {
                        slidesPerView: 10,
                    }
                }"
            >
                <swiper-slide v-for="(image, key) in response.images" :key="key">
                    <img :src="image" >
                </swiper-slide>
            </swiper>

        </template>
    </div>
</template>

<script setup lang="ts">
    import { Thumbs, Navigation } from 'swiper'
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import {ref, watch, onMounted} from 'vue'
    import axios from 'axios'
    import 'swiper/scss'
    import VueDatePicker from '@vuepic/vue-datepicker'
    import '@vuepic/vue-datepicker/dist/main.css'
    import { formatDate } from '../utils';

    const response = ref({ images: [] })
    const thumbsSwiper = ref(null)
    const selectedDate = ref(null)

    /* FUNCTIONS */
    const format = (date: Date = new Date()) => {
        date = new Date(date)

        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()

        return `${year}/${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}`
    }

    const fetchData = async (getDate: Date = new Date()) => {
        try{
            response.value.images = []

            const result = await axios.get(`https://api.nasa.gov/EPIC/api/enhanced/date/${getDate}?api_key=${window.nasa_api_key}`)

            result.data.forEach((item) => {
                const date = format(item.date)
                response.value.images.push(`https://epic.gsfc.nasa.gov/archive/enhanced/${date}/jpg/${item.image}.jpg`)
            })
            
        } catch(error){
            console.log(error)
        }
    }

    /* SETUP THUMBNAIL FOR SLIDER */
    const setThumbsSwiper = (swiper) => {
        thumbsSwiper.value = swiper
    }

    /* SETUP SLIDER */
    const onSwiper = (swiper) => {
        console.log(swiper)
    }

    onMounted(() => {
        /* GET TODAY -2 DAYS ON VIEW MOUNTING */
        const formattedDate = formatDate(new Date(), 2)
        selectedDate.value = formattedDate
    })

    /* WATCH FOR DATE CHANGES AND RUN fetchDATA */
    watch(selectedDate, (newDate) => {
        const formattedDate = formatDate(newDate)
        selectedDate.value = formattedDate

        fetchData(formattedDate)
    })
</script>

<style lang="scss" scoped>
    .swiper-wrapper{
        img{
            width: 100%;
            max-width: 100%;
            border-radius: 10px;
        }
    }

    .thumbnails-wrapper{
        img{
            border-radius: 10px;
        }
    }
</style>