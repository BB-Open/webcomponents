import {defineCustomElement} from "vue";
import { createPinia, setActivePinia } from "pinia";
import PkanInput from "../src/components/pkan_input.vue"
import PkanOutput from "../src/components/pkan_output.vue"
import PkanRedirect from "./components/pkan_redirect.vue";
import PkanParams from "./components/pkan_params.vue";


// Here you create a standalone pinia
setActivePinia(createPinia());

const pkan_input = defineCustomElement(PkanInput);
customElements.define("pkan-input", pkan_input);

const pkan_output = defineCustomElement(PkanOutput);
customElements.define("pkan-output", pkan_output);

const pkan_redirect = defineCustomElement(PkanRedirect);
customElements.define("pkan-redirect", pkan_redirect)

const pkan_params = defineCustomElement(PkanParams);
customElements.define("pkan-params", pkan_params)