<template>

  <Button :text="$props.options.text" :class="$props.options.class"/>

</template>

<script>
export default  {

  props: {
    options: {
      type: Object
    }
  },

  data() {
    return {

    }
  }
}
</script>
