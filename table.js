let data = [{
      id: '148',
      name: {
        first: 'Greg',
        last: 'Johnson'
      },
      email: 'greg@example.com'
    }];

const newRowGen = () => ({
  id: '',
  name: {
    first: '',
    last: ''
  },
  email: ''
});

const table = new Vue({
  template: '#app',
  data: () => {
    return {
      data: data,
      newRow: newRowGen()
    };
  },
  methods: {
    add: function() {
      if (this.newRow.id) {
        this.data.push(this.newRow);
        this.newRow = newRowGen();
      }
    }
  }
});
table.$mount('#app');
