import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Si despliegas en tu página de usuario principal (kevin-frias.github.io), mantén base como '/'
  // Si despliegas en un repositorio de proyecto (ej. kevin-frias.github.io/portfolio), cambia base a '/portfolio'
  base: '/',
  site: 'https://kevin-frias.github.io',
  output: 'static',
});
