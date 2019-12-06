# PostgreSQL
PostgreSQL is an open source object-relational database system with over 30 years of active development.

## Configuration
To connect with your database you need to modify `configuration` object and fill specific fields with your database connection data.

There are two basic ways to connect to your database:
* connection information
```javascript
const configuration = {
  user: "dbuser",
  host: "database.server.com",
  database: "mydb",
  password: "secretpassword",
  port: 3211,
};
```
* connection URI
```javascript
const configuration = {
  connectionString: "postgres://<USER>:<PASSWORD>@<HOST>:<PORT>/<DATABASE>",
};
```
---
In our example we don't need to create own database. Instead of this we will use public postgresql database. Let's type in Google: `public postgresql database`. I chose `RNAcentral` and took connection URI from this site: https://rnacentral.org/help/public-database.

Mine configuration object looks like:
 ```javascript
 const configuration = {
   connectionString: "postgres://reader:NWDMCE5xdipIjRrp@hh-pgsql-public.ebi.ac.uk:5432/pfmegrnargs",
 };
 ```

**REMEMBER!** As you can see, above connection URI contains connection password: `NWDMCE...`. DO NOT commit any connection information (host, user, password, database, connection URI) to public repositories on GitHub, etc.!
In this case we can do that because above connection information are publicly available and user has read-only access.

## CODE'n'RUN
In this example we will use async/await approach.

For first we need to create Client object:
```javascript
const client = new Client(configuration);
```
Then we establish connection to our database:
```javascript
await client.connect();
```
After that we select some data from our database and log it to console output
```javascript
const query = "SELECT upi, taxid, ac FROM xref WHERE ac IN ('OTTHUMT00000106564.1', 'OTTHUMT00000416802.1')";
const result = await client.query(query);
console.log("Result:");
console.dir(result.rows);
```
You can modify `query` variable and put your own query.

At the end we need to close our connection:
```javascript
await client.end();
```

It is short sample with basic query to database. Now you can run our script in terminal: `node postgresConnection.js`
Look at the next section for more information about postgres node client and sql.

## Helpful links
* [Postgres](https://www.postgresql.org/)
* [Node Postgres](https://node-postgres.com/)
* [SQL Tutorial](https://www.w3schools.com/sql/)


