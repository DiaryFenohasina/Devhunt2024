<template>
  <section class="pt-5">
    <div class="container shadow section-sm rounded">
      <div class="row">
        <div class="col-lg-3">
          <ul class="sidenav" v-for="(data, id) in Clubs" :key="id">
            <li class="sidelist c-type" @click="changeIndex(id)">
              <span :class="id == index && 'isActive'">{{ data.title }}</span>
            </li>
          </ul>
        </div>
        <div class="col-lg-8">
          <div class="px-lg-5 px-4">
            <h2 class="mb-4 font-weight-medium">
              {{ Clubs[index].title }}
            </h2>
            <div class="content">
              <div class="row">
               
                  <div class="col-lg-4 d-lg-block d-none">
                    <div class="card">
                      <div class="card__inner" @click="toggle1" ref="card_inner">
                        <div class="card__face card__face--front" >
                          <div style="position:relative">
                               <img
                  :src="Clubs[index].image"
                  width="500px"
                  alt="image"
                  
                />
                <div style="position:absolute; top:50%; left:50%; transform: translate(-50%,-50%)"> <h2>rgrgregregerger</h2></div>
               
                          </div>
                         
                        
                        </div>
                        <div class="card__face card__face--back">
                          <div class="card__content">
                            <div class="card__header">
                              
                              <h2>Biographie</h2>
                            </div>
                            <div class="card__body">
                              <h3>JavaScript Wizard</h3>
                              <p>Lorem ipsum <strong>dolor</strong> sit amet, consectetur <strong>adipiscing</strong> elit. Sed id erat a magna lobortis dictum. Nunc est arcu, <strong>lacinia</strong> quis sapien placerat, <strong>laoreet</strong> tincidunt nulla.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                  </div>

              </div>
              <!--<p>
                <img
                  :src="Clubs[index].image"
                  width="500px"
                  alt="image"
                />
              </p>
              <p>{{ Clubs[index].about }}</p>-->
            </div>
            <!-- navigation -->
            <!-- <nav class="pagination">
            <a class="nav nav-prev" href="https://examplesite.com/"><i class="ti-arrow-left mr-2"></i>
              <span class="d-none d-md-block">Hugo documentation theme</span></a>
            <a class="nav nav-next" href="https://examplesite.com/basic-startup/requirments/"> <span class="d-none d-md-block">Requirments</span><i class="ti-arrow-right ml-2"></i></a>
          </nav> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { Clubs } from "@/data";
// this.$route.params.id
export default {
  data() {
    return {
      Clubs,
      index: this.$route.params.id,
    };
  },
  methods: {
    changeIndex(ind) {
      this.index = ind;
    },
    toggle1(){
      this.$refs.card_inner.classList.toggle('is-flipped')
    }
  },
};
</script>
<style scoped>
span {
  padding: 20px 0;
  color: #222;
  display: block;
  font-size: 18px;
  font-weight: 500;
}
span:hover {
  color: var(--baseColor) !important;
  position: relative;
  margin-left: 10px;
}
.isActive {
  color: var(--baseColor) !important;
  position: relative;
  margin-left: 10px;
}
.isActive::before {
  position: absolute;
  content: "";
  left: -10px;
  top: 25%;
  height: 50%;
  width: 1px;
  background: var(--baseColor);
}
/*rsytududµ*/
:root {
  --primary: #00d362;
  --secondary:#ffff;
  --dark: #212121;
  --light: #F3F3F3;
}


.card {
  font-family: montserrat, sans-serif;
  margin: 100px auto 0;
  width: 300px;
  height: 500px;
  perspective: 1000px;
  
}

.card__inner {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
}

.card__inner.is-flipped {
  transform: rotateY(180deg);
}


.card__face {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0px 3px 18px 3px rgba(0, 0, 0, 0.2);
  
}

.card__face--front {
  background-image: linear-gradient(to bottom right, var(--primary), var(--secondary));
  display: flex;
  align-items: center;
  justify-content: center;
}

.card__face--front h2 {
  color: #FFF;
  font-size: 32px;
}

.card__face--back {
  background-color: var(--light);
  transform: rotateY(180deg);
 
}

.card__content {
  width: 100%;
  height: 100%;
}

.card__header {
  position: relative;
  padding: 30px 30px 40px;
}

.card__header:after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(to bottom left, var(--primary) 10%, var(--secondary) 115%);
  z-index: -1;
  border-radius: 0px 0px 50% 0px;
}

.pp {
  display: block;
  width: 128px;
  height: 128px;
  margin: 0 auto 30px;
  border-radius: 50%;
  background-color: #FFF;
  border: 5px solid #FFF;
  object-fit: cover;
}

.card__header h2 {
  color: #FFF;
  font-size: 32px;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
}

.card__body {
  padding: 30px;
}

.card__body h3 {
  color: var(--dark);
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 15px;
}

.card__body p {
  color: var(--dark);
  font-size: 18px;
  line-height: 1.4;
}
</style>

