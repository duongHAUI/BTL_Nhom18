// import { actions } from '.';
import Cookies from 'js-cookie';
import products from '../products/DataProducts';
import { FILTER_IN_PRICE, FILTER_IN_TITLE, FIND_ASUS, FIND_DEV, FIND_LENOVO, FIND_MACBOOK, GET_DATA, BAN_CHAY, SEARCH_INPUT, ON_TO_CART } from './constants';
export const initState = {
    dataproducts: [
        ...products
    ],
    category: [],
    carts: []
}
export const reducer = (state = initState, action) => {
    switch (action.type) {

        case FILTER_IN_PRICE: {

            const filterProduct = state.dataproducts.filter((product) => {

                return product.price < action.payload
            })
            state = {
                ...state,
                dataproducts: [...products],
                category: [...filterProduct]
            }
            return state
        }
        case FILTER_IN_TITLE: {
            const arr = state.dataproducts

            const arrTitle = arr.map((a) => {
                return a.title;
            })
            const softTit = arrTitle.soft();
        }
        case FIND_ASUS: {
            const products = state.dataproducts;
            const findAsus = products.filter((product) => {
                return product.title.match(action.payload);
            })
            state = {
                ...state,
                dataproducts: [...products],
                category: [...findAsus]
            }
            return state
        }
        case FIND_LENOVO: {
            const products = state.dataproducts;
            const findLenovo = products.filter((product) => {
                return product.title.match(action.payload);
            })
            state = {
                ...state,
                dataproducts: [...products],
                category: [...findLenovo]
            }
            return state
        }
        case FIND_MACBOOK: {
            const products = state.dataproducts;
            const findMacbook = products.filter((product) => {
                return product.title.match(action.payload);
            })
            state = {
                ...state,
                dataproducts: [...products],
                category: [...findMacbook],

            }
            return state
        }
        case FIND_DEV: {
            const products = state.dataproducts;
            const findDev = products.filter((product) => {
                return product.title.match(action.payload);
            })
            state = {
                ...state,
                dataproducts: [...products],
                category: [...findDev]
            }
            return state
        }
        case GET_DATA: {
            state = {
                ...state,
                
                category: { ...state.dataproducts[action.payload - 1] }
            }
            return state

        }
        case BAN_CHAY: {
            const products = state.dataproducts;
            const banChay = products.filter((product) => {
                return product.sold > action.payload;
            })
            state = {
                ...state,
                dataproducts: [...products],
                category: [...banChay]
            }
            return state
        }
        case SEARCH_INPUT: {
            const products = state.dataproducts;
            const search = products.filter((product) => {
                return product.title.toLowerCase().match(action.payload);
            })
            state = {
                ...state,
                dataproducts: [...products],
                category: [...search]
            }
            return state;
        }
        case ON_TO_CART: {

            // Great Item data from products array
            const item = state.dataproducts.find(
                (product) => product.id === action.payload.id
            );
            
            if(!Cookies.get("carts")){
                Cookies.set("carts",JSON.stringify([]))
                console.log(123);
            }
            const carts = JSON.parse(Cookies.get("carts"))
            let inCart;
            inCart = carts.some((item) =>
                item.id === action.payload.id
            );
            const newCarts = inCart
            ? carts.map((item) =>
                item.id === action.payload.id
                    ? { ...item, qty: item.qty + 1 }
                    : item
            )
            : [...carts, { ...item, qty: 1 }]
            console.log("newCarts",newCarts);
            Cookies.set("carts",JSON.stringify(newCarts))
            return state;
        }
        default:
            throw new Error('Invalit action')
    }
}
