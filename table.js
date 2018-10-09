let data = [{
      id: '0',
      name: {
        first: 'Leroy',
        last: 'Bonventre'
      },
      email: 'leroy@example.com'
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
