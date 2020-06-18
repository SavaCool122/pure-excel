import {capitalize} from '@core/utils';

export class DomListner {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No $root to DomListner!`)
    }
    this.$root = $root
    this.listeners = listeners
  }

  initDomListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener)
      if (!this[method]) {
        const name = this.name || ''
        throw new Error(`Method ${method} is not implimented in ${name}`)
      }
      this[method] = this[method].bind(this)
      // Аналог eventListener
      this.$root.on(listener, this[method].bind(this) )
    })
  }
  removeDomListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener)
      this.$root.off(listener, this[method].bind(this))
    })
  }
}
// input => onInput
function getMethodName(eventName) {
  return 'on' + capitalize(eventName)
}

