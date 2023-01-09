<template>
  <q-page id="myDetails">
    <q-toolbar class="bg-grey-9 text-white">
      <q-toolbar-title>My Details</q-toolbar-title>
    </q-toolbar>

    <q-scroll-area class="formStyle">

      <div class="q-pa-md q-gutter-md">
        <div class="text-h6 ">Update your details!</div>

        <q-input outlined stack-label label="First Name">
          <template v-slot:append>
            <q-icon name="close" />
          </template>
        </q-input>

        <q-input outlined stack-label label="Last Name">
          <template v-slot:append>
            <q-icon name="close" />
          </template>
        </q-input>

        <div class="text-yellow-10 text-bold q-mt-md"> NOTE: This email is read only</div>
        <q-input outlined stack-label readonly label="Email" />

        <div>
          <q-btn color="black" class="full-width" label="Update Details" size="lg" />
        </div>

      </div>
    </q-scroll-area>
  </q-page>
</template>

<script setup>
</script>

<style lang="scss" >
#myDetails {
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
