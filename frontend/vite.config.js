import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig({
  base: "/",
  plugins: [react()],
  // preview: {
  //  port: 8088,
  //  strictPort: true,
  // },
  server: {
    https: {
      key: fs.readFileSync('./certs/key.pem'), 
      cert: fs.readFileSync('./certs/cert.pem'),
    },
    host: '0.0.0.0',
    port: 443
  //  port: 8088,
  //  strictPort: true,
  //  host: true,
  //  origin: "http://0.0.0.0:8088",
  },
 });
