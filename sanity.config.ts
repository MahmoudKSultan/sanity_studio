import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schema} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'test-proj',

  // projectId: 'dlx440or',
  projectId: 'g7ry455f',
  // dataset: 'waitlist',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schema.types,
  },
})
