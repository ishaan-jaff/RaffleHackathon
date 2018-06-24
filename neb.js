 var api = new Neb().api;

var chainID = 
var from = 


 var tx = new Transaction({
   chainID: 1,
   from: acc,
   to: "n1SAeQRVn33bamxN4ehWUT7JGdxipwn8b17",
   value: 10,
   nonce: 12,
   gasPrice: 1000000,
   gasLimit: 2000000,
   contract: {
       function: "save",
       args: "[0]"
   
});
tx.signTransaction();
