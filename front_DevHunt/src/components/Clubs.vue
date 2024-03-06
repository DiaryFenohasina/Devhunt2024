<template>
  <section class="section pb-0">
    <div class="container">
      <div class="section-title text-center">
        <h2 class=" text-center ">Clubs</h2>
        <p class="text-center">dsljfhsdlsfjsdlkfj   </p>
      </div>
      <div class="d-flex justify-content-center mb-2 ">
        <ul class="  px-5 d-flex">
            <li class="c-type" :class=" Show == 0 && 'active'" data-filter="*" @click="selectClubs(0)">All</li>
            <li class="mx-3 c-type" :class=" Show == 1 && 'active'" data-filter=".vector" @click="selectClubs(1)">Etudes</li>
            <li class="me-3 c-type" :class=" Show == 2 && 'active'" data-filter=".raster" @click="selectClubs(2)">Sports</li>
            <li class="c-type" :class=" Show == 3 && 'active'" data-filter=".ui" @click="selectClubs(3)">Autres</li>
        </ul>
      </div>
      <div class="row justify-content-center ">
            <Card class="c-type" v-for="(club,index) in data[Show] " :key="index">
              <router-link :to="`/Services/${index}`">
                <i class="card-icon mb-4" :class="club.icon" ></i>
                <h3 class="card-title h4">{{club.title}}</h3>
                <p class="card-text">{{club.text}}</p>
              </router-link>
            </Card>
            
      </div>
    </div>
  </section>
</template>
<script>
import Card from '@/components/Card.vue'
import {Clubs, Etudes, Sports, Autres} from '@/data'

export default {
  data(){
    return{
      data: [Clubs, Etudes, Sports, Autres],
      Show: 0

    }
  },
  components:{
    Card,
  },
  methods:{
    selectClubs(x)
    {
      console.log('clicked')
      this.Show = x
    }
  }
  
}
</script>
<style scoped>
  .active{
    color: #00d362;
  }
  li:hover{
    color: #00d362;
  }
</style>


