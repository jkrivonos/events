<template>
  <v-container class="mt-6">
    <v-card
            class="mx-auto"
            max-width="510"
            mt-6
            outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <v-card-title> Создание мероприятия </v-card-title>
          <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
          >
            <v-text-field
                    v-model="shortName"
                    :rules="rules"
                    label="Название мероприятия"
                    required
            ></v-text-field>

            <v-menu
                    ref="menu1"
                    v-model="menu1"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                        v-model="dateFormatted"
                        label="Дата"
                        hint="ММ/ДД/ГГГГ"
                        persistent-hint
                        prepend-icon="event"
                        v-bind="attrs"
                        @blur="date = parseDate(dateFormatted)"
                        v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
            </v-menu>

            <v-menu
                    ref="menu"
                    v-model="menu2"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    :return-value.sync="time"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                        v-model="time"
                        label="Выберите время"
                        prepend-icon="access_time"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                      v-if="menu2"
                      v-model="time"
                      full-width
                      @click:minute="$refs.menu.save(time)"
              ></v-time-picker>
            </v-menu>



            <v-select
                    v-model="location"
                    :items="locations"
                    :rules="rules"
                    label="Место"
                    required
            ></v-select>

            <v-select
                    v-model="initiatorName"
                    :items="leaders"
                    :rules="rules"
                    label="Организатор"
                    required
            ></v-select>

            <v-select
                    v-model="organizerDivision"
                    :items="leaders"
                    :rules="rules"
                    label="Организатор"
                    required
            ></v-select>
            <v-flex xs12 offset-xs4>
              <v-btn
                      :disabled="!valid"
                      color="success"
                      class="mr-4"
                      @click="save"
              >
                Сохранить
              </v-btn>
            </v-flex>
            <v-divider class="mr-8" aria-orientation="vertical" vertical></v-divider>
          </v-form>
        </v-list-item-content>
      </v-list-item>
    </v-card>
    <v-alert v-if="isSuccess"
      dense
      text
      type="success"
    >
      Событие успешно добавлено
    </v-alert>
    <v-alert v-if="isFailed"
            dense
            outlined
            type="error"
    >
      Событие не удалось добавить. Обратитесь к администратору приложения
    </v-alert>
  </v-container>
</template>

<script>
  import { add }  from '@/api/events'

  export default {
    data: (vm) => ({
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
      ISODate:'',
      menu1: false,
      menu2: false,
      valid: true,
      shortName: '',
      initiatorName: '',
      location: '',
      locations: [
        'Ясная Поляна',
        'Лес густой',
        'Болотце'
      ],
      leaders: [
        'Зайчик',
        'Серый волк',
        'Медведь',
        'Рыжа лисичка'
      ],
      organizerDivision: '',
      time: null,
      modal2: false,
      rules: [
        v => !!v || 'Заполните поле',
      ],
      select: null,
      items: [
        'IT',
        'ИБ',
        'HR',
        'Экономисты',
        'Юристы',
      ],
      checkbox: false,
      isSuccess: false,
      isFailed: false
    }),
    watch: {
      date () {
        this.dateFormatted = this.formatDate(this.date);
      },
    },

    methods: {
      async save() {
        if (this.$refs.form.validate()) {
          this.ISODate = new Date(this.date).toISOString().substring(0, 11);
          let resultDateTime = `${this.ISODate}${this.time}:00`;
          let event = {
            shortName: this.shortName,
            startTime: resultDateTime,
            location: this.location,
            initiatorName: this.initiatorName,
            organizerDivision: this.organizerDivision
          }
          add(event)
            .then(() => {
              this.isSuccess = true;
              this.isFailed = false;
              setTimeout(() => this.isSuccess = false, 3000)
            })
            .catch(error => {
              this.isSuccess = false;
              this.isFailed = true;
              setTimeout(() => this.isFailed = false, 3000)
              console.warn(`Не удалось добавить мероприятие ${ error }`)
            })
          ;
        }
      },
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
      reset() {
        this.$refs.form.reset()
      },
      resetValidation() {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>