import { h } from 'hyperapp'
import { button } from './button'
import { bar, input } from './components'

function frame (content) {
  return h('div', { class: 'dash' }, [
    h('div', { class: 'dash-scroll' }, content),
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

function dash (state, actions) {
  const data = state.data
  if (data) {
    let i = 0
    const result = []
    const obj = data[state.prop]
    for (let key in obj) {
      const value = obj[key]
      result[i++] = h('div', { class: 'dash-block' }, [
        input('', {
          value: value,
          placeholder: key,
          oninput: (e) => {
            actions.update({
              key: key,
              value: e.target.value
            })
          }
        })
      ])
    }
    return frame(result)
  }
}

export { dash }
