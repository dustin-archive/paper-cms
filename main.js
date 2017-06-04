import { h, app } from 'hyperapp'
import { bar, button } from './components'
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
    prop: 'home',
    data: {
      home: [
        { name: 'header', type: 'image', data: '' },
        { name: 'title', type: 'text', data: 'title' },
        { name: 'color', type: 'text', data: 'blue' },
        { name: 'big', type: 'check', data: true },
        { name: 'unknown', type: 'foo', data: true }
      ],
      about: {
        title: 'title',
        callout: 'callout',
        content: 'content'
      }
    }
  },
  view: (state, actions) => view(state, actions),
  actions: {
    update (state, actions, arr) {
      const data = Object.assign({}, state.data)
      data[state.prop][arr[0]].data = arr[1]
      return data
    }
  }
})
