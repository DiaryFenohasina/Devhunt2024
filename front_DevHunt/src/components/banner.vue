<template>
  <section class="section landing pb-0">
    <div class="container">
        <div class="row justify-content-between align-items-center">
            <div class="col-lg-7  text-left">
                <h1 class="mb-4">Bienvenue dans ENI guide</h1>
                <p class="mb-5">Connectez-vous pour explorer un monde de fonctionnalités personnalisées et de services adaptés à vos besoins.</p>
                
                <form class="search-wrapper d-sm-flex" action="search.html">
                    <input id="search-by" name="s" type="email" class="form-control form-control-lg" placeholder="votre_adresse@gmail.com">
                    <input id="search-by" name="s" type="password" class="form-control form-control-lg" placeholder="*************">
                    <button type="submit" class="btn btn-primary">Connexion</button>
                </form>
            </div>
            <div class="col-lg-4 d-lg-block d-none">
                <img src="../assets/images/eni.png" alt="illustration" class="img-fluid rounded" style="max-width: 90%">
            </div>
        </div>
        <div class="col-lg-4 d-lg-block d-none">
          <img
            src="../assets/images/eni.png"
            alt="illustration"
            class="img-fluid rounded"
            style="max-width: 90%"
          />
        </div>
      </div>
  </section>
</template>

<script>
</script>
<style scoped>
  .rounded{
    max-width: 90%;

  }
  
  /* @media screen and (min-width:769px) {
    .landing{
      min-height: 820px;
    }
  } */
</style>
