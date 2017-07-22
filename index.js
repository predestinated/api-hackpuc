const request = require('request');
request({
    'url': 'https://apisandbox.cieloecommerce.cielo.com.br/1/sales/', //URL to hit
    'method': 'POST',
    'headers': {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "MerchantId": "312d414f-878b-4a6e-874b-b655f1badcc3",
        "MerchantKey": "WJAKMEEKMGHDNRSBFREFZPFMADOPUNUMVFRPUZAV",
    },
    //Lets post the following key/values as form
    'json': {
        "MerchantOrderId": "2014111703",
        "Customer": {
            "Name": "Comprador crédito simples"
        },
        "Payment": {
            "Type": "CreditCard",
            "Amount": 100,
            "Installments": 1,
            "SoftDescriptor": "123456789ABCD",
            "CreditCard": {
                "CardNumber": "0000.0000.0000.0001",
                "Holder": "Teste Holder",
                "ExpirationDate": "12/2030",
                "SecurityCode": "123",
                "SaveCard": "true",
                "Brand": "Visa"
            }
        }
    }
}, function (error, response, body) {
    if (error) {
        console.log(error);
    } else {
        console.log(response.statusCode, body);
    }
    res.status(200).send("this is a test");
});