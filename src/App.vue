<template>
  <v-app>
    <v-toolbar v-if="$store.state.showNavbar" app>
      <navbar />
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data () {
    return {

    }
  }
}
</script>
