 import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'
// import * as bootstrap from 'bootstrap'
// import { Modal } from "bootstrap";

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('bootstrap', bootstrap)
  // provide: {
  //   bootstrap: {
  //     Modal,
  //   },
  // },
})