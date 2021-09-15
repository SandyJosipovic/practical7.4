Vue.component('child',{
  props: {
    text: {
      type: String,
      required: true
    }
  },
  template: `<div>{{ text }}</div>`
});

new Vue({
  el: '#propcode',
  data() {
    return {
      message: 'Hello everyone. Vue prop code'
    }
  }
})