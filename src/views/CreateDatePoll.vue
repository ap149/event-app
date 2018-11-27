<template>
  <v-stepper v-model="stepIndex" non-linear>
    <v-stepper-header >
      <v-stepper-step :complete="stepIndex > 10" step="1" editable>Name of step 1</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="stepIndex > 2" step="2" editable>Name of step 2</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3" editable>Name of step 3</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mb-5"
          height="200px"
          flat
        >
          <v-text-field
            label="Regular"
            placeholder="Placeholder"
          ></v-text-field>      
        </v-card>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-5"
          height="200px"
          flat
        >        
          <v-dialog
            ref="dialog"
            v-model="modal"
            :return-value.sync="date"
            persistent
            lazy
            full-width
            width="290px"
          >
            <v-text-field
              slot="activator"
              v-model="date"
              label="Picker in dialog"
              prepend-icon="event"
              readonly
            ></v-text-field>
            <v-date-picker v-model="date" scrollable light="false">
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
              <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
            </v-date-picker>
          </v-dialog>        
        </v-card>
      </v-stepper-content>

      <v-stepper-content step="3">
        <div class="test">test</div>
      </v-stepper-content>
    </v-stepper-items>

    <v-toolbar class="custom-toolbar-footer">
        <v-btn color="error" flat @click="closeDialog">Cancel</v-btn>
      <v-spacer></v-spacer>
        <v-btn color="primary" flat @click="stepIndex--">Back</v-btn>
        <v-btn color="primary" @click="stepIndex++">Continue</v-btn>
    </v-toolbar>    

  </v-stepper>
</template>

<script>
export default {
  data () {
    return {
      stepIndex: 0,
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false         
    }
  },
  methods: {
    closeDialog() {
      console.log("close dialog")
      this.$emit('closeDialog')
    }
  } 
}
</script>

<style>
.custom-toolbar-footer {
  position: absolute !important;
  bottom: 0 !important;
  /* padding: 12px !important; */
}
.v-stepper {
  height: 100%;
  padding-bottom: 56px;
  /* position: relative; */
}
</style>