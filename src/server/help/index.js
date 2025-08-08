import { helpController } from './controller.js'

export const help = {
  plugin: {
    name: 'help',
    register(server) {
      server.route([
        {
          method: 'GET',
          path: '/help',
          ...helpController
        }
      ])
    }
  }
}
