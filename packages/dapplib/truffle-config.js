require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture infant forget seed edge rare remain evil install derive swap snow'; 
let testAccounts = [
"0x3f61889fa6248d394f846c059a744b5b56a2a5b9e73aa23d1be80030cf3f5fff",
"0x364d97b156a7fbc378c454aa05f7f43a48dcc01e0de8fc0b17b2e4059e3cb755",
"0x1130a1f1a32d63f6f6f562dea527c9f251ef17275c6b4cc3f7f297ffaa4ff12e",
"0xb6da9d6b6e9663629e814fc30d872f24dd213a1e119e3f9a4968950054db257f",
"0xc0cb5350942771de56428b7ba351f34f21c60dc94ad8704db7bec39d728a9e39",
"0xfc56df1537f5981455da736eee2c991eefc615ff2b414714847b59f248a08c47",
"0xb73606f312081a5a5b1ce67ac6f6e289455080989ed80fa4f75d1e5648e43beb",
"0x62e3d395e4598279872e033fc4a2767a790bce61d538abd959ec6531b227533a",
"0x16200cedf3f068ea0ddb587a8bbe232028a9968db3547dde4fcd3e491ab76f71",
"0x7958492a0cc0cf27e957645ef13be25dd54ba3eb0200b61e25ce253634a51164"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

