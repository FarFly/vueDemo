import { get } from './helpers'

const getSeller = get('http://120.79.62.44:8888/sell/seller/get')

const getGoods = get('http://120.79.62.44:8888/sell/goods/get')
const getRatings = get('api/ratings')

export {
  getSeller,
  getGoods,
  getRatings
}
