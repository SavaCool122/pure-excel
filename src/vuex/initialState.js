import {defaultStyle, defaultTitle} from '@/constans';

const defaultState = {
  title: defaultTitle,
  rowState: {},
  colState: {},
  dataState: {},
  styleState: {},
  currentText: '',
  currentStyles: defaultStyle,
  openedDate: new Date().toJSON()
}

const normalize = state => ({
  ...state,
    currentStyles: defaultStyle,
    currentText: ''
})

export function normalizeInitialState(state) {
  return state ? normalize(state) : {...defaultState}
}


