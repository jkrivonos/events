<template>
<div style="padding-left: 50px; padding-right: 50px">
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

        <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
        >
            Зарегистроваться
        </v-btn>
        <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
        >
            Войти
        </v-btn>

        <v-btn
                color="warning"
                class="mr-4"
                @click="reset"
        >   Очистить
        </v-btn>
    </v-form>
</div>
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
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>