<template>
   <div>
      <Banner/>
      <Services/>
   </div>
</template>

<script>
import Banner from '@/components/banner.vue'
import Services from '@/components/Services.vue'

export default {
  name: 'SampleComponent',
  components:{
    Banner,
    Services
  }
};
</script>