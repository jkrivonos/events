<template>
<v-container>
  <v-card v-for="(job,i) in jobs"
          :key="i"
          class="mx-auto mb-6"
          color="#26c6da"
          dark
          max-width="400"
  >
    <v-card-title>
      <v-icon
              large
              left
      >
        mdi-twitter
      </v-icon>
      <span class="title font-weight-light"> {{ dateTime(job.jobAssignmentTime) }}</span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold"> {{ job.shortDescription }} </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
                  class="elevation-6"
                  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ job.assigneeName }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card-actions>
  </v-card>
</v-container>
</template>

<script>
  import { getOne } from '@/api/events'
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
    methods: {
      dateTime(dateTime) {
        return moment(dateTime, 'YYYY-MM-DD').format('DD.MM.YYYY HH-MM')
      }
    },
  }
</script>