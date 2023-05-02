Sure, here's an updated version of the README file that includes the additional step:

# Covvalent Assignment

In this assignment, I created a backend project using Node.js and MySQL. The project must has the
following features:
• Fetch products with category-wise filtering
• Fetch all categories
• Pagination on the product list API endpoint.
• Search functionality to the product list API endpoint.

## Prerequisites

Before running the project, you need to have the following software installed:

- XAMPP
- Node.js (v14 or higher)

## Installation

1. Clone this repository to your local machine:

   ```
   git clone https://github.com/<your-username>/<your-repo-name>.git
   ```

2. Download XAMPP and start the Apache and MySQL services.

3. Open phpMyAdmin and create a new database named "covvalent".

4. Create a `.env` file in the root directory of the project with the following variables:

   ```
   NODE_ENV='Development'
   PORT=<port_number>
   MYSQL_HOST=<mysql_host>
   MYSQL_USERNAME=<mysql_username>
   MYSQL_PASSWORD=<mysql_password>
   MYSQL_DATABASE='covvalent'
   ```

   Note: If you are using a local MySQL instance, the `MYSQL_PASSWORD` should be left empty.

5. Install the required dependencies by running the following command:

   ```
   npm install
   ```

6. To create the necessary tables and populate them with dummy data, run the following command:

   ```
   node product-data/import-data.js --import
   ```

7. Start the server by running the following command:

   ```
   npm start
   ```

## API Endpoints

The following endpoints are available in the API:

- `GET /products/`

  Returns a list of all products in the database.

- `GET /products/?category=<category_name>`

  Returns a list of products in the specified category.

- `GET /products/categories`

  Returns a list of all categories available in the database.

- `GET /products/?search=<search_term>`

  Returns a list of products matching the search term.

- `GET /products/?page=<page_number>&limit=<limit_per_page>`

  Returns a paginated list of products.

## Usage

1. Download and install Postman.

2. Open Postman File Folder and import the provided `covvalent.postman_collection.json` file.

3. Use the imported collection to test the API endpoints.

## License

Add the project's license information.
