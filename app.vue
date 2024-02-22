<template>
  <v-app>
    <v-main>
      <!-- <NuxtLayout name="root-frame"> -->
      <NuxtLayout :name="$route.path.toLocaleLowerCase() == '/login' || $route.path.toLocaleLowerCase() == '/404' ? '' : 'root-frame'"> 
        <template #default>
          <NuxtPage/>
        </template>
      </NuxtLayout>
    </v-main>
  </v-app>
</template>

<script>
  // import RootFrame from '/layouts/RootFrame.vue'

  export default {
    name: 'App',

    // components: {
    // // HelloWorld,
    //   RootFrame
    // },

    data: () => ({
      //
    }),
  }
</script>