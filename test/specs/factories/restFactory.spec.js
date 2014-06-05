describe('Tests for the restFactory', function() {

//    var factory;
    var $httpbackend;
    beforeEach(module('factories'));
    beforeEach(inject(function($httpBackend) {
        $httpbackend = $httpBackend;
        $httpbackend.when('GET', '/data/accounts.json').respond([
            {
                "id": 0,
                "accountName": "gngeorgiev",
                "photo": "https://g.twimg.com/business/page/image/11TwitterForSmallBusiness-300_1.png",
                "friends": [
                    {
                        "id":1
                    },
                    {
                        "id":2
                    },
                    {
                        "id":3
                    },
                    {
                        "id":4
                    },
                    {
                        "id":5
                    }
                ]
            },
            {
                "id": 1,
                "accountName": "gaco",
                "photo": "https://g.twimg.com/business/page/image/11TwitterForSmallBusiness-300_1.png"
            },
            {
                "id": 2,
                "accountName": "gaco1",
                "photo": "https://g.twimg.com/business/page/image/11TwitterForSmallBusiness-300_1.png"
            },
            {
                "id": 3,
                "accountName": "gaco2",
                "photo": "https://g.twimg.com/business/page/image/11TwitterForSmallBusiness-300_1.png"
            },
            {
                "id": 4,
                "accountName": "gac3",
                "photo": "https://g.twimg.com/business/page/image/11TwitterForSmallBusiness-300_1.png"
            },
            {
                "id": 5,
                "accountName": "gaco4",
                "photo": "https://g.twimg.com/business/page/image/11TwitterForSmallBusiness-300_1.png"
            }
        ]);
    }));

    afterEach(function() {
        $httpbackend.verifyNoOutstandingExpectation();
        $httpbackend.verifyNoOutstandingRequest();
    });

    it('Should pull one account', inject(['restFactory', function(restFactory) {

        var resolvedData;
        restFactory.getAccountInfo('gngeorgiev').then(function(data) {
            resolvedData = data;
        });

        $httpbackend.flush();

        expect(resolvedData).toBeDefined();
        expect(resolvedData.accountName).toEqual('gngeorgiev');
        expect(resolvedData.friends.length).toEqual(5);

    }]));

    it('Should get 5 accounts', inject(['restFactory', function(restFactory) {

        var resolvedData;
        restFactory.getFriendsInfos('gngeorgiev').then(function(data) {
            resolvedData = data;
        });

        $httpbackend.flush();

        expect(resolvedData).toBeDefined();
        expect(resolvedData.length).toEqual(5);
        expect(resolvedData[0].accountName).toEqual('gaco');
        expect(resolvedData[1].accountName).toEqual('gaco1');

    }]));

});