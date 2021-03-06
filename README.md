# KubeMQ NodeJS TS SDK Cookbook

KubeMQ JS/TS SDK Cookbook

## Install KubeMQ Community Edition
Please visit [KubeMQ Community](https://github.com/kubemq-io/kubemq-community) for intallation steps.

### Binaries

KubeMQ standalone binaries are available for Edge locations and for local development.

Steps:

1. Download the latest version of KubeMQ standalone from [Releases](https://github.com/kubemq-io/kubemq/releases)
2. Unpack the downloaded archive
3. Run ```kubemq -k {{your key}}``` (A key is needed for the first time only)

## Install KubeMQ Node JS/TS SDK

```
npm install --save kubemq-js
```
## Recipes

| Category             | Sub-Category             | Description                                                             |
|:---------------------|:-------------------------|:------------------------------------------------------------------------|
| Client               |                          |                                                                         |
|                      | Basic                    | Basic Client                                                            |
|                      | Authentication           | Client with JWT Authentication token                                    |
|                      | TLS                      | Client with TLS                                                         |
| Queues               |                          |                                                                         |
|                      | Single                   | Send/Receive single queue message                                       |
|                      | Batch                    | Send/Receive batch queue messages                                       |
|                      | Delayed                  | Send/Receive delayed queue messages                                     |
|                      | Expiration               | Send/Receive queue messages with time expiration                        |
|                      | Dead-Letter              | Send/Receive queue messages with dead-letter queue                      |
|                      | Multicast                | Send/Receive queue messages to multiple queues                          |
|                      | Multicast Mix            | Send/Receive queue messages to queues, events store and events channels |
|                      | Stream                   | Send/Stream receive queue messages with ack                             |
|                      | Stream-extend-visibility | Send/Stream receive queue messages with ack and visibility extension    |
|                      | Stream-resend            | Send/Stream receive queue messages with resend to another queue         |
|                      | Peek                     | Peek queue messages                                                     |
|                      | Ack-All                  | Ack all messages in queue                                               |
| Pub/Sub Events       |                          |                                                                         |
|                      | Single                   |  Send/Subscribe events messages                                                                        |
|                      | Stream                   |  Stream Send/Subscribe events messages                                                                       |
|                      | Load Balance             |  Send/Subscribe load balancing multiple receivers|
|                      | Multicast                |  Send/Subscribe to multiple events channels                                                                       |
|                      | Multicast Mix            |  Send/Subscribe events messages to queues, events-store and events channels                                                                      |
|                      | Wildcards                |  Send/Subscribe events messages with wildcard subscription|
| Pub/Sub Events Store |                          |                                                                         |
|                      | Single                   |  Send/Subscribe events store messages                                                                         |
|                      | Stream                   |  Stream Send/Subscribe events store messages                                                                       |
|                      | Load Balance             |   Send/Subscribe load balancing multiple receivers                                                                      |
|                      | Multicast                |   Send/Subscribe to multiple events store channels                                                                      |
|                      | Multicast Mix            |   Send/Subscribe events store messages to queues, events-store and events channels                                                                      |
|                      | Offset                   |  Send/Subscribe events store messages with offset subscription|
| RPC                  |                          |                                                                         |
|                      | Commands                 | Send/Subscribe rpc command messages                                                                         |
|                      | Queries                  |  Send/Subscribe rpc query messages                                                                        |


## Support
You can reach us at:
- [**Email**](mailto:support@kubemq.io)
- [**Slack**](https://kubemq.slack.com) - [Invitation](https://join.slack.com/t/kubemq/shared_invite/enQtNDk3NjE1Mjg1MDMwLThjMGFmYjU1NTVhZWRjZTRjYTIxM2E5MjA5ZDFkMWUyODI3YTlkOWY2MmYzNGIwZjY3OThlMzYxYjYwMTVmYWM) 

