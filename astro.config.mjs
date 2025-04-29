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
                    label: 'Introduction',
                    translations: {
						es: 'Introducción',
					},
                    slug: 'introduction'
                },
                {
                    label: 'First Steps',
                    translations: {
						es: 'Primeros pasos',
					},
                    slug: 'first-steps'
                },
                {
                    label: 'Good practices',
                    translations: {
						es: 'Buenas prácticas',
					},
                    slug: 'good-practices'
                },
                {
                    label: 'Create a flow',
                    translations: {
						es: 'Crear flujo',
					},
                    slug: 'create-flow'
                },
                {
                    label: 'Edit flow',
                    translations: {
						es: 'Editar flujo',
					},
                    slug: 'edit-flow'
                },
                {
                    label: 'Ejecute flow',
                    translations: {
						es: 'Ejecutar flujo',
					},
                    slug: 'ejecute-flow'
                },
                {
                    label: 'Nodes',
                    translations: {
						es: 'Nodos',
					},
                    autogenerate: { directory: 'nodes' }
                },
                {
                    label: 'Templates',
                    translations: {
						es: 'Plantillas',
					},
                    autogenerate: { directory: 'templates' } 
                },
                {
                    label: 'Segurity',
                    translations: {
						es: 'Seguridad',
					},
                    slug: 'segurity'
                },
                {
                    label: 'History',
                    translations: {
						es: 'Historial',
					},
                    slug: 'history'
                },
                {
                    label: 'Sopport',
                    translations: {
						es: 'Soporte',
					},
                    slug: 'sopport'
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
		"/": "/en"
	}
});
