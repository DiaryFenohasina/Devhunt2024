<template>
    <div class="row">
        <div class="">
            <p class="card-text">{{ Mentorat.intro }}</p>
            <p class="card-text mt-3">{{ Mentorat.p1 }}</p>
            <p class="card-text mt-3">{{ Mentorat.p2 }}</p>
            <div class="cadran mt-5">
                <div class="title">
                    <h3 class="card-title h3 ">{{Mentorat.cadran1.title}}</h3>
                </div>
                <div class="texte mt-4">
                    <p class="card-text mt-2">{{ Mentorat.cadran1.texte1 }}</p>
                    <p class="card-text mt-2">{{ Mentorat.cadran1.texte2 }}</p>
                </div>
                <div class="boutton mt-4">
                    <button type="button" class="contact btn btn-primary  m-auto">Trouver un mentor</button>
                </div>
            </div>
        </div>
        <div class="">
                        <!-- card 2 -->
            <div class="cadran mt-5">
                <div class="title">
                    <h3 class="card-title h3 ">{{Mentorat.cadran2.title}}</h3>
                </div>
                <div class="texte mt-4">
                    <p class="card-text mt-2">{{ Mentorat.cadran2.texte1 }}</p>
                    <p class="card-text mt-2">{{ Mentorat.cadran2.texte2 }}</p>
                </div>
                <div class="boutton mt-4">
                    <button type="button" class="contact btn btn-primary  m-auto">Trouver un mentor</button>
                </div>
            </div>
            <!-- card 3 -->
            <div class="cadran mt-5">
                <div class="title">
                    <h3 class="card-title h3 ">{{Mentorat.cadran3.title}}</h3>
                </div>
                <div class="texte mt-4">
                    <p class="card-text mt-2">{{ Mentorat.cadran3.texte1 }}</p>
                    <p class="card-text mt-2">{{ Mentorat.cadran3.texte2 }}</p>
                </div>
                <div class="boutton mt-4">
                    <button type="button" class="contact btn btn-primary  m-auto">Trouver un mentor</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { backServer } from '@/config/axiosConfig';
import {Mentorat} from '@/data'
 export default {
    data(){
        return {
            Mentorat,
            heart: '',
            user : {}
        }
    },
    mounted (){
        this.heartcolors()
    },
    methods:{
        async heartcolors(){
            try {
                const response = await backServer.post('');
                if(response.data === true)
                    this.heart = 'bi bi-heart'
                else 
                    this.heart = 'bi bi-heart-fill'

            } catch (error) {
                console.log(error)   
            }
        },
        async getMentor(){
            try {
                const response = await backServer.get('')
                this.user = [...response.data]
                console.log('succes')
            } catch (error) {
                console.log(error)
            }
        }
    }
 }
</script>

<style scoped>

</style>