<template>
  <q-page id="accountMenu">
    <q-toolbar class="bg-grey-9 text-white">
      <q-toolbar-title>Account </q-toolbar-title>
    </q-toolbar>

    <div class="text-6 text-center q-pa-xl">
      <q-avatar size="60px" color="black" text-color="white">
        JD
      </q-avatar>
      <div>Junonn Fernando</div>
    </div>

    <div class="menu">
      <q-separator inset />
      <q-list>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar rounded color="teal" text-color="white" icon="account_box" />
          </q-item-section>
          <q-item-section class="text-size">My details</q-item-section>
          <q-item-section side>
            <q-icon name="arrow_right" size="35px" />
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar rounded color="red-10" text-color="white" icon="logout" />
          </q-item-section>
          <q-item-section class="text-size">Logout</q-item-section>
          <q-item-section side>
            <q-icon name="arrow_right" size="35px" />
          </q-item-section>
        </q-item>

      </q-list>
    </div>

  </q-page>
</template>

<script setup>
</script>

<style lang="scss" >
#accountMenu {
  .menu {
    margin: 0 auto;
    max-width: 500px;
  }

  .text-size {
    font-size: 18px;
  }
}
</style>
