/**
 * Created by chris on 2016/12/23.
 */
angular.module('myapp.controllers', [])
.controller('HotsController', function ($scope, G, HotFactory) {

    $scope.imgUrl = G.imgUrl;

    //利用服务发起http get请求
    HotFactory.getHot(20);

    //监听请求
    $scope.$on('hotUpdate', function () {
        $scope.hotsData = HotFactory.getHotsData();
        // console.log(hotsData);
    });

    $scope.onTitleSelect = function (idx, catid) {
        var btns = $('.hots-buttonbar a');
        $.each(btns, function (index, ele) {
            ele.className = 'button button-clear';
        });
        btns[idx].className = 'button button-clear button-select';
        //更新数据
        HotFactory.getHot(catid);
    }

})
.controller('HotsDetailController', function ($scope, $rootScope, $stateParams, HotsDetailFactory) {

    var aid = $stateParams.param;

    $rootScope.hideTabs = 'tabs-item-hide';
    //在网页加载完成之前,显示加载指示器
    $scope.showLoading = true;

    HotsDetailFactory.getHotsDetail(aid);
    $scope.$on('hotDetailUpdate', function () {
        $scope.hotsDetailData = HotsDetailFactory.getHotsDetailData();
        console.log($scope.hotsDetailData);
        //当数据加载完毕, 隐藏加载指示器
        $scope.showLoading = false;
    });

    //监听页面销毁事件
    $scope.$on('$destroy', function () {
        $rootScope.hideTabs = '';
    });

})

.controller('LoginController',function ($scope,$state,Storage,$ionicLoading,LoginFactory) {

    $scope.user ={
        username:'',
        password:''
    }

    $scope.signIn = function () {

        LoginFactory.login($scope.user.username,$scope.user.password);
        $scope.$on('loginUpdate', function () {
           var user = LoginFactory.getCurrentUser();
            if(user.success == false){
                $ionicLoading.show({
                   template:user.message,
                    duration:1500
                });
            }else{
               // 登录成功，将用户信息储存在本地
               Storage.set('user',$scope.user);
            //        返回前一页并刷新
                $state.go('tab.mine',{},{reload:true});
            }
        });
    }

})
.controller('MineController',function ($scope,Storage) {

    var storage = 'user';
    if(Stropge.get('storage')){
        $scope.userInfo = Storage.get(storage);
        // console.log($scope.userInfo);
        }
    })








