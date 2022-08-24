require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'heavy kiwi brand venture strong crawl random clump include argue metal gesture'; 
let testAccounts = [
"0x651f8b50bb10cea9e595f51fbbe6ae9c5475f3b6931e2de85cba2ccc91724a1e",
"0x0cee2e1ce545319ab4f7977dfc11ff2675b4bd2e57aa7681a9c6d16676cd811b",
"0xc6d32cae31c6b18877147edeed9b3e235a1fea0eb5527219269ba802ae21614d",
"0x22cebff576101984dd6ffa3c642263ca7a3dde8299fd81f99037f1220d89c6ab",
"0x8c253027897f71f884b3c1bd814eb4fc05b05f8c04ff4a1f21798e9ec4f3caf5",
"0xe97983097d0629027cbafbe64ab5fa1b63711301a08a3982665479bae9e79930",
"0xa9041f079dd6c0936f57698ab2c6fc42da8a73ca191167d32f2672db820f10ff",
"0xf2b3fca392281e762a81221db30c30c8c7f9902b1bfb6f52ae08369b9607ba5a",
"0x340a79ee20a9efe586fc10847cf6777ae27025472abcc9b9c25359778cc5c43f",
"0xdf91a05edd0a8fa49f567908dbbd7084fa17059835a95cfae6b7428deb8d08c2"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


