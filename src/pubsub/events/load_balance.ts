import { EventsClient, Config, Utils } from 'kubemq-js';

async function main() {
  const opts: Config = {
    address: 'localhost:50000',
    clientId: Utils.uuid(),
  };
  const eventsClient = new EventsClient(opts);
  await eventsClient
    .subscribe(
      {
        channel: 'events.loadbalance',
        group: 'g1',
        clientId: 'SubscriberA',
      },
      (err, msg) => {
        if (err) {
          console.error('SubscriberA', err);
          return;
        }
        if (msg) {
          console.log('SubscriberA', msg);
        }
      },
    )
    .catch((reason) => {
      console.log(reason);
    });

  await eventsClient
    .subscribe(
      {
        channel: 'events.loadbalance',
        group: 'g1',
        clientId: 'SubscriberB',
      },
      (err, msg) => {
        if (err) {
          console.error('SubscriberB', err);
          return;
        }
        if (msg) {
          console.log('SubscriberB', msg);
        }
      },
    )
    .catch((reason) => {
      console.log(reason);
    });

  await new Promise((r) => setTimeout(r, 2000));

  for (let i = 0; i < 10; i++) {
    await eventsClient.send({
      channel: 'events.loadbalance',
      body: Utils.stringToBytes('event message'),
    });
  }
}
main();
