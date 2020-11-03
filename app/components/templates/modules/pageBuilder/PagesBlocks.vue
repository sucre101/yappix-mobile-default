<template>
  <Page class="single-post-page">

    <StackLayout orientation="vertical" class="content">

      <GridLayout
          columns="auto,*"
          orientation="horizontal"
          ios:padding="0"
          ios:style="height: 60"
          android:style="height: 80"
          width="100%"
          backgroundColor="#0989cc"
      >

        <Image
            src="~/images/b-arrow.png"
            horizontalAlignment="left"
            verticalAlignment="center"
            col="0"
            @tap="closeCurrentPost"
            width="15"
            marginLeft="20"
            android:marginTop="20"
        />

        <Label
            :text="currentPostTitle"
            fontSize="20"
            horizontalAlignment="center"
            verticalAlignment="center"
            marginRight="15"
            android:marginTop="20"
            col="1"
            color="white"
        />

      </GridLayout>

      <ScrollView orientation="horizontal">
        <ListView for="block in blocks" backgroundColor="transparent" separatorColor="transparent">

          <v-template>
            <StackLayout orientation="horizontal">
              <PagesElements />
            </StackLayout>
          </v-template>

        </ListView>
      </ScrollView>
    </StackLayout>


  </Page>
</template>

<script>

  import PagesElements from "~/components/templates/modules/pageBuilder/PagesElements";
  export default {

    components: {
      PagesElements
    },

    data() {
      return {
        page: {},
        blocks: {}
      }
    },

    computed: {

      currentPostTitle() {
        return this.page ? this.page.title : 'Page'
      }

    },

    mounted() {
      this.$root.$on('page::open', (data) => {
        this.page = {
          "id": 4,
          "app_id": 2,
          "template_id": null,
          "title": "next",
          "thumb": null,
          "short_content": null,
          "is_active": true,
          "created_at": "2020-09-15 08:55:33",
          "updated_at": "2020-09-15 08:55:33"
        };
        this.blocks = [
          {
            "id": 93,
            "page_id": 4,
            "template_id": 8,
            "order": 1,
            "is_active": true,
            "created_at": "2020-10-30 15:50:25",
            "updated_at": "2020-10-30 15:50:25",
            "s_order": 1,
            "layout": "3",
            "template": {
              "id": 8,
              "app_id": 2,
              "name": "1224e",
              "margin": "1",
              "padding": "1",
              "created_at": "2020-09-29 15:48:10",
              "updated_at": "2020-10-22 16:36:08",
              "border": "auto",
              "height": "auto",
              "width": "auto",
              "color": "black",
              "bg_color": "white",
              "style": "\n            margin: 1; \n            padding: 1; \n            border: auto;  \n            width: auto;  \n            height: auto;\n            height: auto;\n            color: black;\n            background-color: white;\n            "
            },
            "elements": []
          },
          {
            "id": 95,
            "page_id": 4,
            "template_id": 8,
            "order": 1,
            "is_active": true,
            "created_at": "2020-10-30 15:50:25",
            "updated_at": "2020-10-30 15:53:55",
            "s_order": 2,
            "layout": "3",
            "template": {
              "id": 8,
              "app_id": 2,
              "name": "1224e",
              "margin": "1",
              "padding": "1",
              "created_at": "2020-09-29 15:48:10",
              "updated_at": "2020-10-22 16:36:08",
              "border": "auto",
              "height": "auto",
              "width": "auto",
              "color": "black",
              "bg_color": "white",
              "style": "\n            margin: 1; \n            padding: 1; \n            border: auto;  \n            width: auto;  \n            height: auto;\n            height: auto;\n            color: black;\n            background-color: white;\n            "
            },
            "elements": []
          },
          {
            "id": 94,
            "page_id": 4,
            "template_id": 8,
            "order": 1,
            "is_active": true,
            "created_at": "2020-10-30 15:50:25",
            "updated_at": "2020-10-30 15:53:55",
            "s_order": 3,
            "layout": "3",
            "template": {
              "id": 8,
              "app_id": 2,
              "name": "1224e",
              "margin": "1",
              "padding": "1",
              "created_at": "2020-09-29 15:48:10",
              "updated_at": "2020-10-22 16:36:08",
              "border": "auto",
              "height": "auto",
              "width": "auto",
              "color": "black",
              "bg_color": "white",
              "style": "\n            margin: 1; \n            padding: 1; \n            border: auto;  \n            width: auto;  \n            height: auto;\n            height: auto;\n            color: black;\n            background-color: white;\n            "
            },
            "elements": []
          },
          {
            "id": 96,
            "page_id": 4,
            "template_id": 21,
            "order": 2,
            "is_active": true,
            "created_at": "2020-10-30 16:04:31",
            "updated_at": "2020-10-30 16:04:31",
            "s_order": 1,
            "layout": "1",
            "template": {
              "id": 21,
              "app_id": 2,
              "name": "kkl",
              "margin": "0px",
              "padding": "0px",
              "created_at": "2020-10-08 16:04:42",
              "updated_at": "2020-10-08 16:04:42",
              "border": "3px dashed red",
              "height": "150px",
              "width": "100%",
              "color": "black",
              "bg_color": "white",
              "style": "\n            margin: 0px; \n            padding: 0px; \n            border: 3px dashed red;  \n            width: 100%;  \n            height: 150px;\n            height: 150px;\n            color: black;\n            background-color: white;\n            "
            },
            "elements": []
          },
          {
            "id": 97,
            "page_id": 4,
            "template_id": 6,
            "order": 3,
            "is_active": true,
            "created_at": "2020-10-30 16:04:43",
            "updated_at": "2020-10-30 16:04:43",
            "s_order": 1,
            "layout": "4",
            "template": {
              "id": 6,
              "app_id": 2,
              "name": "newer",
              "margin": "auto",
              "padding": "0px",
              "created_at": "2020-09-29 15:47:32",
              "updated_at": "2020-09-29 15:47:32",
              "border": "1px solid lightgreen",
              "height": "auto",
              "width": "10%",
              "color": "black",
              "bg_color": "white",
              "style": "\n            margin: auto; \n            padding: 0px; \n            border: 1px solid lightgreen;  \n            width: 10%;  \n            height: auto;\n            height: auto;\n            color: black;\n            background-color: white;\n            "
            },
            "elements": []
          },
          {
            "id": 98,
            "page_id": 4,
            "template_id": 6,
            "order": 3,
            "is_active": true,
            "created_at": "2020-10-30 16:04:43",
            "updated_at": "2020-10-30 16:04:43",
            "s_order": 2,
            "layout": "4",
            "template": {
              "id": 6,
              "app_id": 2,
              "name": "newer",
              "margin": "auto",
              "padding": "0px",
              "created_at": "2020-09-29 15:47:32",
              "updated_at": "2020-09-29 15:47:32",
              "border": "1px solid lightgreen",
              "height": "auto",
              "width": "10%",
              "color": "black",
              "bg_color": "white",
              "style": "\n            margin: auto; \n            padding: 0px; \n            border: 1px solid lightgreen;  \n            width: 10%;  \n            height: auto;\n            height: auto;\n            color: black;\n            background-color: white;\n            "
            },
            "elements": []
          },
          {
            "id": 99,
            "page_id": 4,
            "template_id": 6,
            "order": 3,
            "is_active": true,
            "created_at": "2020-10-30 16:04:43",
            "updated_at": "2020-10-30 16:04:43",
            "s_order": 3,
            "layout": "4",
            "template": {
              "id": 6,
              "app_id": 2,
              "name": "newer",
              "margin": "auto",
              "padding": "0px",
              "created_at": "2020-09-29 15:47:32",
              "updated_at": "2020-09-29 15:47:32",
              "border": "1px solid lightgreen",
              "height": "auto",
              "width": "10%",
              "color": "black",
              "bg_color": "white",
              "style": "\n            margin: auto; \n            padding: 0px; \n            border: 1px solid lightgreen;  \n            width: 10%;  \n            height: auto;\n            height: auto;\n            color: black;\n            background-color: white;\n            "
            },
            "elements": []
          },
          {
            "id": 100,
            "page_id": 4,
            "template_id": 6,
            "order": 3,
            "is_active": true,
            "created_at": "2020-10-30 16:04:43",
            "updated_at": "2020-10-30 16:04:43",
            "s_order": 4,
            "layout": "4",
            "template": {
              "id": 6,
              "app_id": 2,
              "name": "newer",
              "margin": "auto",
              "padding": "0px",
              "created_at": "2020-09-29 15:47:32",
              "updated_at": "2020-09-29 15:47:32",
              "border": "1px solid lightgreen",
              "height": "auto",
              "width": "10%",
              "color": "black",
              "bg_color": "white",
              "style": "\n            margin: auto; \n            padding: 0px; \n            border: 1px solid lightgreen;  \n            width: 10%;  \n            height: auto;\n            height: auto;\n            color: black;\n            background-color: white;\n            "
            },
            "elements": [
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
                "content": "<p>Hi</p>",
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
          }
        ]
      });
    },

    methods: {
      closeCurrentPost() {
        this.$root.$off('page::open', this.clearPage);
        this.$modal.close();
      },

      clearPage() {
        this.page = {};
      }

    }

  }

</script>

