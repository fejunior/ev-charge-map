<template>
  <q-page id="registrationPage" padding>
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
        <q-input outlined stack-label type="name" label="First Name">
          <template v-slot:append>
            <q-icon name="close" />
          </template>
        </q-input>

        <q-input outlined stack-label type="text" label="Last Name">
          <template v-slot:append>
            <q-icon name="close" />
          </template>
        </q-input>
        <q-input outlined stack-label type="email" label="Email">
          <template v-slot:append>
            <q-icon name="close" />
          </template>
        </q-input>
        <q-input outlined stack-label type="password" label="Password">
          <template v-slot:append>
            <q-icon name="close" />
          </template>
        </q-input>
        <q-input outlined stack-label type="password" label="Confirm Password">
          <template v-slot:append>
            <q-icon name="close" />
          </template>
        </q-input>

        <div>
          <q-btn icon="check" color="black" class="full-width" label="Register" size="lg" />
        </div>
      </div>
    </q-scroll-area>
  </q-page>
</template>

<script setup>
</script>

<style lang="scss" >
#registrationPage {
  .formStyle {
    margin: 0 auto;
    height: calc(100vh - 180px);
    max-width: 500px;
  }
}
</style>
