import Component from 'vue-class-component'

Component.registerHooks([
  // vue-router hook
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate'
])
