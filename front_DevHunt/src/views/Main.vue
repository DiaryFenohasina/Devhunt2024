<template>
   <div>
      <Banner/>
      <About/>
      <Clubs/>
   </div>
</template>

<script>
import Banner from '@/components/banner.vue'
import About from '@/components/about.vue'
import Clubs from '@/components/Clubs.vue'


export default {
  name: 'SampleComponent',
  components:{
    Banner,
    About,
    Clubs
  }
};
</script>