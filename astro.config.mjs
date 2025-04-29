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
					slug: 'introduccion',
				},
				{
					label: 'Primeros pasos',
					slug: 'primeros-pasos' ,
				},
				{
					label: 'Crear Flujo',
					slug: 'crear-flujo' ,
				},
				{
					label: 'Editar Flujo',
					slug: 'editar-flujo' ,
				},
				{
					label: 'Ejecutar Flujo',
					slug: 'editar-flujo' ,
				},
				{
					label: 'Historial',
					slug: 'historial' ,
				},
				{
					label: 'Seguridad',
					slug: 'seguridad' ,
				},
				{
					label: 'Buenas Practicas',
					slug: 'buenas-practicas' ,
				},
				{
					label: 'Soporte',
					slug: 'soporte' ,
				},
				{
					label: 'Nodos',
					autogenerate: { directory: 'nodos' },
				},
				{
					label: 'Plantillas',
					autogenerate: { directory: 'plantillas' },
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
