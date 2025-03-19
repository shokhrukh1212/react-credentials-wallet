import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), ['VITE_'])
    const brandName = env.VITE_BRANDING_NAME || 'branding1'

    const brandConfig = JSON.parse(
        fs.readFileSync(
            path.resolve(__dirname, `src/branding/${brandName}.json`),
            'utf-8'
        )
    )

    return {
        plugins: [react()],
        css: {
            preprocessorOptions: {
                less: {
                    modifyVars: {
                        'primary-color': brandConfig.primaryColor,
                    },
                    javascriptEnabled: true,
                },
            },
        },
        resolve: {
            alias: {
                '@style': 'shared-ui/styles',
            },
        },
    }
})
