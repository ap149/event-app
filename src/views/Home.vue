<template>
  <v-container class="home-container" column align-center justify-start>
    <v-btn
      color="primary"
      dark
      @click="dialogOuter = true"
    >
      Create poll
    </v-btn>

    <v-dialog
      ref="dialog-outer"
      v-model="dialogOuter"
      max-width="600"
      :fullscreen="$vuetify.breakpoint.xsOnly"
    >
      <dialog-create-poll @closeDialog="dialogOuter = false" />
    </v-dialog>     
  </v-container>
</template>

<script>
import DialogCreatePoll from './CreateDatePoll'

export default {
  components: {
    DialogCreatePoll
  },
  data(){
    return {
      dialogOuter: false,
    }
  },
  methods: {
    test(){
      console.log("clicked");
    }
  }
}
</script>

<style scoped>
.home-container {
  margin: 0 auto;
  /* background: lightgray; */
}
</style>