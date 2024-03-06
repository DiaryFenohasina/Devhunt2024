<template>
  <div class="row">
      <div class="col-lg-3">
      <div  class="avatar-container d-smart-none bg-light">
          <label for="formFileLg">
            <img :src="avatar" alt="Avatar" class="avatar-image" >
          </label>
        <div class="avatar-middle">
            Photo
        </div>
      </div>
      </div>
      <div class="col-lg-8">
      <div class="px-lg-5 px-4">
        <h2 class="mb-4 font-weight-medium">Create your own account</h2>
        <div class="content">
            <form class=" sign-up" @submit.prevent="register">
              <div class="form-floating mb-3">
                <input type="text" class="form-control" :class="isValid['username'] ? 'is-valid' : 'not-valid'" id="username" placeholder="" @input="inputHandler" required v-model="user['username']" @keyup="inputHandler">
                <label for="username">Username</label>
              </div>
             
                <div class="form-floating mb-3">
                <input type="email" class="form-control" :class="isValid['email'] ? 'is-valid' : 'not-valid'" id="email" placeholder="" @input="inputHandler" required v-model="user['email']" @keyup="inputHandler" >
                <label v-if="errorMsg" for="email" class="text-primary text-decoration-underline" >{{errorMsg}}</label>
                <label v-else for="email">Email</label>

              </div>
              <div class="form-floating mb-3">
                <input type="password" class="form-control" :class="isValid['password'] ? 'is-valid' : 'not-valid'" id="password" placeholder="" @input="inputHandler" required v-model="user['password']" @keyup="inputHandler">
                <label for="password">Password</label>
              </div>
              <div class="form-floating mb-3">
                <input type="password" class="form-control" :class="isValid['confirmPass'] ? 'is-valid' : 'not-valid'" id="confirmPassword" placeholder="" @input="inputHandler" required v-model="user['confirmPassword']" @keyup="inputHandler">
                <label for="confirmPassword">Confirm password</label>
              </div>
              <div class="mb-5 d-lg-none">
                <label for="formFileLg" class="form-label">Photo</label>
                <input class="form-control form-control-lg" id="formFileLg" @change="fileHandler" type="file" >
              </div>
              <div class="d-flex align-items-center justify-content-end">
                <router-link to="/Sign/In"><span class="mx-2 mx-sm-3 has-acc">Have an account ?</span></router-link>
                <button type="submit" class="btn btn-primary" :disabled="isDisable">Create Account</button>
              </div>
            </form>
        </div>
      </div>
      </div>
    </div>
</template>
<script>
  import sary from '@/assets/images/avatar.png'
  import { backServer } from '@/config/axiosConfig'

  export default{
    data() {
      return {
          user:{},
          avatar : sary,
          isValid:{username: false, email: false, password: false, confirmPass: false, file: false},
          isDisable: true,
          sign: this.$route.path,
          errorMsg:''
      }
    },
    methods: {
      inputHandler(e){
        switch (e.target.id) {
          case 'username':
              e.target.value.length >0 ? this.isValid['username'] = true : this.isValid['username'] = false
            break;
          case 'email':
              /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(e.target.value) ? this.isValid['email'] = true : this.isValid['email'] = false
            break;
          case 'password':
              e.target.value.length >=6 ? this.isValid['password'] = true : this.isValid['password'] = false
            break;
          case 'confirmPassword':
              (e.target.value.length >=6 && e.target.value == this.user['password']) ? this.isValid['confirmPass'] = true : this.isValid['confirmPass'] = false
            break;
        }
        
        if(this.isValid['username'] && this.isValid['email'] && this.isValid['password'] && this.isValid['confirmPass'])
        {
          this.isDisable = false
        }else{
          this.isDisable = true
        }
        
      },
      fileHandler(e){
        let files = e.target.files || e.dataTransfer.files
        if(!files.length) return;
        this.user['image'] = files[0]
        this.createImg(files[0])
                  

      },
      createImg(file){
        let reader = new FileReader();
        reader.onload = (e) => {
          this.avatar = e.target.result
        }
        reader.readAsDataURL(file)
      },
      register(){
        backServer.post('/register',this.user)
          .then(res => {
            if(res.data.message === 'success')
            {
              this.$router.push({path: '/Sign/In', query: {email: res.data.email}}) 
            }
            console.log('tafiditra')
          }).catch((err) => {
              this.errorMsg = err.response.data.message
              this.isValid.email = false
              setTimeout(this.clearForm,3000)
          })
      },
      clearForm(){
        this.errorMsg =''
        this.isDisable = true
        this.isValid.username=this.isValid.email=this.isValid.password=this.isValid.confirmPass=this.isValid.file = false
        this.user = {}
      },
      
    }
  }
</script>
