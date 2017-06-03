import { h } from 'hyperapp'

function bar (slot) {
  return h('div', { class: 'bar' }, slot)
}

function input (obj) {
  return h('input', {
    type: 'text',
    class: 'input',
    tabindex: '0',
    placeholder: obj.placeholder,
    oninput: obj.oninput
  })
}

export { bar, input }
