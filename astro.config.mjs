import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Al ser un repositorio de proyecto, el base debe coincidir exactamente con el nombre de tu repositorio
  base: '/Portfolio',
  
  // Cambiamos el dominio para que apunte a tu usuario actual de GitHub (kevo-cli)
  site: 'https://kevo-cli.github.io',
  
  output: 'static',
});
