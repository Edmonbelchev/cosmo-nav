<template>
  <main>
    <div class="container">
      <h1>Welcome to CosmoNav!</h1>

      <p>
        At CosmoNav, we're passionate about astronomy and helping you explore the wonders of the universe. Our website combines the fascinating world of astronomy with cutting-edge technology to provide a unique and immersive experience.
        <br>
        <br>
        With our innovative Epic API integration, we bring you captivating images of planet Earth captured by NASA's EPIC (Earth Polychromatic Imaging Camera) satellite. EPIC provides stunning images of our beautiful planet from a unique vantage point in space. You'll be able to witness breathtaking views of Earth as it orbits the sun, revealing the ever-changing landscapes, weather patterns, and natural phenomena.
        <br>
        <br>
        But that's not all. CosmoNav goes beyond just presenting stunning images. We leverage the power of geolocation technology to determine your current location on Earth. By pinpointing your coordinates, we provide a personalized experience, tailoring the content to showcase the specific features and phenomena that are occurring in your area. You'll gain a deeper appreciation for the Earth's diverse regions and the dynamic nature of our planet.
        <br>
        <br>
        Whether you're a seasoned astronomer or simply curious about the vastness of space, CosmoNav is here to spark your sense of wonder and expand your knowledge. Join us on this cosmic journey as we explore the Earth's beauty and unravel the mysteries of the universe.
        <br>
        <br>
        Start your astronomical adventure with CosmoNav today and embark on a thrilling voyage through the cosmos, right from the comfort of your own home.
      </p>

      <div class="elements-wrapper">
        <RouterLink :to="{ name: 'dailyPic' }" class="item-wrapper">
            <h2>Check Your Current Location</h2>
            <figure>
              <img src="/assets/images/current-location.webp?ver=1" alt="">
            </figure>
        </RouterLink>

        <RouterLink :to="{ name: 'currentLocation' }" class="item-wrapper">
              <h2> Astronomy Picture of the Day </h2>
              <figure>
                <img src="/assets/images/picture-of-the-day.webp" alt="">
              </figure>
          </RouterLink>

          <RouterLink :to="{ name: 'earthImage' }" class="item-wrapper">
              <h2>View Latest Earth's Images</h2>
              <figure>
                <img src="/assets/images/earth-image.webp" alt="">
              </figure>
          </RouterLink>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'

</script>

<style lang="scss" scoped>
  h1{
    margin-bottom: 20px;
  }

  .elements-wrapper{
    padding-top: 40px;
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 480px){
      padding-top: 20px;
    }
    .item-wrapper{
      display: flex;
      flex-direction: column;
      flex-basis: 32%;
      padding: 20px;
      position: relative;
      min-height: 300px;
      border-radius: 5px;
      overflow: hidden;
      text-decoration: none;
      background: #181818;
      flex: 1;
      margin-bottom: 10px;
      @media (max-width: 768px){
        flex-basis: 49%;
      }
      @media(max-width: 480px){
        flex-basis: 100%;
      }
      &:not(:last-of-type){
        margin-right: 10px;
      }
      h2{
        position: relative;
        z-index: 1;
        font-size: 32px;
        text-align: center;
        margin-top: auto;
        color: $light;
        font-weight: 800;
        background: rgba(0,0,0,.5);
        backdrop-filter: blur(5px);
        padding: 5px;
        border-radius: 5px;
        @media (max-width: 992px){
          font-size: 24px;
        }
        @media (max-width: 480px){
          font-size: 20px;
        }
      }
      img{
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
      }
    }
  }
</style>
