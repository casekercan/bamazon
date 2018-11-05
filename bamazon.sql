CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(60) NULL,
department_name VARCHAR(60) NULL,
price DECIMAL(10,2) NULL,
stock_quantity INT NULL
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Vanilla 8oz Candle", "Home Furninshings", 12.99, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Christmas Cheer Mug", "Kitchen", 14.50, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("8 x 10 Black Picture Frame", "Home Furninshings", 19.99, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sony 42 inch Tv", "Electronics", 399.49, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hoka One Running Shoes", "Clothing", 120.99, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wireless Headphones", "Electronics", 71.49, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Kitchen Aid Mixer (RED) ", "Kitchen", 299.00, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hand Knit Throw Blanket", "Home Furninshings", 49.99, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Garmin Smart Watch", "Electronicss", 349.00, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Teal Lamp", "Home Furninshings", 24.50, 9);