import { h } from 'hyperapp'

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

export { button }
