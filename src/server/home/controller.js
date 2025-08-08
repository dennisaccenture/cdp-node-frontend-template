/**
 * A GDS styled example home page controller.
 * Provided as an example, remove or modify as required.
 */
export const homeController = {
  handler(_request, h) {
    return h.view('home/index', {
      pageTitle: 'Home',
      heading: 'Home',
      localAuthority: 'Glamshire County Council',
      breadcrumbs: [
        {
          text: 'Local Authority Payments (LAPs) home',
          href: '/'
        }
      ]
    })
  }
}
