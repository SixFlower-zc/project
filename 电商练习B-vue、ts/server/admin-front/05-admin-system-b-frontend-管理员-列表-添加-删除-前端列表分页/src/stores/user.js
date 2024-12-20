import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore(
  "counter",
  () => {
    const username = ref("");
    const token = ref(null);

    return { username, token };
  },
  {
    persist: true
  }
);
