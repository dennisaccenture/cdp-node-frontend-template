export function buildNavigation(request) {
  return [
    {
      text: 'Home',
      href: '/',
      current: request?.path === '/'
    },
    {
      text: 'Help',
      href: '/help',
      current: request?.path === '/help'
    },
    {
      text: 'Documents',
      href: '/payment-documents',
      current: request?.path === '/payment-documents'
    }
  ]
}
