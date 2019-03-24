import { get } from './helpers'

const getSeller = get('http://localhost:8888/sell/seller/get')
const getGoods = get('http://localhost:8888/sell/goods/get')
const getRatings = get('api/ratings')

export {
  getSeller,
  getGoods,
  getRatings
}
