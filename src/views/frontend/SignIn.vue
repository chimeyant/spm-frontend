<template>
  <v-app id="inspire">
    <v-main class="hacker">
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="8"
            :class="device.desktop ? `pa-16`:``"
          >
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col
                      cols="12"
                      md="8"
                    >
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-1 blue--text text--accent-3">{{ info.app_name }}</h1>
                        <div class="text-center mt-4">
                          <v-btn
                            class="mx-2"
                            fab
                            color="blue"
                            outlined
                          >
                            <v-icon>mdi-facebook</v-icon>
                          </v-btn>

                          <v-btn
                            class="mx-2"
                            fab
                            color="orange"
                            outlined
                          >
                            <v-icon>mdi-google</v-icon>
                          </v-btn>
                          <v-btn
                            class="mx-2"
                            fab
                            color="black"
                            outlined
                          >
                            <v-icon>mdi-github</v-icon>
                          </v-btn>
                        </div>
                        <h4 class="text-center mt-4 mb-4">Pastikan email Anda untuk pendaftaran</h4>
                        <v-form class="pa-10">
                          <v-text-field
                            label="Email"
                            name="Email"
                            placeholder="exp: admin@tangerangkab.go.id"
                            prepend-icon="email"
                            type="text"
                            color="blue"
                            outlined
                            v-model="uname"
                            dense
                            rounded
                          />

                          <v-text-field
                            id="password"
                            label="Password"
                            name="password"
                            prepend-icon="lock"
                            type="password"
                            color="blue"
                            v-model="upass"
                            outlined
                            dense
                            rounded
                          />

                          <v-checkbox
                            dense
                            label="Ingat kata sandi"
                            class="font-weight-thin grey--text"
                          />

                          <v-row class="justify-center mt-5 pr-10 pl-10">
                            <v-btn
                              rounded
                              color="blue"
                              dark
                              @click="postAuthent"
                              block
                              large
                            >
                              <v-icon>mdi-login</v-icon>
                              MASUK
                            </v-btn>
                          </v-row>

                        </v-form>
                      </v-card-text>
                    </v-col>
                    <v-col
                      cols="12"
                      md="4"
                      class="orange bg-image"
                    >
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Hello, Kawan</h1>
                        <h5 class="text-center">Masukkan detail pribadi Anda dan mulailah perjalanan bersama kami</h5>
                      </v-card-text>
                      <div class="text-center mb-10">
                        <v-btn
                          rounded
                          outlined
                          dark
                          @click="step++"
                        >DAFTAR</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col
                      cols="12"
                      md="4"
                      class="blue accent-3"
                    >
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Selamat Datang..!</h1>
                        <h5 class="text-center">Untuk Tetap terhubung dengan kami, silakan login dengan info personel Anda</h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn
                          rounded
                          outlined
                          dark
                          @click="step--"
                        >Masuk</v-btn>
                      </div>
                    </v-col>

                    <v-col
                      cols="12"
                      md="8"
                    >
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-1 orange--text text--accent-3">Membuat Akun Baru</h1>
                        <div class="text-center mt-4">
                          <v-btn
                            class="mx-2"
                            fab
                            color="blue"
                            outlined
                          >
                            <v-icon>mdi-facebook</v-icon>
                          </v-btn>

                          <v-btn
                            class="mx-2"
                            fab
                            color="orange"
                            outlined
                          >
                            <v-icon>mdi-google</v-icon>
                          </v-btn>
                          <v-btn
                            class="mx-2"
                            fab
                            color="black"
                            outlined
                          >
                            <v-icon>mdi-github</v-icon>
                          </v-btn>
                        </div>
                        <h4 class="text-center mt-4 mb-4">Pastikan email Anda untuk pendaftaran</h4>
                        <v-form class="pa-4">
                          <v-text-field
                            label="Name"
                            name="Name"
                            prepend-icon="person"
                            type="text"
                            color="orange accent-3"
                            outlined
                          />
                          <v-text-field
                            label="Email"
                            name="Email"
                            prepend-icon="email"
                            type="text"
                            color="orange accent-3"
                            outlined
                          />

                          <v-text-field
                            id="password"
                            label="Password"
                            name="password"
                            prepend-icon="lock"
                            type="password"
                            color="orange accent-3"
                            outlined
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-n5 mb-5">
                        <v-btn
                          rounded
                          color="orange"
                          dark
                        >SIGN UP</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-snackbar
        v-model="snackbar.state"
        :color="snackbar.color"
        :timeout="3500"
        multi-line
      >
        {{ snackbar.text }}

        <template v-slot:action="{ attrs }">
          <v-btn
            :color="theme.color"
            text
            v-bind="attrs"
            @click="snackbarClose"
          >
            Tutup
          </v-btn>
        </template>
      </v-snackbar>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data: () => ({
    step: 1,
    uname: null,
    upass: null,
  }),
  props: {
    source: String,
  },
  computed: {
    ...mapState([
      "snackbar",
      "theme",
      "thememode",
      "page",
      "device",
      "info",
      "http",
      "auth",
    ]),
  },
  created() {
    this.setPage({
      crud: false,
    });
  },
  mounted() {
    this.getAppInfo().then(() => {
      window.document.title = this.info.app_company;
      const favicon = window.document.getElementById("favicon");
      favicon.href = this.info.app_logo;
    });
  },
  methods: {
    ...mapActions([
      "signIn",
      "SignUp",
      "getAppInfo",
      "setPage",
      "snackbarClose",
    ]),
    postAuthent: function () {
      this.signIn({
        username: this.uname.replace(/ /g, ""),
        userpass: this.upass,
      }).then((pass) => {
        if (!pass) {
          console.clear();
          return;
        }
        try {
          if (this.auth.user.user.authent == "superadmin") {
            this.$router.push({ name: "dashboard" });
          }
          if (this.auth.user.user.authent == "administrator") {
            this.$router.push({ name: "dashboard" });
          }

          if (this.auth.user.user.authent == "user") {
            this.$router.push({ name: "dashboard" });
          }
        } catch (error) {
          this.snackbar.color = "red";
          this.snackbar.text = error;
          this.snackbar.state = true;
        }
      });
    },
  },
};
</script>
<style>
.bg-image {
  background: url("../../../public/images/virus2.jpeg");
  background-size: 100%;
}
.hacker {
  background: url("../../../public/images/hacker.jpeg");
  background-size: 100%;
  background-origin: content-box;
}
</style>