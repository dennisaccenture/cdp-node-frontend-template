import { documentController } from './controller.js'

export const document = {
  plugin: {
    name: 'documents',
    register(server) {
      server.route([
        {
          method: 'GET',
          path: '/payment-documents',
          ...documentController
        }
      ])
    }
  }
}
