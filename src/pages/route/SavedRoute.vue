<template>
  <q-page id="savedRoutes" padding>
    <q-toolbar class="bg-grey-9 text-white">
      <q-btn flat round dense icon="assignment_ind" />
      <q-toolbar-title> Saved Route </q-toolbar-title>
      <q-btn flat round dense icon="add" size="20px" />
    </q-toolbar>

    <div class="section-title">
      <div class="text-h6 q-mx-sm">Select one of your save routes!</div>
    </div>

    <div class="text-center q-pt-lg">
      <q-btn icon="add_circle_outline" flat round dense size="33px" />
      <div class="text-h6">Add some routes!</div>
      <div class="q-pa-md info">This is where you can add your most favorite or commom journeys!</div>
    </div>

    <q-scroll-area class="q-pa-md list">

      <q-list bordered>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar color="black" text-color="white" icon="directions" />
          </q-item-section>

          <q-item-section>
            <q-item-label> A cool new road! </q-item-label>
            <q-item-label class="q-px-sm" caption lines="2"><b>From</b>: This is the from section </q-item-label>
            <q-item-label class="q-px-sm" caption lines="3"><b>To</b>: This is the to section </q-item-label>
            <q-item-label class="q-px-sm" caption lines="4"><b>Search Radius</b>: 3 </q-item-label>
          </q-item-section>

          <q-item-section side bottom>
            <q-btn class="q-ma-sm" color="black" icon="map" label="Go to map" size="sm" />
            <q-btn class="q-mx-sm" color="black" icon="delete" label="delete" size="sm" />
          </q-item-section>

        </q-item>
      </q-list>

    </q-scroll-area>
  </q-page>
</template>

<script setup>
</script>

<style lang="scss" >
#savedRoutes {
  .section-title {
    padding: 12px 10px 8px 10px;
    max-width: 500px;
    margin: 0 auto;
  }

  .info {
    font-size: 16px;
  }

  .list {
    margin: 0 auto;
    height: calc(100vh - 250px);
    max-width: 500px;
  }
}
</style>
