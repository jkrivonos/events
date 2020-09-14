<template>
  <v-app dark>
    <v-system-bar color="deep-purple darken-3"></v-system-bar>

    <v-app-bar
            app
            color="#5c6bc0"
            dark
    >
      <div class="d-flex align-center">
        <v-img
                alt="Vuetify Logo"
                class="shrink mr-2"
                contain
                transition="scale-transition"
                width="40"
        />
      </div>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title/>
      <v-spacer></v-spacer>
      <v-btn
              to="AddEvent"
              target="_blank"
              text
              class="ma-2 white--text"
      >
        Создать мероприятие
        <v-icon right dark>mdi-plus</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
            v-model="drawer"
            absolute
            left
            temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
        >
          <div v-for="(item, i) in items" :key="i">
            <router-link :to="{ name: `${item.route}` }" exact>
              <v-list-item link class="text-decoration-none" flat>
                <v-list-item-icon class="text-decoration-none">
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content style='textDecoration: none'>
                <v-list-item-title style='textDecoration: none!important'> {{ item.title }} </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </router-link>
          </div>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer
            dark
            padless
    >
      <v-card
              flat
              tile
              class="indigo lighten-1 white--text text-center"
      >
        <v-card-text>
          <v-btn
                  v-for="icon in icons"
                  :key="icon"
                  class="mx-4 white--text"
                  icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent
          ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet
          dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum
          ultrices, cursus iaculis dui sollicitudin.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Innopolis</strong>
        </v-card-text>
      </v-card>
    </v-footer>

  </v-app>
</template>

<script>

  export default {
    name: 'App',
    data: () => ({
      drawer: false,
      group: null,
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      items: [
        {title: 'Регистрация', icon: 'mdi-baby-face-outline', route: 'Registration'},
        {title: 'Вход', icon: 'mdi-account-arrow-right-outline', route: 'Login'},
        {title: 'Список мероприятий', icon: 'mdi-calendar-text-outline', route: 'Events'},
        {title: 'Подконтрольные мероприятия', icon: 'mdi-alarm-check ', route: 'UnderControl'},
        {title: 'Создать мероприятие', icon: 'mdi-plus', route: 'AddEvent'},
      ]
    }),
  };
</script>
