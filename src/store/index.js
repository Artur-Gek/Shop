import {
    createStore
} from 'vuex';
export default createStore({
    state: {
        quantity: 0,
        size: 0,
        cart: 0,
        cartSize: 0,
        cartQuantity: 0,
        cost: 0,
        img: null,
        allcost: 0,
        reg: false,
        items: [],
        regpopup: false,
        isActive: false
    },
    getters: {

    },
    mutations: {
        incrementQuantity(state) {
            state.quantity += 1
        },
        decrementQuantity(state) {
            state.quantity -= 1
        },
        choseSize1(state) {
            state.size = 'S'
        },
        choseSize2(state) {
            state.size = 'M'
        },
        choseSize3(state) {
            state.size = 'L'
        },
        choseSize3Plus(state) {
            state.size = 'L'
            state.quantity = 0
        },
        choseSize2Plus(state) {
            state.size = 'M'
            state.quantity = 0
        },
        choseSize1Plus(state) {
            state.size = 'S'
            state.quantity = 0
        },
        AddToCartC(state) {
            state.cart = state.cart + state.quantity
            state.cartSize = state.size
            state.cartQuantity = state.quantity
            state.cost = 1000
            state.img = 'cap'
            state.allcost = state.cost * state.quantity
            const newPost = {
                idN: Date.now(),
                imgN: state.img,
                cartSizeN: state.cartSize,
                cartQuantityN: state.cartQuantity,
                allcostN: state.allcost,
            }
            state.items.push(newPost)
            state.quantity = 0
            state.size = 0
        },
        AddToCartH(state) {
            state.cart = state.cart + state.quantity
            state.cartSize = state.size
            state.cartQuantity = state.quantity
            state.cost = 1000
            state.img = 'hat'
            state.allcost = state.cost * state.quantity
            const newPost = {
                idN: Date.now(),
                imgN: state.img,
                cartSizeN: state.cartSize,
                cartQuantityN: state.cartQuantity,
                allcostN: state.allcost,
            }
            state.items.push(newPost)
            state.quantity = 0
            state.size = 0
        },
        AddToCartT(state) {
            state.cart = state.cart + state.quantity
            state.cartSize = state.size
            state.cartQuantity = state.quantity
            state.cost = 2000
            state.img = 't - short'
            state.allcost = state.cost * state.quantity
            const newPost = {
                idN: Date.now(),
                imgN: state.img,
                cartSizeN: state.cartSize,
                cartQuantityN: state.cartQuantity,
                allcostN: state.allcost,
            }
            state.items.push(newPost)
            state.quantity = 0
            state.size = 0
        },
        Clear(state, item) {
            state.items = state.items.filter(p => p.idN !== item.idN)
            state.cart -= 1
        }

    },
    actions: {

    },
    modules: {

    }

})