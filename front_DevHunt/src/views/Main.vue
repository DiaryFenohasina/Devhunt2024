<template>
   <div>
      <Banner/>
      <About/>
      <Tools/>
      <Clubs/>
   </div>
</template>

<script>
import Banner from '@/components/banner.vue'
import About from '@/components/about.vue'
import Tools from '@/components/Tools.vue'
import Clubs from '@/components/Clubs.vue'


export default {
  name: 'SampleComponent',
  components:{
    Banner,
    About,
    Tools,
    Clubs
  }
};
</script>