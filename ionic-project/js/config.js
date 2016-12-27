/**
 * Created by chris on 2016/12/23.
 */
angular.module('myapp.config', [])
.constant('G', {
    'api': 'http://www.phonegap100.com/appapi.php', 
    'siteurl': 'http://www.phonegap100.com', 
    'imgUrl': 'http://www.phonegap100.com/data/attachment/'
})

//登录的接口: http://www.phonegap100.com/appapi.php?a=login2
//是post请求
// 帐号
// account: 'chrishu', password: 'a123456789'