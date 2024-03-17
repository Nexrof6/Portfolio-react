import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Portfolio-react",
  plugins: [react()],
  server:{
    host:true,
    port:80
  }
})

// export default {
//   server: {
//     host: true,
//   },
// };
