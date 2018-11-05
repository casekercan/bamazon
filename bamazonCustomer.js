var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon"
});


connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    loadAllProducts();
});

function loadAllProducts() {
    connection.query("SELECT * FROM products", (err, res) => {
        if (err) throw err;
        res.forEach(product => {
            console.log(`Item ID: ${product.item_id} \n Product Name: ${product.product_name} \n Price: $${product.price} \n -------------------- `)
        })
        goShopping();

    });
};

function goShopping() {
    inquirer
        .prompt([
            {
                name: "what_item",
                type: "input",
                message: "What is the Item ID of the product you wish to buy?",
            },
            {
                name: "how_many",
                type: "input",
                message: "How many of these items would you like to buy?"
            }
        ]).then(function (answer) {
            var productId = parseFloat(answer.what_item);
            var quantity = parseFloat(answer.how_many);

            connection.query(`SELECT * FROM products WHERE item_id="${productId}"`, (err, res) => {
                if (err) throw err;

                if (quantity > res[0].stock_quantity) {
                    console.log("Insufficient quantity! \n I'm sorry there are only " + res[0].stock_quantity + " items left in stock. please select a different item or quantity. \n Your order did not go through.");
                    loadAllProducts();
                } else {
                    var totalCost = (res[0].price * quantity);
                    console.log("Thank you for your purchase of: \n" + quantity + " " + res[0].product_name + "(s)" + "\n Your total cost was: $" + totalCost);
                    var newQuantity = (res[0].stock_quantity - quantity);
                    updateDb(productId, newQuantity);
                }
            })
        });
};

function updateDb(productId, newQuantity, ) {
    connection.query(`UPDATE products SET stock_quantity=${newQuantity} WHERE item_id=${productId}`, function (error) {
        if (error) throw error;
        console.log("Item updated in bamazon.com :)");
        moreShopping();
    });
};

function moreShopping() {
    inquirer
        .prompt([
            {
                name: "shopping",
                type: "confirm",
                message: "Would you like to do some more shopping?",
            }
        ]).then(function (answer) {
            if (answer.shopping === true) {
                loadAllProducts();
            } else {
                connection.end();
            }
        });
}