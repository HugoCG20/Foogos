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
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Primeros pasos',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Crear Flujo',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Editar Flujo',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Ejecutar Flujo',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Historial',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Seguridad',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Buenas Practicas',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Soporte',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Nodos',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Plantillas',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
