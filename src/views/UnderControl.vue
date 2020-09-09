<template>
  <v-container>
    Мероприятия под контролем текущего пользователя
    <v-card v-for="(control,i) in controls"
            :key="i"
            class="mx-auto mb-6"
            color="grey"
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
        <span class="title font-weight-light"> {{ dateTime(control.eventStartTime) }}</span>
      </v-card-title>

      <v-card-text class="headline font-weight-bold">
        {{ control.shortName }}
      </v-card-text>

      <v-card-actions>
        <v-list-item class="grow">
          <v-list-item-avatar color="grey darken-3">
            <v-img
                    class="elevation-6"
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            ></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ control.creatorName }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
  import { getControl } from '@/api/events'
  import moment from 'moment'

  export default {
    data: () => ({
      controls: []
    }),
    created() {
      getControl()
        .then(response =>this.controls = response.events)
        .catch(error => console.warn(`Не удалось получить данные по мероприятию для контроля текущим пользователем, ${error}`));
    },
    methods: {
      dateTime(dateTime) {
        return moment(dateTime, 'YYYY-MM-DD').format('DD.MM.YYYY HH-MM')
      }
    }
  }
</script>