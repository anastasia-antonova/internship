import { ref } from "vue";

export const visible = ref(true);

export const toggle = () => {
  visible.value = !visible.value;
};
