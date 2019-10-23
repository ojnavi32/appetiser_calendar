function page (path) {
  return () => import(`@v/${path}`)
}

let routes = [
  {
    path: '/',
    name: 'index',
    component: page('index.vue')
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: page('calendar.vue')
  }
]

export default routes