import { h } from 'hyperapp'
import { button } from './button'
import { bar, input } from './components'

function dash (state, actions) {
  const data = state.data
  if (data) {
    let i = 0
    const result = []
    const obj = data[state.prop]
    for (let key in obj) {
      result[i++] = h('div', { class: 'dash-block' }, [
        input({
          placeholder: key,
          oninput (e) {
            actions.update([key, e.target.value])
          }
        })
      ])
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
