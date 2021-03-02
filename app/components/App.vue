<template lang="html">
  <RadSideDrawer ref="drawer" drawerLocation="Left" gesturesEnabled="true" :drawerTransition="transition">
    <StackLayout ~drawerContent backgroundColor="#ffffff">
      <slot name="drawerContent"/>
    </StackLayout>
    <Frame ~mainContent ref="drawerMainContent">
      <slot name="mainContent"/>
    </Frame>
  </RadSideDrawer>
</template>

<script>
import {SlideInOnTopTransition} from 'nativescript-ui-sidedrawer';
import { mapActions, mapGetters } from 'vuex'

const plugin = require('@nativescript/core/platform')


export default {
  data() {
    return {
      transition: new SlideInOnTopTransition(),
    }
  },

  computed: {
    ...mapGetters({
      'getUuid': 'User/getUuid'
    })
  },

  created() {

    this.$app.api.setDevice(plugin.Device.uuid)

    if (!this.getUuid) {
      this.init()
    }
  },

  methods: {

    ...mapActions({
      'init': 'User/init'
    })

  }

}
</script>

