<template>
    <div class="section pb-0">
        <div class="container">
            <div class="image d-flex col-md-12 col-xs-12 col-sm-12 col-xl-12">
                <div class="col-md-4"></div>
                <img src="../assets/images/espace_montorat.png" alt="" class="image mb-5">
            </div>
            <h2 class="section-title mt-4">Les Mentors</h2>
            <div class="row">
                <div class="col-lg-4 col-md-5 col-sm-7 mb-5">
                    <div class="card match-height" style="height: 321.4px;">
                      <div class="card-body">
                        <div class="d-flex gap-5">
                            <img src="../assets/images/card.png" class="avatar" alt="">
                            <div class="text">
                                <p class="card-title h8">RICHARTS</p>
                                <p class="card-title h8">Diary Fenohasina</p>
                                <p class="card-title h8">L2 GB</p>
                            </div>
                        </div>
                        <div class="d-flex gap-5 mt-3">
                            <div class="text col-lg-7 ">
                                <p class="card-text mt-1">Dev ReactJs</p>
                                <p class="card-text mt-1">Dev ReactJs</p>
                                <p class="card-text mt-1">Dev ReactJs</p>         
                            </div>
                            <div class="contact mt-4">
                                <button type="button" class="contact btn btn-primary  m-auto"><i class="card-icon mb-4 ti-comments" ></i></button>
                            </div>
                        </div>   
                        <slot/>
                      </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-5 col-sm-7 mb-5">
                    <div class="card match-height" style="height: 321.4px;">
                      <div class="card-body">
                        <div class="d-flex gap-5">
                            <img src="../assets/images/card.png" class="avatar" alt="">
                            <div class="text">
                                <p class="card-title h8">RICHARTS</p>
                                <p class="card-title h8">Diary Fenohasina</p>
                                <p class="card-title h8">L2 GB</p>
                            </div>
                        </div>
                        <div class="d-flex gap-5 mt-3">
                            <div class="text col-lg-7 ">
                                <p class="card-text mt-1">Dev ReactJs</p>
                                <p class="card-text mt-1">Dev ReactJs</p>
                                <p class="card-text mt-1">Dev ReactJs</p>         
                            </div>
                            <div class="contact mt-4">
                                <button type="button" class="contact btn btn-primary  m-auto"><i class="card-icon mb-4 ti-comments" ></i></button>
                            </div>
                        </div>   
                        <slot/>
                      </div>
                    </div>
                </div>
            </div>
            <ListMentor></ListMentor>
        </div>
    </div>
</template>


<script>
import ListMentor from '@/components/ListMentor.vue'

export default{
    data(){
      return{

    }
    },
    components:{
        ListMentor
    }
}
</script>

<style scoped>
.avatar{
    border-radius: 5%;
    height: 140px;
    object-fit: cover;
    vertical-align: middle;
}
.contact{
    border-radius: 5%;
    height: 70px;
    object-fit: cover;
    vertical-align: middle;
}
</style>