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
              <p>
                <img
                  :src="Clubs[index].image"
                  width="500px"
                  alt="image"
                />
              </p>
              <p>{{ Clubs[index].about }}</p>
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
</style>
