const Sqlite = require("nativescript-sqlite")

export default {

  namespaced: true,

  state: {
    database: null,
    cart: [],
    orders: []
  },

  actions: {

    init(context) {
      (new Sqlite("Local")).then(db => {
        // db.execSQL("DROP TABLE IF EXISTS cart")
        db.execSQL("CREATE TABLE IF NOT EXISTS cart (id INTEGER PRIMARY KEY AUTOINCREMENT, product_id INTEGER , store_id INTEGER, quantity INTEGER, product_name VARCHAR, price FLOAT)")
          .then( (id) => {
            context.commit("init", { database: db });

        }, error => {
          console.log("CREATE TABLE ERROR", error);
        });

        db.execSQL("CREATE TABLE IF NOT EXISTS orders (id INTEGER PRIMARY KEY AUTOINCREMENT, order_id)");

      }, error => {
        console.log("OPEN DB ERROR", error);
      });
    },

    insert(context, data) {
      context.state.database.execSQL("INSERT INTO cart (product_id, store_id, quantity, product_name, price) VALUES (?, ?, ?, ?, ?)", [data.product_id, data.store_id, data.quantity, data.product_name, data.price])
        .then(id => {
          context.commit("save", { data: data });
        }, error => {
          console.log("INSERT ERROR", error);
        });
    },

    clearCart(context) {
      context.state.database.execSQL("DELETE FROM cart")
        .then(res => {
          context.commit("clear")
        })
    },

    insertOrder(context, order_id) {
      context.state.database.execSQL("INSERT INTO orders (order_id) VALUES (?)", [order_id])
        .then(id => {
          context.commit('saveOrder', { id: id, order_id: order_id})
        }, error => {
          console.log(error)
        })
    },

    getOrders(context) {
      context.state.database.all("SELECT * FROM orders")
        .then((res) => {
          context.commit("loadOrder", { data: res })
        }, error => {
          console.log(error)
        })
    },

    query(context) {
      context.state.database.all("SELECT * FROM cart")
        .then(result => {
          context.commit("load", { data: result });
        }, error => {
         console.log("SELECT ERROR", error);
       });
    }
  },

  getters: {

    getCart(state) {
      return state.cart
    },

    getOrders(state) {
      return state.orders
    }

  },

  mutations: {

    init(state, data) {
      state.database = data.database;
    },

    load(state, data) {
      state.data = [];

      for(let i = 0; i < data.data.length; i++) {
        state.cart.push({
          name: data.data[i][4],
          store_id: data.data[i][2],
          product_id: data.data[i][1],
          quantity: data.data[i][3],
          price: data.data[i][5]
        });
      }
    },

    loadOrder(state, data) {
      state.orders = []

      for (let i = 0; i < data.data.length; i++) {
        state.orders.push({
          id: data.data[i][0],
          order_id: data.data[i][1]
        })
      }

    },

    save(state, data) {

      state.cart.push({
        name: data.data.product_name,
        product_id: data.data.product_id,
        price: data.data.price,
        quantity: data.data.quantity,
        store_id: data.data.store_id
      });
    },

    saveOrder(state, data) {

      state.orders.push({
        id: data.id,
        order_id: data.order_id
      })

    },

    clear(state) {
      state.cart = []
    }
  }

}
