import {_} from '@core/dom';
import {Emitter} from '@core/Emitter';
import {StoreSubscriber} from '@core/storeSubscriber';

export class Excel {
    constructor(selector, options) {
        this.$el = _(selector)
        this.components = options.components || []
        this.name = options.name || ''
        this.store = options.store
        this.emitter = new Emitter()
        this.subscriber = new StoreSubscriber(this.store)
    }

    getRoot() {
        const $root = _.create('div', 'excel')

        const componentOptions = {
            emitter: this.emitter,
            store: this.store
        }

        this.components = this.components.map(Component => {
            const $el = _.create('div', Component.className)
            const component = new Component($el, componentOptions )
            $el.html(component.toHTML())
            $root.append($el)
            return component
        })
        return $root
    }

    render() {
        this.$el.append(this.getRoot())

        this.subscriber.subscribeComponents(this.components)
        this.components.forEach(component => component.init())
    }

    destroy() {
        this.subscriber.unsubscribeFromStore()
        this.components.forEach(component => component.destroy())
    }
}
