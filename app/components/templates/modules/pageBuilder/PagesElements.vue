<template>
    <WrapLayout
        height="100%"
        width="100%"
    >
        <WrapLayout
            v-for="element in elements"
            :key="element.id"
            :height="element.template?element.template.height:'auto'"
            :width="element.template?element.template.width:'100%'"
        >
            <HtmlView
                v-if="element.type === 'html'"
                :html="element.content"
                height="100%"
                width="100%"
                :color="element.template?element.template.color:'transparent'"
                :backgroundColor="element.template?element.template.bg_color:'transparent'"
                :borderWidth="element.template?element.template.border_width:'0'"
                :borderStyle="element.template?element.template.border_type:'none'"
                :borderColor="element.template?element.template.border_color:'black'"
                :borderRadius="element.template?element.template.border_radius:'0'"
                :textAlign="element.template?element.template.text_align:'left'"
                :overflow="element.template?element.template.overflow:'auto'"
                :padding="element.template?element.template.padding:'0'"
                :margin="element.template?element.template.margin:'0'"
            />
            <Image
                v-else-if="element.type === 'image'"
                :src="element.images.length > 0?ngrok+element.images[0].url_original:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png'"
                height="100%"
                width="100%"
                :color="element.template?element.template.color:'transparent'"
                :backgroundColor="element.template?element.template.bg_color:'transparent'"
                :borderWidth="element.template?element.template.border_width:'0'"
                :borderStyle="element.template?element.template.border_type:'none'"
                :borderColor="element.template?element.template.border_color:'black'"
                :borderRadius="element.template?element.template.border_radius:'0'"
                :textAlign="element.template?element.template.text_align:'left'"
                :overflow="element.template?element.template.overflow:'auto'"
                :padding="element.template?element.template.padding:'0'"
                :margin="element.template?element.template.margin:'0'"
            />
            <Button
                v-else-if="element.type === 'button'"
                :text="JSON.parse(element.content).button_title"
                height="100%"
                width="100%"
                :color="element.template?element.template.color:'transparent'"
                :backgroundColor="element.template?element.template.bg_color:'transparent'"
                :borderWidth="element.template?element.template.border_width:'0'"
                :borderStyle="element.template?element.template.border_type:'none'"
                :borderColor="element.template?element.template.border_color:'black'"
                :borderRadius="element.template?element.template.border_radius:'0'"
                :textAlign="element.template?element.template.text_align:'left'"
                :overflow="element.template?element.template.overflow:'auto'"
                :padding="element.template?element.template.padding:'0'"
                :margin="element.template?element.template.margin:'0'"
            />
            <WebView
                v-else-if="element.type === 'video'"
                :src="'https://www.youtube.com/embed/'+element.content"
                height="100%"
                width="100%"
                :color="element.template?element.template.color:'transparent'"
                :backgroundColor="element.template?element.template.bg_color:'transparent'"
                :borderWidth="element.template?element.template.border_width:'0'"
                :borderStyle="element.template?element.template.border_type:'none'"
                :borderColor="element.template?element.template.border_color:'black'"
                :borderRadius="element.template?element.template.border_radius:'0'"
                :textAlign="element.template?element.template.text_align:'left'"
                :overflow="element.template?element.template.overflow:'auto'"
                :padding="element.template?element.template.padding:'0'"
                :margin="element.template?element.template.margin:'0'"
            />
            <WebView
                v-else-if="element.type === 'iframe'"
                :src="element.content"
                height="100%"
                width="100%"
                :color="element.template?element.template.color:'transparent'"
                :backgroundColor="element.template?element.template.bg_color:'transparent'"
                :borderWidth="element.template?element.template.border_width:'0'"
                :borderStyle="element.template?element.template.border_type:'none'"
                :borderColor="element.template?element.template.border_color:'black'"
                :borderRadius="element.template?element.template.border_radius:'0'"
                :textAlign="element.template?element.template.text_align:'left'"
                :overflow="element.template?element.template.overflow:'auto'"
                :padding="element.template?element.template.padding:'0'"
                :margin="element.template?element.template.margin:'0'"
            />
            <Carousel
                v-else-if="element.type === 'slider'"
                height="100%"
                width="100%"
                :color="element.template?element.template.color:'transparent'"
                :backgroundColor="element.template?element.template.bg_color:'transparent'"
                :borderWidth="element.template?element.template.border_width:'0'"
                :borderStyle="element.template?element.template.border_type:'none'"
                :borderColor="element.template?element.template.border_color:'black'"
                :borderRadius="element.template?element.template.border_radius:'0'"
                :textAlign="element.template?element.template.text_align:'left'"
                :overflow="element.template?element.template.overflow:'auto'"
                :padding="element.template?element.template.padding:'0'"
                :margin="element.template?element.template.margin:'0'"
                pageChanged="myChangeEvent" pageTapped="mySelectedEvent"
                indicatorColor="#fff000" finite="true" bounce="false" showIndicator="true" verticalAlignment="top"
                android:indicatorAnimation="swap" color="white">
                <CarouselItem v-for="item in element.images" :key="item.id" :backgroundColor="item.color"
                              height="100%"
                              width="100%"
                              verticalAlignment="middle" >
                    <GridLayout
                        columns="auto,*"
                        orientation="horizontal"
                        height="100%"
                        width="100%">
                        <Image
                            height="100%"
                            width="100%"
                            :src="ngrok+item.url_original" stretch="aspectFill" />
                    </GridLayout>
                </CarouselItem>
            </Carousel>
                <StackLayout
                    v-if="element.type === 'map'"
                    height="100%"
                    width="100%"
                    :color="element.template?element.template.color:'transparent'"
                    :backgroundColor="element.template?element.template.bg_color:'transparent'"
                    :borderWidth="'1'"
                    :borderStyle="'solid'"
                    :borderColor="'green'"
                    :borderRadius="element.template?element.template.border_radius:'0'"
                    :textAlign="element.template?element.template.text_align:'left'"
                    :overflow="element.template?element.template.overflow:'auto'"
                    :padding="element.template?element.template.padding:'0'"
                    :margin="element.template?element.template.margin:'0'" >
                        <ElementMap
                            :latitude="JSON.parse(element.content).lat"
                            :longitude="JSON.parse(element.content).lng"
                        ></ElementMap>
                </StackLayout>
        </WrapLayout >
    </WrapLayout >
</template>

<script>
  import ElementMap from "./ElementMap";

  export default {
    components: {ElementMap},
    data() {
      return {
        ngrok: 'http://fef811e0d43c.ngrok.io/'
      }
    },
    props:{
      elements: Array
    },
    computed: {

    },

    mounted() {

    },

    methods: {

    }

  }

</script>

