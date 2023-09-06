import axios from 'axios'

(async () => {

  async function getProducts () {
    const rta = await axios.get('https://api.escuelajs.co/api/v1/products')
    return rta.data;
  }

  const products = await getProducts();
  console.log(products)
})();
