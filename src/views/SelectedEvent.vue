<template>
  <v-container class="mt-6">
    <v-card v-for="(job,i) in jobs"
            :key="i"
            class="mx-auto"
            max-width="510"
            mt-6
            outlined
    >
      <v-card-title>
        {{ job.shortDescription }}
      </v-card-title>
      <v-list-item three-line>
        <v-list-item-content>
          {{ job.assigneeName }}
        </v-list-item-content>
        <v-list-item-content>
          {{ dateTime(job.jobAssignmentTime) }}
        </v-list-item-content>
        <v-list-item-content>
          {{job.id}}
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-container>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex';
  import {getOne} from '@/api/events'
  import moment from 'moment'

  export default {
    data: () => ({
      jobs: []
    }),
    created() {
      getOne(this.$route.params.id)
        .then(response => this.jobs = response.jobs)
        .catch(error => console.warn(`Не удалось получить данные по мероприятию с id ${this.$route.params.id}, ${error}`));
    },
    computed: {
      ...mapGetters('events', ['selected']),

    },
    methods: {
      ...mapActions('events', ['getInfo']),
      dateTime(dateTime) {
        return moment(dateTime, 'YYYY-MM-DD').format('DD.MM.YYYY HH-MM')
      }
    },
  }
</script>