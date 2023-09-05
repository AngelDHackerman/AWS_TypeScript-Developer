import axios from 'axios'

(async () => {


  function delay (time: number) { 
    const promise = new Promise<string>((resolve) => { 
      setTimeout(() => { 
        resolve("Hola!")
      }, time)
    })
    return promise;
  }

  function getProducts () { 
    const promise = axios.get('https://api.escuelajs.co/api/v1/products')
    return promise;
  }

  async function getProductsAsync () { 
    const rta = await axios.get('https://api.escuelajs.co/api/v1/products')
    return rta.data;
  }

  console.log('---'.repeat(25))
  const rta = await delay(3000);
  console.log(rta)

  console.log('---'.repeat(25))
  const products = await getProducts();
  console.log(products.data)

  console.log('---'.repeat(25))
  const productsAsync = await getProductsAsync();
  console.log(productsAsync)
})();
