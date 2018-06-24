<script src="../dist/nebPay.js"></script>
<script>
    var NebPay = require("nebpay");
    var nebPay = new NebPay();    
    var serialNumber;
    var options = {
        goods: {        //commodity description
            name: "example"
        },
        callback: NebPay.config.testnetUrl,   //tx result query server address
        listener: undefined //specify a listener function for browser extension, which will handle the tx result
    }
    serialNumber = nebPay.pay(to, value, options); //a serialNumber will be returned when calling the NebPay API, then you can query the tx result with this SerialNumber
</script>
