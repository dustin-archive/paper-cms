const { h, app } = hyperapp

const components = {
  bar (children) {
    return h('div', { class: 'bar' }, children)
  },
  button (value, obj) {
    return h('a', {
      class: 'button',
      tabindex: '0',
      href: obj.href,
      onclick: obj.onclick,
      onkeydown: e => e.keyCode === 13 ? obj.onclick() : null
    }, [
      h('span', { class: 'button-icon' }, obj.icon),
      h('span', { class: 'button-label' }, value)
    ])
  },
  input (value, obj) {
    return h('input', {
      type: 'text',
      class: 'input',
      tabindex: '0',
      placeholder: obj.placeholder,
      oninput: obj.oninput
    })
  }
}

function dash (state, actions) {
  const data = state.data
  if (data) {
    let i = 0
    const result = []
    const obj = data[state.view]
    for (let key in obj) {
      const value = obj[key]
      result[i++] = h('div', { class: 'dash-block' }, [
        components.input('', {
          value: value,
          placeholder: value,
          oninput: (e) => {
            actions.update({ key: key, value: e.target.value })
          }
        })
      ])
    }
    return h('div', { class: 'dash' }, [
      h('div', { class: 'dash-scroll' }, result),
      components.bar([
        components.button('save', {
          icon: 'save',
          onclick () {
            console.log('update')
          }
        })
      ])
    ])
  }
}

function site (state) {
  let data = state.data
  if (data) return h('div', { class: 'site' }, JSON.stringify(data[state.view]))
}

function view (state, actions) {
  return h('div', { class: 'page' }, [
    components.bar([
      components.button('views', { icon: 'menu' })
    ]),
    h('div', { class: 'page-inner' }, [
      dash(state, actions),
      site(state)
    ])
  ])
}

const data = {
  home: {
    title: 'title',
    callout: 'callout',
    content: 'content'
  },
  about: {
    title: 'title',
    callout: 'callout',
    content: 'content'
  }
}

app({
  state: {
    view: 'home',
    data: null
  },
  view: (state, actions) => view(state, actions),
  actions: {
    fetch: () => ({ data }),
    update (state, actions, obj) {
      const data = Object.assign({}, state.data)
      data[state.view][obj.key] = obj.value
      return data
    }
  },
  events: {
    loaded: (state, actions) => {
      actions.fetch()
    }
  }
})
