<template>
<v-container class="mt-6">
  <v-card
          class="mx-auto"
          max-width="510"
          mt-6
          outlined
  >
    <v-card-title> Вход </v-card-title>
    <v-list-item three-line>
      <v-list-item-content>
        <v-form
                ref="form"
                v-model="valid"
                lazy-validation
        >
          <v-text-field
                  v-model="login"
                  :rules="nameRules"
                  label="Логин"
                  required
          ></v-text-field>

          <v-text-field
                  v-model="password"
                  :rules="nameRules"
                  label="Пароль"
                  required
          ></v-text-field>
          <v-card-actions>
              <v-btn
                      :disabled="!valid"
                      to="Registration"
                      color="success"
                      class="mr-4"
                      @click="validate"
              >
                Зарегистрироваться
              </v-btn>
            <v-btn
                    :disabled="!valid"
                    color="success"
                    class="mr-4"
                    @click="validate"
            >
              Войти
            </v-btn>
          </v-card-actions>
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
      login: '',
      nameRules: [
        v => !!v || 'Введите логин',
      ],
      password: '',
      select: null,
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