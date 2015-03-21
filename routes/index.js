var express = require('express');
var router = express.Router();
var app = express();

var FitbitApiClient = require("fitbit-node"),
    client = new FitbitApiClient("e8179d335c7b43218fb57fee60b9efe7", "93c142ada6d342e79bf6e1a2bba3c351");

var requestTokenSecrets = {};

var request = require('request');

router.get("/", function (req, res, next) {
    var dataUrl = req.protocol + '://' + req.get('host')+"/api/data";
    console.log(dataUrl);
    var total = 0;
    var count = 0;
    var min = 500;
    var max = 0;
    var max_diff = 0;
    var attack = false;

    request.get(dataUrl).on('data',function(body) {
        var json = JSON.parse(body);
        for(var i=0;i < json.length-1;i++){
            var lastvalue = json[i].value;
            total = total + lastvalue;
            count ++;
            if(min >= lastvalue){
                min = lastvalue;
            }
            if(max <= lastvalue){
                max = lastvalue
            }
        }
        var avg = Math.round(total/count);

        if((avg + (avg/2)) < json[json.length-1].value){
            attack = true;
        }
        res.render('index', { title: 'home', avg: avg, max:max,attack:attack });
        //res.end();
        if(attack){
            var pushUrl = req.protocol + '://compuplex.nl:10030/send';
            request(
                {
                    method:'POST',
                    url:pushUrl,
                    json:true,
                    body:{
                        "users": ["Android_Demo"],
                        "android": {
                            "collapseKey": "optional",
                            "data": {
                                "message": "PANIEK! U HEEFT EEN AANVAL"
                            }
                        }
                    }
                },
            function(){

            });
        }
    });
});

router.get("/authorize", function (req, res, next) {
    client.getRequestToken().then(function (results) {
        var token = results[0],
            secret = results[1];
        requestTokenSecrets[token] = secret;
        res.redirect("http://www.fitbit.com/oauth/authorize?oauth_token=" + token);
    }, function (error) {
        res.send(error);
    });
});

router.get("/login/callback", function (req, res, next) {
    var token = req.query.oauth_token;
    var secret = requestTokenSecrets[token];
    var verifier = req.query.oauth_verifier;
    client.getAccessToken(token, secret, verifier).then(function (results) {
        var accessToken = results[0];
        var accessTokenSecret = results[1];
        var userId = results[2].encoded_user_id;

        return client.requestResource("/profile.json", "GET", accessToken, accessTokenSecret).then(function (results) {
            var response = results[0];
            res.send(response);
        });

    }, function (error) {
        res.send(error);
    });
});


module.exports = router;
