/*!
 * Delegated Transaction Serivce for the Ethereum Blockchain
 *
 * TODO @license lgpl-3.0
 * TODO @see https://github.com/ethereum/web3.js
*/
const delegateTransaction = require('./tx/delegateTransaction');


function TxService (provider) {
    // Init setup
    // this.eth = new Eth(this);
    // this.db = new DB(this);
    // this.shh = new Shh(this);
    // this.net = new Net(this);

}

TxService.prototype.hello = function() {
    console.log('hello hello');
}

// Customize this function as a class, add some members etc.
TxService.prototype.delegateTransaction = delegateTransaction;

// expose providers on the class
// TxService.providers = {
//     HttpProvider: HttpProvider,
//     IpcProvider: IpcProvider
// };

// TxService.prototype.reset = function (keepIsSyncing) {
//     this._requestManager.reset(keepIsSyncing);
//     this.settings = new Settings();
// };

// TxService.prototype.BigNumber = BigNumber;
// TxService.prototype.toHex = utils.toHex;
// TxService.prototype.toAscii = utils.toAscii;
// TxService.prototype.toUtf8 = utils.toUtf8;

// TxService.prototype.sha3 = function(string, options) {
//     return '0x' + sha3(string, options);
// };

// TxService.prototype.isConnected = function(){
//     return (this.currentProvider && this.currentProvider.isConnected());
// };

module.exports = TxService;