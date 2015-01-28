import element from './element'

class Tangent {
  constructor () {
    element(document.body).ready( event => this.bootstrap() )
  }

  bootstrap () {
    this.rootElement = this.element('[tg-app]')
    System.import(this.rootElement.attr('tg-app')).then(m => {
      let App = m.default
      this.app = new App(this)
    }, r => {
      throw new Error(`Failed to load TangentJS app from ${this.rootElement.attr('tg-app')}`)
    })
  }

  element () {
    return element.apply(element, Array.prototype.slice.apply(arguments))
  }
}

export default new Tangent