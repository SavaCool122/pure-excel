import {DomListner} from '@core/DomListner';

export class ExcelComponent extends DomListner {
    constructor($root, options = {}) {
        super($root, options.listeners);
    }
    toHTML() {
        return ''
    }

    init() {
        this.initDomListeners()
    }

    destroy() {
        this.removeDomListeners()
    }
}
