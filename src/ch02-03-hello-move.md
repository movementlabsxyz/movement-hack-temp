# Hello, Move!
In this lesson, you'll build a simple dApp that allows users to post messages to a chat room.

Try the app here: https://main.d2761w90g9sxb3.amplifyapp.com/ 

## Requirements

Install Movement CLI:

```bash
<(curl -fsSL https://raw.githubusercontent.com/movemntdev/M1/main/scripts/install.sh) --latest
```
Clone the dApp repository:

```bash
git clone https://github.com/movementlabsxyz/movement-dapp-workshop/
cd movement-dapp-workshop
```

## Building the Chat dApp

This dApp is built using the Aptos Move language. The dApp is located in the aptos directory. Once inside the repository, navigate to the aptos directory:

```bash
cd aptos
```

## Publish Module

Aptos language requires you to initialize the Move environment:

```bash 
movement aptos init
```

Then you can publish the module:

```bash
movement aptos move publish --named-addresses chat_addr=default
```

## Test Front End

To test the front end, navigate to the frontend directory and run the following command to start the front end server.

```bash
npm i && npm run dev
```

You will be able to see your frontend at http://localhost:3000.

Take a look at `aptos/frontend/components/Chat.tsx`. This file contains the logic for the chat room. The Chat component is responsible for fetching the chat messages, displaying them and posting new messages to the chat room.

In line 21, replace the address after `{ "address":`  with the address of the `chat_addr` you published:

```bash
const abi = { "address": "0xYOUR_ADDRESS", (...)}"
```

Make sure the address starts with `0x` else add it. That should be available in `.aptos/config.yaml` file as the `account` field.

Now you can try running your transactions on the frontend and see the chat messages being posted.

## TODO: Add Galxe integration to submit GitHub repo link here