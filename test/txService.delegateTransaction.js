const { assert } = require('chai');
const TxService = require('../index');
const txService = new TxService();
// const FakeHttpProvider = require('./helpers/FakeHttpProvider');

const method = 'delegateTransaction';

const tests = [{
    result: '0xb',
    formattedResult: 11,
    call: 'eth_'+ method
}];

describe('txService', function () {
    describe(method, function () {
        tests.forEach(function (test, index) {
            it.only('property test: ' + index, function () {
                
                console.log('test test');
                txService.delegateTransaction();
                // console.log(txService);
                // console.log(txService);
                // console.log(txService);

                // given
                // const provider = new FakeHttpProvider();
                // web3.setProvider(provider);
                // provider.injectResult(test.result);
                // provider.injectValidation(function (payload) {
                //     assert.equal(payload.jsonrpc, '2.0');
                //     assert.equal(payload.method, test.call);
                //     assert.deepEqual(payload.params, []);
                // });

                // // when 
                // const result = web3.eth[method];
                
                // // then
                // assert.strictEqual(test.formattedResult, result);
            });
            
            it('async get property test: ' + index, function (done) {
                
                // given
                const provider = new FakeHttpProvider();
                web3.setProvider(provider);
                provider.injectResult(test.result);
                provider.injectValidation(function (payload) {
                    assert.equal(payload.jsonrpc, '2.0');
                    assert.equal(payload.method, test.call);
                    assert.deepEqual(payload.params, []);
                });

                // when 
                web3.eth.getBlockNumber(function (err, result) {
                    assert.strictEqual(test.formattedResult, result);
                    done();
                });
                
            });
        });
    });
});
