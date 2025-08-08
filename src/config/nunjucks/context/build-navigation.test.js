import { buildNavigation } from './build-navigation.js'

function mockRequest(options) {
  return { ...options }
}

describe.skip('#buildNavigation', () => {
  test.skip('Should provide expected navigation details', () => {
    expect(
      buildNavigation(mockRequest({ path: '/non-existent-path' }))
    ).toEqual([
      {
        current: false,
        text: 'Help',
        href: '/help'
      },
      {
        current: false,
        text: 'Documentation',
        href: '/payment-documents'
      }
    ])
  })

  test.skip('Should provide expected highlighted navigation details', () => {
    expect(buildNavigation(mockRequest({ path: '/' }))).toEqual([
      {
        current: true,
        text: 'Home',
        href: '/'
      },
      {
        current: false,
        text: 'About',
        href: '/about'
      }
    ])
  })
})
