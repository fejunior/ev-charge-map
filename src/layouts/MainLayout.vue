<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-grey-10">
      <q-toolbar>

        <q-toolbar-title>
          Milk+
        </q-toolbar-title>
        <q-btn flat dense round icon="login" />

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal elevated bordered>
      <q-tabs class="text-light bg-grey-10">
        <q-route-tab name="/map" icon="explore" label="Map" />
        <q-route-tab to="/route" icon="directions" label="Routes" />
        <q-route-tab to="/auth" icon="login" label="Auth" />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script setup>

</script>
