<template>
        <Mapbox
            accessToken="pk.eyJ1IjoibWFuc3Vya2FsZW4iLCJhIjoiY2tpcWQ0Y2dwMGNmcjMwbnkzOGh2b3R0MyJ9.aK6BjtpQlxYWjjLJ97mN5g"
            mapStyle="traffic_day"
            :latitude="latitude"
            :longitude="longitude"
            zoomLevel="10"
            height="100%"
            width="100%"
            @mapReady="onMapReady">
        </Mapbox>
</template>

<script>
  export default {
    name: 'ElementMap',
    data() {
      return {
      }
    },
    props:{
      template: Object,
      latitude: Number,
      longitude: Number,
      address: String
    },
    computed: {

    },

    mounted() {
    },

    methods: {
            onMapReady(args) {
                    args.map.addMarkers([
                            {
                                    lat: this.latitude,
                                    lng: this.longitude,
                                    title: this.address,
                                    subtitle: this.address,
                            }]
                    );
            }
    }

  }

</script>

