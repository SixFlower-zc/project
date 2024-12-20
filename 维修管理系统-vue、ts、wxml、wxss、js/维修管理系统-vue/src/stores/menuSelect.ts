import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const usemenuSelect = defineStore(
  'menu',
  () => {
    const menu = reactive({
      menuSelect: ['home'],
    })

    function setmenu(menuSelect: string) {
      menu.menuSelect = [menuSelect]
    }
    function getmenu() {
      return menu.menuSelect
    }
    return { menu, setmenu, getmenu } as {
      getmenu: () => string[]
      setmenu: (menuSelect: string) => void
    }
  },
  { persist: true }
)
