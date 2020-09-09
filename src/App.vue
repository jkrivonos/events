<template>
  <v-app>
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
        >
          <span class="mr-2">Добавить мероприятие</span>
          <v-icon>+</v-icon>
        </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <router-link :to = "{ name: 'Registration' }">
              <v-list-item-title>
                Регистрация
              </v-list-item-title>
            </router-link>
          </v-list-item>
          <v-list-item>
            <router-link :to = "{ name: 'Login' }">
              <v-list-item-title>
                Вход
              </v-list-item-title>
            </router-link>
          </v-list-item>

          <v-list-item>
            <router-link :to = "{ name: 'Events' }">
              <v-list-item-title>Список мероприятий</v-list-item-title>
            </router-link>
          </v-list-item>

          <v-list-item>
            <router-link :to = "{ name: 'AddEvent' }">
              <v-list-item-title>Добавить мероприятие</v-list-item-title>
            </router-link>
          </v-list-item>

          <v-list-item>
            <router-link :to = "{ name: 'UnderControl' }">
              <v-list-item-title>Под контролем у текущего пользователя</v-list-item-title>
            </router-link>
          </v-list-item>

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
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin.
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
    events: [
      {
        name: 'Богатое кубанское мероприятие 1',
        description: 'Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin.\n'
      },
      {
        name: 'Не очень богатое кубанское мероприятие 22',
        description: 'Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin.\n'
      },
      {
        name: 'Очень не очень богатое кубанское мероприятие 3',
        description: 'Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin.\n'
      },
      {
        name: 'Очень неочень богатое кубанское мероприятие 4',
        description: 'Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin.\n'
      },
      {
        name: 'Очень неочень богатое кубанское мероприятие 5',
        description: 'Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin.\n'
      },
      {
        name: 'Очень неочень богатое кубанское мероприятие 6',
        description: 'Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin.\n'
      }
    ],
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ]
  }),
};
</script>
