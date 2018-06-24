<script src="https://cdn.jsdelivr.net/npm/nebulas@0.5.2/dist/nebulas.js"></script>
var api = new Neb().api;

//var height = GetNebState
var privKey = account.getPrivateKeyString()


 var tx = new Transaction({
   chainID: 1001,
   from: "n1L16M2LHFoLNQDodeU3njuZdoHvAHVU1qL",
   to: "n1wPkYfT4kpi5VXrgZdpEtkrpRtZhEiNCMo",
   value: 0,
   nonce: 12,
   gasPrice: 1000000,
   gasLimit: 2000000,
   contract: {
       function: "getBalance",
       args: "[0]"

});
tx.signTransaction();
