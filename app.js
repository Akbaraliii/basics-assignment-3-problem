const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      value: '',
    };
  },
  computed: {
    result() {
      if (this.counter < 37) {
        return 'Not there yet';
      } else if (this.counter === 37) {
        return this.counter;
      } else {
        return 'Too much';
      }
    },
  },
  watch: {
    result() {
      console.log('watcher is working!');
      const that = this;
      setTimeout(function () {
        that.counter = 0;
      }, 5000);
    },
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter + num;
    },
  },
});

app.mount('#assignment');
