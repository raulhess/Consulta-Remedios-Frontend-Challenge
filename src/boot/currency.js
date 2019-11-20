// import something here

// "async" is optional
export default async ({ Vue }) => {
  Vue.mixin({

    methods: {
      toCurrency(currency,value){
        if(currency == 'BRL'){
          return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        }
        return value
      }
    }

  })
}
