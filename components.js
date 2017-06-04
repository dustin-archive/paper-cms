import { h } from 'hyperapp'

function checkbox (label, boolean) {
  return h('label', { class: 'checkbox' }, [
    h('span', null, [
      h('input', { type: 'checkbox', checked: boolean })
    ]),
    h('span', null, label)
  ])
}

function bar (slot) {
  return h('div', { class: 'bar' }, slot)
}

function button (value, obj) {
  return h('a', {
    class: 'button',
    tabindex: '0',
    href: obj.href,
    onclick: obj.onclick,
    onkeydown (e) {
      if (e.keyCode === 13) {
        obj.onclick()
      }
    }
  }, [
    h('span', { class: 'button-icon' }, obj.icon),
    h('span', { class: 'button-label' }, value)
  ])
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

export { checkbox, bar, button, input }
