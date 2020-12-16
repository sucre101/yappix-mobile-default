<template>
        <MapView
            :latitude="latitude"
            :longitude="longitude"
            iosOverflowSafeArea="true" :zoom="10" :bearing="0" :tilt="0"
            @mapReady="onMapReady"
        ></MapView>
</template>

<script>
  import { Marker, Position } from "nativescript-google-maps-sdk";

  export default {
    name: 'ElementMap',
    data() {
      return {
      }
    },
    props:{
      latitude: Number,
      longitude: Number
    },
    computed: {

    },

    mounted() {
    },

    methods: {
      onMapReady(args) {
        let map = args.object

        let marker = new Marker();
        marker.position = Position.positionFromLatLng(
            map.latitude,
            map.longitude
        );
        marker.title = 'Hi';

        map.addMarker(marker);
      }
    }

  }

</script>

