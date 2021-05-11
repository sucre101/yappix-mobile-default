<template>
    <StackLayout
        height="100%"
        width="100%"
    >
        <WrapLayout
            v-for="element in elements"
            :key="element.id"
            :height="element.template?element.template.height:'100%'"
            :width="element.template?element.template.width:'100%'"
        >
            <HtmlView
                v-if="element.type === 'html'"
                :html="element.content"
                height="100%"
                width="100%"
                :color="element.template?element.template.color:'transparent'"
                :backgroundColor="element.template?element.template.bg_color:'transparent'"
                :borderRadius="element.template?element.template.border_radius:'0'"
                :textAlign="element.template?element.template.text_align:'left'"
                :overflow="element.template?element.template.overflow:'none'"
            />
            <Image
                v-else-if="element.type === 'image'"
                :src="element.images[0]?element.images[0].image_url:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png'"
                width="100%"
                :color="element.template?element.template.color:'transparent'"
                :backgroundColor="element.template?element.template.bg_color:'transparent'"
                :borderRadius="element.template?element.template.border_radius:'0'"
                :textAlign="element.template?element.template.text_align:'left'"
                :overflow="element.template?element.template.overflow:'none'"
            />
            <Button
                v-else-if="element.type === 'button'"
                :text="JSON.parse(element.content).button_title"
                height="100%"
                width="100%"
                :color="element.template?element.template.color:'transparent'"
                :backgroundColor="element.template?element.template.bg_color:'transparent'"
                :borderRadius="element.template?element.template.border_radius:'0'"
                :textAlign="element.template?element.template.text_align:'left'"
                :overflow="element.template?element.template.overflow:'none'"
            />
<!--            <WebView id="player"-->
<!--                     v-else-if="element.type === 'video'"-->
<!--                     :src="'https://www.youtube.com/embed/' + element.content + '?enablejsapi=1&playsinline=1&autoplay=1&fs=0&controls=1'"-->
<!--                     frameborder="0"/>-->

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
            />
            <GridLayout height="350"
                        v-else-if="element.type === 'slider'">
                <Carousel ref="myCarousel"   height="100%" width="100%" color="white"  android:indicatorAnimation="slide" indicatorColor="#fff" indicatorOffset="0, -10" showIndicator="true">
                    <CarouselItem v-for="(item, i) in element.images" :key="i" verticalAlignment="middle">
                        <GridLayout>
                            <Image :src="item.image_url" stretch="aspectFill" />
                        </GridLayout>
                    </CarouselItem>
                </Carousel>
            </GridLayout>
            <ElementMap
                v-if="element.type === 'map'"
                :latitude="JSON.parse(element.content).lat"
                :longitude="JSON.parse(element.content).lng"
                :address="JSON.parse(element.content).address"
                :template="element.template"
            ></ElementMap>
        </WrapLayout >
    </StackLayout >
</template>

<script>
  import ElementMap from "./ElementMap";
  import ElementView from "./ElementView";

  export default {
    components: {ElementMap, ElementView},
    data() {
      return {

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

