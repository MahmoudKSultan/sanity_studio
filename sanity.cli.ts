import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  // ooakmnrv
  api: {
    projectId: 'g7ry455f',
    // projectId: 'ooakmnrv',
    dataset: 'production',
  },

  // studioHost: 'test3-zero-waste',
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
