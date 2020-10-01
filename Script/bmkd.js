/*
http-response ^http:\/\/line\.aixuansm\.com\/user\/get_user requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Cheeryaaa/ToDo/master/Script/bmkd.js,tag=斑马快读
*/

var obj = JSON.parse($response.body);

obj = {
  "userinfo": {
    "userid": "1f01e7da-f7ed-4cae-8506-a796a4448ac2",
    "nickname": null,
    "image": "",
    "email": null,
    "sex": 0,
    "username": "q125996",
    "promocode": "8B9JAJ",
    "maxbookcasecount": 150,
    "promotionusercount": 50,
    "signcount": 0,
    "signtime": 0,
    "experience": 8250,
    "level": 7,
    "maxexperience": 10000,
    "extendlevel": 6
  },
  "success": 1,
  "msg": "",
  "code": ""
}

$done({body: JSON.stringify(obj)});