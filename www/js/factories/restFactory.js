angular.module('factories').factory('restFactory', ['$http', '$q', function ($http, $q) {

    var getAllAccountInfos = function () {
        var deferred = $q.defer();

        $http.get('/data/accounts.json').then(function (data) {
            deferred.resolve(data.data);
        }, function (ex) {
            deferred.reject(ex);
        });

        return deferred.promise;
    };

    var getAccountInfoFromData = function (username, data) {
        for (var i = 0; i < data.length; i++) {
            if (data[i].accountName === username) {
                return data[i];
            }
        }

        return undefined;
    };

    var getAccountInfo = function (username) {
        var deferred = $q.defer();

        this.getAllAccountInfos().then(function (data) {

            var parsedData = angular.fromJson(data);

            var foundAccount = this.getAccountInfoFromData(username, parsedData);
            if (foundAccount === undefined) {
                deferred.reject("Non existing username");
            }
            else {
                deferred.resolve(foundAccount);
            }

        });

        return deferred.promise;
    };

    var getFriendsInfos = function (username) {
        var deferred = $q.defer();
        var infos = [];

        this.getAccountInfo(username).then(function (data) {

            var friends = data.friends;

            this.getAllAccountInfos().then(function (allAccounts) {
                for (var j = 0; j < friends.length; j++) {
                    var friendId = friends[j].id;

                    for (var k = 0; k < allAccounts.length; k++) {
                        var entry = allAccounts[k];
                        if (entry.id === friendId) {
                            infos.push(entry);
                        }
                    }
                }
            });

            deferred.resolve(infos);

        }, function (data) {
            deferred.reject(data);
        });

        return deferred.promise;
    };

    return {
        getAccountInfo: getAccountInfo,
        getFriendsInfos: getFriendsInfos,
        getAllAccountInfos: getAllAccountInfos,
        getAccountInfoFromData: getAccountInfoFromData
    }
}]);