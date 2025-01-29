import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  // ooakmnrv
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    // projectId: 'ooakmnrv',
    dataset: process.env.SANITY_STUDIO_DATASET,
  },
  studioHost: process.env.SANITY_STUDIO_HOSTNAME,
  // studioHost: 'test3-zero-waste',
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
