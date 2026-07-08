import { defineConfig } from 'astro/config';

export default defineConfig({
  // Como tienes dominio propio, el sitio ahora vive en la raíz
  base: '/', 
  
  // Tu nuevo dominio oficial
  site: 'https://kevinrijo.work',
  
  output: 'static',
});