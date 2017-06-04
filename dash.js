import { h } from 'hyperapp'
import { checkbox, bar, button, input } from './components'

function dash (state, actions) {
  const data = state.data
  if (data) {
    const result = []
    const obj = data[state.prop]
    var child
    for (let i = obj.length; i--;) {
      const key = obj[i]
      if (key.type === 'check') {
        child = checkbox('i am a checkbox', true)
      } else if (key.type === 'text') {
        child = input({
          placeholder: key.name,
          oninput (e) {
            actions.update([i, e.target.value])
          }
        })
      } else if (key.type === 'image') {
        child = h('div', null, 'i am an image')
      } else {
        child = h('div', null, 'ur not mah type')
      }
      result[i] = h('div', { class: 'dash-block' }, [child])
    }
    return h('div', { class: 'dash' }, [
      h('div', { class: 'dash-scroll' }, result),
      bar([
        button('save', {
          icon: 'save',
          onclick () {
            console.log('save')
          }
        })
      ])
    ])
  }
}

export { dash }
