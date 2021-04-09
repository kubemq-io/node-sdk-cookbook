import { Client } from 'kubemq-js';
import { Config } from 'kubemq-js';

async function main() {
  const opts: Config = {
    address: 'localhost:50000',
  };
  const client = new Client(opts);
  await client
    .ping()
    .then((value) => console.log(value))
    .catch((reason) => console.log(reason));
}

main();
