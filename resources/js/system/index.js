import Vue from 'vue'

// Define contexts to require
const contexts = [
  require.context("./elements/", true, /\.vue$/),
  require.context("./patterns/", true, /\.vue$/),
  require.context("./templates/", true, /\.vue$/),
]
  
// Define components
const components = []
contexts.forEach(context => {
  context.keys().forEach(key => components.push(context(key).default))
})

// Install the above defined components
const System = {
  install(Vue) {
    components.forEach(component => Vue.component(component.name, component))
  },
}

// Automatic installation if Vue has been added to the global scope
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(System)
}

Vue.use(System)