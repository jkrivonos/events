<template>
  <v-container class="mt-6">
    <v-card
            class="mx-auto"
            max-width="510"
            mt-6
            outlined
    >
      <v-card-title> Регистрация </v-card-title>
      <v-list-item three-line>
        <v-list-item-content>
          <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
          >
            <v-text-field
                    v-model="name"
                    :rules="[v => !!v || 'Введите ФИО']"
                    label="ФИО"
                    required
            ></v-text-field>

            <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
            ></v-text-field>

            <v-select
                    v-model="select"
                    :items="items"
                    :rules="[v => !!v || 'Введите подразделение']"
                    label="Подразделения"
                    required
            ></v-select>

            <v-btn
                    :disabled="!valid"
                    color="success"
                    class="mr-4 text-decoration-none"
                    @click="validate"
            >
              Зарегистрироваться
            </v-btn>
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
      email: '',
      emailRules: [
        v => !!v || 'Введите E-mail',
        v => /.+@.+\..+/.test(v) || 'Некорректный E-mail',
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