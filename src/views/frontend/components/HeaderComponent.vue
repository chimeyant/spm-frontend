<template>
  <v-app-bar
    app
    light
    color="white"
    absolute
    hide-on-scroll
    style="height: 85px;"
  >
    <v-toolbar-title>
      <img
        :src="info.app_logo"
        width="50px"
        height="60px"
        alt="logo"
        :class="device.desktop ? `ml-10 mr-5 mt-5 `:`ml-2 mr-2  `"
      >
      <div class="flex flex-column mt-5">
        <span
          class="hidden-sm-and-down header-title"
          style="padding-bottom:5px ;"
        >
          <span class="indigo--text ant-header-title">{{ info.app_company }} </span>

          <br>
          <div>
            <span class="purple--text ant-header-subtitle">{{ info.app_desc }}</span>
          </div>
        </span>

        <span
          class="hidden-md-and-up black--text"
          style="font-size:16px ;"
        >
          <span class="indigo--text">{{ info.app_company }}</span>
          <div style="font-size:12px ;">
            <span class="orange--text">SINIKMAT</span>
            <span class="purple--text"> LANTAS</span>
          </div>
        </span>
      </div>
    </v-toolbar-title>

    <v-spacer />
    <v-list class="d-flex white light  mt-4">
      <v-list-item
        class="hidden-sm-and-down "
        link
        v-for="(menu,index) in menus"
        :key="index"
        :to="menu.route"
      >
        <v-list-item-title class="black--text rounded-2">{{ menu.title }}</v-list-item-title>
      </v-list-item>
    </v-list>

    <v-menu
      offset-y
      width="300"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-show="device.mobile"
          icon
          light
          v-bind="attrs"
          v-on="on"
          class="mt-4"
        >
          <v-icon color="black">mdi-menu</v-icon>
        </v-btn>
      </template>
      <v-card width="200">
        <v-list>
          <v-list-item>
            <v-list-item-title @click="$router.push({ name: 'home' })">
              <v-icon color="green">mdi-home-circle</v-icon> Beranda
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title @click="$router.push({name:'media'})">
              <v-icon color="green">mdi-file</v-icon> Dokumen
            </v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item>
            <v-list-item-title @click="$router.push({ name: 'registrasi-user' })">
              Registrasi
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title @click="$router.push({ name: 'registrasi-perusahaan' })">
              RamChek Perusahaan Baru
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title @click="$router.push({ name: 'login' })">
              Login
            </v-list-item-title>
          </v-list-item>

        </v-list>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "HeaderComponent",

  data: () => ({
    menus: [
      { title: "Beranda", route: "/home" },
      { title: "|", route: "" },
      { title: "Registrasi", route: "/registrasi-user" },
      { title: "Login", route: "/login" },
    ],
  }),
  mounted() {},
  computed: {
    ...mapState(["device", "theme", "info"]),
  },
};
</script>

<style>
.v-toolbar__title {
  display: flex;
  font-size: 20px;
  font-weight: 600;
  color: cornflowerblue;
}

::before {
  border-radius: 30px;
}

span.hidden-sm-and-down.header-title {
  font-size: 20px;
  color: grey;
}

.ant-header-title {
  font-family: people;
}
.ant-header-subtitle {
  font-size: 13px;
  font-family: sans-serif;
}
</style>