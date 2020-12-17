<template>
        <WebView
            :src="content"
            height="100%"
            width="100%"
            :color="template?template.color:'transparent'"
            :backgroundColor="template?template.bg_color:'transparent'"
            :borderWidth="template?template.border_width:'0'"
            :borderStyle="template?template.border_type:'none'"
            :borderColor="template?template.border_color:'black'"
            :borderRadius="template?template.border_radius:'0'"
            :textAlign="template?template.text_align:'left'"
            :overflow="template?template.overflow:'auto'"
            :padding="template?template.padding:'0'"
            :margin="template?template.margin:'0'"
        />
</template>

<script>

  export default {
    name: 'ElementView',
    data() {
      return {
      }
    },
    props:{
            template: Object,
            content: String,
    },
    computed: {

    },

    mounted() {
    },

    methods: {
    }

  }

</script>

