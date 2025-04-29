// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			customCss: ['./src/styles/custom.css'],
			title: '',
			logo: {
				src: './src/assets/floogos_dark.png',
			},
			sidebar: [
                {
                    label: 'Introduccion',
                    slug: 'introduccion'
                },
                {
                    label: 'Primeros pasos',
                    slug: 'primeros-pasos'
                },
                {
                    label: 'Buenas Prácticas',
                    slug: 'buenas-practicas'
                },
                {
                    label: 'Crear Flujo',
                    slug: 'crear-flujo'
                },
                {
                    label: 'Editar Flujo',
                    slug: 'editar-flujo'
                },
                {
                    label: 'Nodos',
                    autogenerate: { directory: 'nodos' }
                },
                {
                    label: 'Plantillas',
                    autogenerate: { directory: 'plantillas' } 
                },
                {
                    label: 'Seguridad',
                    slug: 'seguridad'
                },
                {
                    label: 'Historial',
                    slug: 'historial'
                },
                {
                    label: 'Soporte',
                    slug: 'soporte'
                },
            ],
			defaultLocale: "es",
			locales: {
				es: { label: "Español", lang: "es" },
				en: { label: "English", lang: "en" },
			},
		}),
	],
	redirects: {
		"/": "/es"
	}
});
