import {storage} from '@core/utils';
import {defaultStyle, defaultTitle} from '@/constans';

const defaultState = {
  initialState: defaultTitle,
  rowState: {},
  colState: {},
  dataState: {},
  styleState: {},
  currentText: '',
  currentStyles: defaultStyle
}

const normalize = state => ({
  ...state,
    currentStyles: defaultStyle,
    currentText: ''
})

export const initialState = storage('excel-state')
                            ? normalize(storage('excel-state'))
                            : defaultState
