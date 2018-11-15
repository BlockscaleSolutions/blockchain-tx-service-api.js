Delegation Service
==================

1. Deploy contract to the Kovan testnet and push all contract ABIs to ipfs
2. Send transactions directly from this service


API
===

sendTransaction(abiMultihash, address, method, inputParameters)
---------------------------------------------------------------
    * delegate the transaction, by paying for it through to an infura node.

    
Usage
=====

1. Subscribe online to retrieve your api key
2. Add the module to your application

.. code-block:: console

    yarn add ethereum-delegated-transaction

3. Import the module

.. code-block:: JavaScript

    const TxService = require('ethereum-tx-service');

4. Create a connection to the service

.. code-block:: JavaScript

    const txService = new TxService(url, apiKey);
    // ie. infura: const ipfs = ipfsAPI({host: 'ipfs.infura.io', port: '5001', protocol: 'https'})

5. Start delegating transactions!

.. code-block:: JavaScript

    const tx = await txService.delegateTransaction(... bunch of input params);




