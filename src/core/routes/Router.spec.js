import {Router} from './Router';
import {Page} from './Page';

class DashboardPage extends Page {
  getRoot() {
    const root = document.createElement('div')
    root.innerHTML = 'dashboard'
    return root
  }
}
class ExcelPage extends Page {}

discribe('Router', () => {
  let router
  let $root
  beforeEach(() => {
    $root = document.createElement('div')
    router = new Router($root, {
      dashboard: DashboardPage,
      excel: ExcelPage,
    })
  })

  test('Router should be dedfined', () => {
    expect(router).toBeDefined()
  })

  test('Router should render dashboard page', () => {
    router.changePageHandler()
    expect($root.innerHTML).toBe('<div>dashboard<div>')
  })
})
