const request = require('request');
var cors = require('cors')
const app = require('express')();
app.use(cors())
app.options('*', cors());
var bodyParser = require('body-parser');

const environment = {
    production: false,
    cielo: {
        RequestAPI: 'https://apisandbox.cieloecommerce.cielo.com.br',
        QueryAPI: 'https://apiquerysandbox.cieloecommerce.cielo.com.br',
        MerchantId: '312d414f-878b-4a6e-874b-b655f1badcc3',
        MerchantKey: 'WJAKMEEKMGHDNRSBFREFZPFMADOPUNUMVFRPUZAV',
    }
};

let options = {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "MerchantId": environment.cielo.MerchantId,
        "MerchantKey": environment.cielo.MerchantKey
    }
}

app.use(bodyParser.json());

app.post('/pay', (req, res) => {
    request({
        "url": `${environment.cielo.RequestAPI}/1/sales/`,
        "method": 'POST',
        "headers": options.headers,
        "json": req.body,
    }, (error, response, body) => {
        res.json(response)
    })
})

app.get('/pay/:id', (req, res) => {
    request({
        "url": `${environment.cielo.QueryAPI}/1/sales/${req.params.id}`,
        "method": "GET",
        "headers": options.headers,
    }, (error, response, body) => {
        res.json(response)
    })
})

app.put('/pay/:id/:amount', (req, res) => {
    request({
        "url": `${environment.cielo.RequestAPI}/1/sales/${req.params.id}/void?amount=${req.params.amount}`,
        "method": "PUT",
        "headers": options.headers,
    }, (error, response, body) => {
        res.json(response)
    })
})



app.listen(process.env.PORT || 3000);
