/**
 * Created by chris on 2016/12/23.
 */

//ngResource 用来发起http请求
angular.module('myapp.service', ['ngResource'])
.factory('HotFactory', function ($resource, $rootScope, G) {

    var resource = $resource(G.api, {}, {
        query:{
            method: 'get',
            timeout: 20000
        }
    });

    var hotData = {};

    return {
        getHot: function (cat_id) {
            //异步请求
            resource.query({
                a: 'getPortalList',
                catid: cat_id,
                page: 1
            }, function (r) {
                hotData.data = r.result;
                // console.log(hotData.data);
                $rootScope.$broadcast('hotUpdate');
            })
        },
        getHotsData: function () {
            return hotData.data;
        }
    }
})
    // //社区
    // .factory('articlefactory',function ($resource,G,$rootScope) {
    //     var resource = $resource()
    // })

.factory('HotsDetailFactory', function ($resource, $rootScope, G) {

    var resource = $resource(G.api, {}, {
        query:{
            method: 'get',
            timeout: 20000
        }
    });

    var hotsDetailData = {};

    return {
        getHotsDetail: function (aid) {
            resource.query({
                a: 'getPortalArticle',
                aid: aid
            }, function (r) {
                // console.log(r.result[0].content);
                hotsDetailData.data = r.result[0].content;
                $rootScope.$broadcast('hotDetailUpdate');
            })
        },
        getHotsDetailData: function () {
            return hotsDetailData.data;
        }
    }

})
.factory('LoginFactory',function ($resource,$rootScope,G) {
    
    var resource = $resource(G.api + '?a=login2');
    
    return{
        login: function (username,password) {
            //post请求
            return resource.save({
                username:username,
                password:password
            },function (r){
                console.log(r.result.success);
                user = r.result;
                $rootScope.$broadcast('loginUpdate');
            });
        },
        getCurrentUser:function () {
            return user;
        }
    }
    
})
.factory('Storage',function () {
       
        return {
            set: function (key, data) {
                return window.localStorage.setItem(key, window.JSON.stringify(data));
            },
            get: function (key) {
                return window.JSON.parse(window.localStorage.getItem(key));
            },
            remove: function (key) {
                return window.localStorage.removeItem(key)
            }
        }
        
    })









