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
                    v-model="name"
                    :rules="rules"
                    label="ФИО"
                    required
            ></v-text-field>

            <v-text-field
                    v-model="date"
                    :rules="rules"
                    label="Дата"
                    required
            ></v-text-field>

            <v-select
                    v-model="select"
                    :items="places"
                    :rules="rules"
                    label="Место"
                    required
            ></v-select>

            <v-select
                    v-model="select"
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
                      @click="validate"
              >
                Сохранить
              </v-btn>
            </v-flex>
            <v-divider class="mr-8" aria-orientation="vertical" vertical></v-divider>
          </v-form>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      date: '',
      places: [
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
    }),

    methods: {
      validate() {
        this.$refs.form.validate()
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