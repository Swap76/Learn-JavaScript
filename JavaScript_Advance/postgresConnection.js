const { Client } = require("pg");

async function main () {
  const configuration = {
    connectionString: "postgres://reader:NWDMCE5xdipIjRrp@hh-pgsql-public.ebi.ac.uk:5432/pfmegrnargs"
  };
  const client = new Client(configuration);
  await client.connect();
  const query = "SELECT upi, taxid, ac FROM xref WHERE ac IN ('OTTHUMT00000106564.1', 'OTTHUMT00000416802.1')";
  const result = await client.query(query);
  console.log("Result:");
  console.dir(result.rows);
  await client.end();
}

main()
  .catch(err => console.log(`An error occurred:\n ${err}`));