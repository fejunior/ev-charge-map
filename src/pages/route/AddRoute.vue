<template>
  <q-page id="addRoute" :style-fn="myTweak">
    <q-toolbar class="bg-grey-9 text-white">
      <q-btn flat round dense icon="assignment_ind" />
      <q-toolbar-title>
        Add Route
      </q-toolbar-title>

      <q-btn to="/route/saved-routes" flat round dense icon="favorites" color="red" />
    </q-toolbar>
    <div visible class="q-pa-md  formStyle">

      <div class="text-h6 q-pb-md">
        Save your favorite routes!
      </div>
      <span class="text-body1 q-pd-md">Pick a name for this route</span>
      <q-input outlined stack-label label="Name">
        <template v-slot:append>
          <q-icon name="close" />
        </template>
      </q-input>

      <div class="text-body1 q-pt-md">Save your favorite routes! </div>
      <q-input outlined stack-label label="From" class="">
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
        <q-btn size="lg" color="black" class="full-width" label="Save Route" @click="onClick" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
</script>

<style lang="scss" >
#addRoute {
  .form-style {
    margin: 0 auto;
    height: calc(100vh-180px);
    max-width: 500px;
  }
}
</style>
