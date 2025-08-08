export const helpController = {
  handler(_request, h) {
    return h.view('help/index', {
      pageTitle: 'Help',
      heading: 'Help',
      breadcrumbs: [
        {
          text: 'LAPs home',
          href: '/'
        },
        {
          text: 'Get help'
        }
      ]
    })
  }
}
