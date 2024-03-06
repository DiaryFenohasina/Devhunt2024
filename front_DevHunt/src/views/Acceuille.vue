<template>
     <section class="section landing pb-0">
    <div class="container p-3">
        
        <div class="row justify-content-between align-items-center p-3">
            <div class="col-lg-4 d-lg-block d-none">
                <img src="../assets/images/eni.png" alt="illustration" class="img-fluid rounded" style="max-width: 90%">
            </div>
            <div class="col-lg-7  text-left">
                <h1 class="mb-4">A propos des clubs</h1>
                <p class="mb-5">Lorem ipsum dolor amet, consetetur sadiffspscing elitr, diam nonumy invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua At.</p>
                
                
            </div>
            
            
        </div>
        <div class="row justify-content-between align-items-center p-3">
            
            <div class="col-lg-7  text-left">
                <h1 class="mb-4">A propos des mentors</h1>
                <p class="mb-5">Lorem ipsum dolor amet, consetetur sadiffspscing elitr, diam nonumy invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua At.</p>
                
                
            </div>
            <div class="col-lg-4 d-lg-block d-none">
                <img src="../assets/images/eni.png" alt="illustration" class="img-fluid rounded" style="max-width: 90%">
            </div>
            
            
        </div>
        <div class="row justify-content-between align-items-center p-3">
            <div class="col-lg-4 d-lg-block d-none">
                <img src="../assets/images/eni.png" alt="illustration" class="img-fluid rounded" style="max-width: 90%">
            </div>
            <div class="col-lg-7  text-left">
                <h1 class="mb-4">Vie Assosiative</h1>
                <p class="mb-5">Lorem ipsum dolor amet, consetetur sadiffspscing elitr, diam nonumy invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua At.</p>
                
                
            </div>
            
            
        </div>
        <div class="row justify-content-between align-items-center p-3">
            
            <div class="col-lg-7  text-left">
                <h1 class="mb-4">Vie Sportifs   </h1>
                <p class="mb-5">Lorem ipsum dolor amet, consetetur sadiffspscing elitr, diam nonumy invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua At.</p>
                
                
            </div>
            <div class="col-lg-4 d-lg-block d-none">
                <img src="../assets/images/eni.png" alt="illustration" class="img-fluid rounded" style="max-width: 90%">
            </div>
            
            
        </div>
    </div>
    <transition name="animate">
         <div class="container p-3" v-if="show">
          <div class="col-lg-4 d-lg-block d-none">
                <img src="../assets/images/eni.png" alt="illustration" class="img-fluid rounded" style="max-width: 90%">
            </div>
        </div>
    </transition>
    <button @click="!show">rrerer</button>
   
  </section>
</template>
<script>
export default {
    name:"Acceuille",
    data(){
        return {
            show: true
        }
    }
}
</script>
<style scoped>
</style>