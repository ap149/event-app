<template>
  <div class="card-container elevation-2" >
    {{buttonTitle}}
  </div>
</template>

<script>
export default {
  props: ['button-icon', 'buttonTitle', 'button-color', 'button-text'],
  // data () {
  //   return {
  //   }
  // }
  methods: {
    test(){
      // this.$router.push({ name: 'create-date-poll' })
    }
  }
}
</script>

<style lang="scss" scoped>
.card-container{
  margin: 16px auto;
  padding: 12px;

  &:hover{
    cursor: pointer;
    background: #eee;
  }
  width: 300px;
}
</style>