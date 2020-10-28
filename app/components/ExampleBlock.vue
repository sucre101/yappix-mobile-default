<template>

  <StackLayout @loaded="blockLoaded" :backgroundColor="styles">
    <Label text="123123" />
  </StackLayout>

</template>

<script>
export default {

  props: ['children'],

  data() {
    return {
      styles: this.children.style
    }
  },

  methods: {
    blockLoaded(arg) {
      // console.log(this.children.style)
      // arg.object.style = 'background-color: #067dbc; border-width: 1; border-color: #000000';
    }
  }

}
</script>
