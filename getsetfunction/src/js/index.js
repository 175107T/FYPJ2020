web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
var account;
web3.eth.getAccounts().then((f) => {
    account = f[0];
})

const fs = require('fs');
const contract = JSON.parse(fs.readFileSync('./build/Contracts/GetSetMessage.json', 'utf8'));
console.log(JSON.stringify(contract.abi));

abi = JSON.stringify(contract.abi);

contract = new web3.eth.Contract(abi);
contract.options.address = "0xe39cB4F21560713C82De107E53c80F116CCcAfF3";
// update this contract address with your contract address
}