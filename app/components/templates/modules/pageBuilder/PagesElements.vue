<template>
        <WrapLayout>
            <WrapLayout
                v-for="element in elements"
            >
                <HtmlView
                    v-if="element.type === 'html'"
                    :html="element.content"
                    :width="element.template?element.template.width:'100%'"
                    :height="element.template?element.template.height:''"
                    :color="element.template?element.template.color:'transparent'"
                    :backgroundColor="element.template?element.template.bg_color:'transparent'"
                    :border="element.template?element.template.border:'0'"
                    :padding="element.template?element.template.padding:'0'"
                    :margin="element.template?element.template.margin:'0'"
                />
                <Image
                    v-else-if="element.type === 'image'"
                    :src="element.content"
                    :width="element.template?element.template.width:'100%'"
                    :height="elemenёt.template?element.template.height:''"
                    :color="element.template?element.template.color:'transparent'"
                    :backgroundColor="element.template?element.template.bg_color:'transparent'"
                />
                <Button
                    v-else-if="element.type === 'button'"
                    :text="element.content"
                    :width="element.template?element.template.width:'100%'"
                    :height="element.template?element.template.height:''"
                    :color="element.template?element.template.color:'transparent'"
                    :backgroundColor="element.template?element.template.bg_color:'transparent'"
                />
                <WebView
                    v-else-if="element.type === 'video'"
                    :src="'https://www.youtube.com/embed/'+element.content"
                    :width="element.template?element.template.width:'100%'"
                    :height="element.template?element.template.height:''"
                    :color="element.template?element.template.color:'transparent'"
                    :backgroundColor="element.template?element.template.bg_color:'transparent'"
                />

            </WrapLayout>
        </WrapLayout>
</template>

<script>

  export default {

    data() {
      return {
        elements: {}
      }
    },

    computed: {

    },

    mounted() {
      this.elements = [
        {
          "id": 30,
          "block_id": 82,
          "template_id": 22,
          "content": "батырма",
          "created_at": "2020-10-27 14:51:35",
          "updated_at": "2020-10-27 16:16:03",
          "type": "button",
          "template": {
            "id": 22,
            "app_id": 2,
            "name": "kkl1",
            "margin": "0px",
            "padding": "10px",
            "created_at": "2020-10-08 16:05:52",
            "updated_at": "2020-10-29 14:07:44",
            "border": "1px dashed red",
            "height": "70",
            "width": "50%",
            "color": "#c11a1a",
            "bg_color": "lightgreen",
            "style": "\n            margin: 0px; \n            padding: 10px; \n            border: 1px dashed red;  \n            width: 50%;  \n            height: 50px;\n            color: #c11a1a;\n            background-color: #162ee9;\n            "
          }
        },
        {
          "id": 29,
          "block_id": 82,
          "template_id": 22,
          "content": "<ul><li>fadw</li><li>fawfaw</li><li>yxkcul</li><li>yulfyu</li><li>yxkcul</li><li>yulfyu</li></ul>",
          "created_at": "2020-10-26 13:43:19",
          "updated_at": "2020-10-26 14:00:11",
          "type": "html",
          "template": {
            "id": 22,
            "app_id": 2,
            "name": "kkl1",
            "margin": "0px",
            "padding": "10px",
            "created_at": "2020-10-08 16:05:52",
            "updated_at": "2020-10-29 14:07:44",
            "border": "1px dashed red",
            "height": "200",
            "width": "50%",
            "color": "#c11a1a",
            "bg_color": "lightblue",
            "style": "\n            margin: 0px; \n            padding: 10px; \n            border: 1px dashed red;  \n            width: 50%;  \n            height: 50px;\n            color: #c11a1a;\n            background-color: #162ee9;\n            "
          }
        },
        {
          "id": 35,
          "block_id": 82,
          "template_id": 22,
          "content": "EjWqTangPiM",
          "created_at": "2020-11-05 12:09:54",
          "updated_at": "2020-11-05 12:09:54",
          "type": "video",
          "template": {
            "id": 22,
            "app_id": 2,
            "name": "kkl1",
            "margin": "5",
            "padding": "10",
            "created_at": "2020-10-08 16:05:52",
            "updated_at": "2020-10-29 14:07:44",
            "border": "1px dashed red",
            "height": "170",
            "width": "100%",
            "color": "#c11a1a",
            "bg_color": "coral",
            "style": "\n            margin: 0px; \n            padding: 10px; \n            border: 1px dashed red;  \n            width: 50%;  \n            height: 50px;\n            color: #c11a1a;\n            background-color: #162ee9;\n            "
          }
        }
      ]
    },

    methods: {

    }

  }

</script>

