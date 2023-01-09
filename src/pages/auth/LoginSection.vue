<template>
  <q-page id="loginPage">
    <q-toolbar class="bg-grey-9 text-white">
      <q-toolbar-title> Register </q-toolbar-title>
    </q-toolbar>

    <q-scroll-area class="formStyle">
      <div class="text-6 text-center q-pt-md">
        <q-img src="../../assets/logoBlack.png" fit="contain" width="80px" height="80px" />
        <div>Ev Charge Map</div>
      </div>

      <div class="q-pa-md q-gutter-md">
        <div class="text-center ">Register and get extra features!</div>

        <q-input v-model="email" outlined stack-label type="email" label="Email">
          <template v-slot:append>
            <q-icon name="close" />
          </template>
        </q-input>
        <q-input v-model="password" outlined stack-label type="password" label="Password">
          <template v-slot:append>
            <q-icon name="close" />
          </template>
        </q-input>

        <div>
          <q-btn @click="login" icon="check" color="black" class="full-width" label="Register" size="lg" />
        </div>
        <div class="q-px-md q-mt-xl text-center">
          <div class="q-mb-md no-account"> Don't have an account? </div>
          <q-btn color="black" outline rounded to="/auth/register" size="15px" label="Register Here" />
        </div>
      </div>
    </q-scroll-area>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from 'src/stores/user-store'

const email = ref(null)
const password = ref(null)
const userStore = useUserStore()

const login = async () => {
  // Get the tokens/cookie
  await userStore.getSanctumCookie()
  // Login user
  await userStore.login(email.value, password.value)
  // Get the user
  const user = await userStore.fetchUser()
  console.log(user)
  // Set user data in localstorage (PINIA)
  userStore.setUser(user.data)
}

</script>

<style lang="scss" >
#loginPage {
  .formStyle {
    margin: 0 auto;
    height: calc(100vh - 180px);
    max-width: 500px;
  }

  .no-account {
    font-size: 17px;
  }
}
</style>
