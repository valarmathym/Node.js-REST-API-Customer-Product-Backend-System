/*
To test the POST request in your Node.js REST API, you can use a tool like Postman or curl command in your terminal.
Here's an example of how to use curl to make a POST request to your server:
*/
curl -X POST -H "Content-Type: application/json" -d '{
    "name": "Green Shirt",
    "description": "A bright green shirt made from 100% cotton.",
    "price": 24.99,
    "category": "Clothing",
    "tags": ["Green", "Shirt", "Cotton"]
  }' http://localhost:3000/products
  
 /*
This sends a POST request to http://localhost:3000/products with 
a JSON payload representing the new product.
If the POST request is successful, you should see a JSON response containing
the details of the newly created product. 
*/
/*
Alternatively, you can use Postman to test your POST request by following 
these steps:

Open Postman and create a new request.
Set the request method to POST and the URL to http://localhost:3000/products.
Click the "Body" tab and select "Raw" as the input type.
Select "JSON" as the format type and enter the JSON payload representing the new 
product.
Click the "Send" button to send the POST request.
If the POST request is successful, you should see a JSON response containing 
the details of the newly created product.
*/