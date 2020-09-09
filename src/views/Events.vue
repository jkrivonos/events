<template>
  <v-data-table
          :headers="headers"
          :items="allEvents"
          sort-by="calories"
          class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Мероприятия</v-toolbar-title>
        <v-divider
                class="mx-4"
                inset
                vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.shortName" label="Название"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.creatorName" label="Организатор"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.shortDate" label="Начало события"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.site" label="Площадка"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Отмена</v-btn>
              <v-btn color="blue darken-1" text @click="save">Сохранить</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
              small
              class="mr-2"
              @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
</template>

<script>
  import { mapGetters } from "vuex";

  export default {
    data: () => ({
      dialog: false,
      headers: [
        {
          text: 'Название',
          align: 'start',
          sortable: false,
          value: 'shortName',
        },
        { text: 'Организатор', value: 'creatorName' },
        { text: 'Начало события', value: 'shortDate' },
        { text: 'Площадка', value: 'site' },
        { text: 'Действия', value: 'actions', sortable: false }
      ],
      allEvents: [],
      editedIndex: -1,
      editedItem: {
        shortName: '',
        creatorName: 0,
        shortDate: 0,
        site: 0
      },
      defaultItem: {
        shortName: '',
        creatorName: 0,
        shortDate: 0,
        site: 0
      },
    }),

    computed: {
      ...mapGetters('events', { events: 'all' }),

      formTitle () {
        return this.editedIndex === -1 ? 'Новое мероприятие' : 'Редактировать'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.allEvents = this.events.map(obj => Object.assign(obj, {"shortDate": obj.eventStartTime.substring(0,10)}));
      },

      editItem (item) {
        this.editedIndex = this.allEvents.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      // formatDate (date) {
      //   if (!date) return null
      //   const [year, month, day] = date.substring(0,10).split('-')
      //   return `${month}/${day}/${year}`
      // },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {

        if (this.editedIndex > -1) {
          Object.assign(this.allEvents[this.editedIndex], this.editedItem)
        } else {
          this.allEvents.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>