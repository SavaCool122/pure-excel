import {ExcelComponent} from '@core/ExcelComponent';

export class ExcelStateComponente extends ExcelComponent {
  constructor(...args) {
    super(...args);
  }

  get template() {
    return JSON.stringify(this.statw, null, 2)
  }

  initState(initialState = {}) {
    this.state = {...initialState}
  }

  setState(newState) {
    this.state = {...this.state, ...newState}
    this.$root.html(this.template)
  }
}
