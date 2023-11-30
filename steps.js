// &* Database used is mongoDB

// ^ Start the server using command "npm start" in the terminal
// ^ Once the server is started on port
// ^ Go to postman tool and add the url below with the given steps

// & 1.Create an api to create a product
//^ Product should have following fields:id, product name, product category, image url , product description
// ! Api(POST): http://localhost:4500/api/v1/products
// ~ Add the product in the given format (tool used is postman method is POST)
// Format---->
// {
// "id":"ABC123",
// "productName":"Mobile",
// "productCategory":"Electronics",
// "imgUrl":"https://m.media-amazon.com/images/I/41Rkxw78fIL._SX300_SY300_QL70_FMwebp_.jpg",
// "productDescription":"Upto 12GB RAM with RAM Plus | 64GB internal memory expandable up to 1TB| Dual Sim (Nano)"
// }
// ~ Select POST method and add the url mentioned above 
// ~ Go to body->raw-> and select JSON

//&* --------------------------------------------------------------------------------------------------------

// & 2. Create an api to fetch a product by product id (eg: /products/ASD455)
// ! Api(GET): http://localhost:4500/api/v1/products/:id
// ! Apiexample:http://localhost:4500/api/v1/products/ABC123
// ~ Add the id the given format in API (tool used is postman method is GET)

//&* --------------------------------------------------------------------------------------------------------

//& 3. Create an api to fetch all products with filters and pagination
// ^(eg: /products?page=1&pageSize=10&productName=apple&category=electronics)
// ! Api(GET):http://localhost:4500/api/v1/products?
// ! Apiexample:http://localhost:4500/api/v1/products/?productName=Mobile&productCategory=Electronics&page=1&pagesize=2
// ~After the questionmark write the filters and separate the queries by & example is provided above

//&* --------------------------------------------------------------------------------------------------------

//& 4. Create an api to delete a product by id
// ! Api(DELETE):http://localhost:4500/api/v1/products/:id
// ! Apiexample:http://localhost:4500/api/v1/products/ABC115
// ~Replcae the parameter with the id you want to delete

