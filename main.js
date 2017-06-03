import { h, app } from 'hyperapp'
import { button } from './button'
import { bar } from './components'
import { dash } from './dash'

function site (state) {
  return h('div', { class: 'site' }, JSON.stringify(state.data))
}

function view (state, actions) {
  return h('div', { class: 'page' }, [
    bar([
      button('views', { icon: 'menu' })
    ]),
    h('div', { class: 'page-inner' }, [
      dash(state, actions),
      site(state)
    ])
  ])
}

app({
  state: {
    view: 'home',
    prop: 'blog',
    data: {
      home: {
        header: { type: 'image', data: '' },
        title: { type: 'text', data: 'title' },
        color: { type: 'text', data: 'blue' },
        big: { type: 'check', data: true }
      },
      about: {
        title: 'title',
        callout: 'callout',
        content: 'content'
      }
    }
  },
  view: (state, actions) => view(state, actions),
  actions: {
    update (state, actions, obj) {
      const data = Object.assign({}, state.data)
      data[state.prop][obj.key] = obj.value
      return data
    }
  }
})
