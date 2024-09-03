const { getAllOrders } = require("./orders.model");

module.exports = {
    Query : {
        orders : () => {
            console.log('Getting Orders....');
            return getAllOrders()
    }
}}