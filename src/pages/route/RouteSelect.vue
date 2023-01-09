<template>
  <q-page id="routeSelect" :style-fn="myTweak">
    <q-toolbar class="bg-grey-9 text-white">
      <q-btn flat round dense icon="assignment_ind" />
      <q-toolbar-title>
        Route
      </q-toolbar-title>
      <q-btn flat round dense icon="favorite" />
    </q-toolbar>
    <q-scroll-area class="q-pa-md  formStyle">
      <div class="text-h6 q-pb-md">
        Where would you like to go?
      </div>
      <q-input outlined stack-label label="From">
        <template v-slot:append>
          <q-icon name="close" />
        </template>
      </q-input>

      <q-input outlined stack-label label="To" class="q-pt-md">
        <template v-slot:append>
          <q-icon name="close" />
        </template>
      </q-input>

      <div class="q-pt-md">
        <q-btn size="lg" color="black" class="full-width" label="search" @click="onClick" />
      </div>
    </q-scroll-area>
  </q-page>
</template>

<script setup>
</script>

<style lang="scss" >
#routeSelect {
  .formStyle {
    margin: 0 auto;
    height: calc(100vh - 180px);
    max-width: 500px;
  }
}
</style>
