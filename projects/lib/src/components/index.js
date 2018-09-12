import Vue from "vue";
import AwesomeButton from "./AwesomeButton.vue";

const Components = {
  AwesomeButton
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
