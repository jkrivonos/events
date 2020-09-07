<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
      </v-col>

      <v-col class="mb-4">
        <v-data-table
          :headers="headers"
          :items="events"
          :single-expand="singleExpand"
          :expanded.sync="expanded"
          @click:row="selectEvent($event)"
          item-key="name"
          show-expand
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Текущие мероприятия</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
          </template>
          <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length">{{ item.description }}</td>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Events',
    data: () => ({
      expanded: [],
      singleExpand: true,
      headers: [
        {
          text: 'Название',
          align: 'start',
          sortable: false,
          value: 'shortName',
        },
        { text: 'Организатор', value: 'creatorName' },
        { text: 'Время начала мероприятия', value: 'eventStartTime' },
        { text: 'Площадка', value: 'site' },
      ],
    }),
    computed: {
      ...mapGetters('events', { events: 'all' }),
    },
    methods: {
      selectEvent(event) {
        this.$router.push({ name: 'SelectedEvent', params: { id: event.id }})
      }
    }
  }
</script>
