import Vue from "vue";
import VueRouter from "vue-router";
import BaseFrontend from "../views/frontend/Base.vue";
import Auth from "../providers/AuthProviders";
import SignIn from "../views/frontend/SignIn.vue";

//BASE APLIKASI
import Base from "../views/backend/Base.vue";

//Dashboard Page
import Dashboard from "../views/backend/pages/Dashboard.vue";

//Master App
import MasterAppInfo from "../views/backend/pages/masterdata/appinfo/Index.vue";

//Utiity Group Page
import User from "../views/backend/pages/utility/user/Index.vue";
import Changepwd from "../views/backend/pages/utility/user/Changepwd.vue";
import ProfilAkun from "../views/backend/pages/utility/user/Profil.vue";
import UtilityManajemenFitur from "../views/backend/pages/utility/manajemenfitur/Index.vue";
import UtilitymanajemenFiturAdministrator from "../views/backend/pages/utility/manajemenfitur/administrator/Index.vue";
import UtilityUpdateHistory from "../views/backend/pages/utility/updatehistory/Index.vue";
import UtilityUpdateHistoryItem from "../views/backend/pages/utility/updatehistory/items/Index.vue";

//Backend Halaman Depan
import HalamanDepanSlider from "../views/backend/pages/halamandepan/sliders/Index.vue";
import HalamanDepanPengumuman from "../views/backend/pages/halamandepan/pengumuman/Index.vue";
import HalamanDepanVideo from "../views/backend/pages/halamandepan/videos/Index.vue";

//ROUTE MANAJEMEN
import ManajemenCategory from "../views/backend/pages/manajemen/category/Index.vue";
import ManajemenDomain from "../views/backend/pages/manajemen/spam/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    name: "signin",
    component: SignIn,
  },

  /**
   * Route Backend
   */

  {
    path: "/backend",
    name: "",
    meta: {
      auth: true,
    },
    component: Base,
    children: [
      { path: "", redirect: { name: "dashboard" } },
      { path: "dashboard", name: "dashboard", component: Dashboard },
      { path: "user", name: "user", component: User },
      {
        path: "chngpwd",
        name: "chngpwd",
        component: Changepwd,
      },
      {
        path: "profil-akun",
        name: "profil-akun",
        component: ProfilAkun,
      },

      //route master data
      {
        path: "master-app-info",
        name: "master-app-info",
        component: MasterAppInfo,
      },

      //Route slider
      {
        path: "halaman-depan-slider",
        name: "halaman_depan_slider",
        component: HalamanDepanSlider,
      },
      //Route Pengumuman
      {
        path: "halaman-depan-pengumuman",
        name: "halaman-depan-pengumuman",
        component: HalamanDepanPengumuman,
      },
      {
        path: "halaman-depan-video",
        name: "halaman-depan-video",
        component: HalamanDepanVideo,
      },

      /**
       * Route Utility
       */
      {
        path: "utility-manajemen-fitur-administrator",
        name: "utility-manajemen-fitur-administrator",
        component: UtilitymanajemenFiturAdministrator,
      },
      {
        path: "utility-manajemen-fitur",
        name: "utility-manajemen-fitur",
        component: UtilityManajemenFitur,
      },
      {
        path: "utility-update-history",
        name: "utility-update-history",
        component: UtilityUpdateHistory,
      },
      {
        path: "utility-update-history-items/:update_history_id",
        name: "utility-update-history-items",
        component: UtilityUpdateHistoryItem,
      },

      /**
       * Route Manajemen Domain Spam
       */
      {
        path: "manajemen-category",
        name: "manajemen-category",
        component: ManajemenCategory,
      },
      {
        path: "manajemen-domain-spam",
        name: "manajemen-domain-spam",
        component: ManajemenDomain,
      },
    ],
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
  mode: "history",
});

/**
 * router match
 */

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.auth);

  if (requiresAuth) {
    if (!Auth.check) {
      next({ name: "login" });
    } else {
      next();
    }
  } else {
    if (to.name === "login" && Auth.check) {
      if (Auth.user.authent == "perusahaan") {
        next({ name: "perusahaan-dashboard" });
      } else if (Auth.user.auth === "dosen") {
        next({ name: "dosen-dashboard" });
      } else {
        next({ name: "dashboard" });
      }
    } else {
      next();
    }
  }
});

export default router;
