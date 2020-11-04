<template>
        <WrapLayout>
            <HtmlView
                :html="element.content"
                width="100%"
                :backgroundColor="element.template?element.template.bg_color:'transparent'"
                v-for="element in elements"
            />
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
          "id": 31,
          "block_id": 100,
          "template_id": null,
          "content": "<p>Hi</p>",
          "created_at": "2020-10-30 16:05:02",
          "updated_at": "2020-10-30 16:05:02",
          "type": "html",
          "template": null
        },
        {
          "id": 32,
          "block_id": 100,
          "template_id": null,
          "content": "<p>Hi</p>",
          "created_at": "2020-10-30 16:05:04",
          "updated_at": "2020-10-30 16:05:04",
          "type": "html",
          "template": null
        },
        {
          "id": 33,
          "block_id": 100,
          "template_id": null,
          "content": "<ul><li>fadw</li><li>fawfaw</li><li>yxkcul</li><li>yulfyu</li></ul>",
          "created_at": "2020-10-30 16:05:05",
          "updated_at": "2020-10-30 16:05:05",
          "type": "html",
          "template": null
        },
        {
          "id": 34,
          "block_id": 100,
          "template_id": 22,
          "content": "<p>Hi</p>",
          "created_at": "2020-10-30 16:05:10",
          "updated_at": "2020-10-30 16:05:10",
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
            "height": "50px",
            "width": "50%",
            "color": "#c11a1a",
            "bg_color": "#162ee9",
            "style": "\n            margin: 0px; \n            padding: 10px; \n            border: 1px dashed red;  \n            width: 50%;  \n            height: 50px;\n            height: 50px;\n            color: #c11a1a;\n            background-color: #162ee9;\n            "
          }
        }
      ]
    },

    methods: {

    }

  }

</script>

