<template>
        <MapView
            :latitude="latitude"
            :longitude="longitude"
            iosOverflowSafeArea="true" :zoom="18" :bearing="0" :tilt="0"
            @mapReady="onMapReady"
        ></MapView>
</template>

<script>

  const mapsModule = require("nativescript-google-maps-sdk")

  export default {

    data() {
      return {
      }
    },
    props:{
      latitude: String,
      longitude: String
    },
    computed: {

    },

    mounted() {
            console.log(this.latitude)
    },

    methods: {
      onMapReady(args) {
        let map = args.object

        let marker = new mapsModule.Marker();
        marker.position = mapsModule.Position.positionFromLatLng(
            map.latitude,
            map.longitude
        );
        marker.title = 'Hi';

        map.addMarker(marker);
      }
    }

  }

</script>

