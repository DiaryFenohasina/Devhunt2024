<template>
  <section class="section pb-0">
    <div class="container">
      <h2 class="section-title">Our Offered Services</h2>
      <div class="row">
        
            <Card class="c-type" v-for="(data,index) in serviceData " :key="index">
              <router-link :to="`/Services/${index}`">
                <i class="card-icon mb-4" :class="data.icon" ></i>
                <h3 class="card-title h4">{{data.title}}</h3>
                <p class="card-text">{{data.text}}</p>
              </router-link>
            </Card>
         
      </div>
    </div>
  </section>
</template>
<script>
import Card from '@/components/Card.vue'
import {serviceData} from '@/data'

export default {
  data(){
    return{
      serviceData
    }
  },
  components:{
    Card,
  }
}
</script>


