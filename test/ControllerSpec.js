/*describe("The myAppCtrl", function () {
    'use strict';

    beforeEach(module("myApp"));

    it("can be created", inject(function ($controller) {
        var scope = {};
        var ctrl = $controller("myAppCtrl", {
            $scope: scope
        });

        expect(ctrl).toBeDefined();
    }));
});
describe('myAppCtrl', function() {
        var scope, controller, httpBackend;
        var data = {
    "kind": "Listing",
    "data": {
        "modhash": "",
        "children": [{
            "kind": "t3",
            "data": {
                "domain": "theguardian.com",
                "banned_by": null,
                "media_embed": {},
                "subreddit": "worldnews",
                "selftext_html": null,
                "selftext": "",
                "likes": null,
                "suggested_sort": null,
                "user_reports": [],
                "secure_media": null,
                "link_flair_text": null,
                "id": "3ef7lv",
                "from_kind": null,
                "gilded": 0,
                "archived": false,
                "clicked": false,
                "report_reasons": null,
                "author": "anutensil",
                "media": null,
                "score": 4,
                "approved_by": null,
                "over_18": false,
                "hidden": false,
                "num_comments": 0,
                "thumbnail": "",
                "subreddit_id": "t5_2qh13",
                "edited": false,
                "link_flair_css_class": null,
                "author_flair_css_class": null,
                "downs": 0,
                "secure_media_embed": {},
                "saved": false,
                "removal_reason": null,
                "stickied": false,
                "from": null,
                "is_self": false,
                "from_id": null,
                "permalink": "/r/worldnews/comments/3ef7lv/beekilling_pesticides_quietly_permitted_by_the_uk/",
                "name": "t3_3ef7lv",
                "created": 1437752870.0,
                "url": "http://www.theguardian.com/environment/2015/jul/23/bee-killing-pesticides-quietly-permitted-by-the-uk-government",
                "author_flair_text": null,
                "title": "Bee-killing pesticides quietly permitted by the UK govt",
                "created_utc": 1437724070.0,
                "distinguished": null,
                "mod_reports": [],
                "visited": false,
                "num_reports": null,
                "ups": 4
            }
        }, {
            "kind": "t3",
            "data": {
                "domain": "m.sputniknews.com",
                "banned_by": null,
                "media_embed": {},
                "subreddit": "worldnews",
                "selftext_html": null,
                "selftext": "",
                "likes": null,
                "suggested_sort": null,
                "user_reports": [],
                "secure_media": null,
                "link_flair_text": "Ukraine/Russia",
                "id": "3ef6q4",
                "from_kind": null,
                "gilded": 0,
                "archived": false,
                "clicked": false,
                "report_reasons": null,
                "author": "dexter93",
                "media": null,
                "score": 0,
                "approved_by": null,
                "over_18": false,
                "hidden": false,
                "num_comments": 2,
                "thumbnail": "",
                "subreddit_id": "t5_2qh13",
                "edited": false,
                "link_flair_css_class": "ukrassia",
                "author_flair_css_class": null,
                "downs": 0,
                "secure_media_embed": {},
                "saved": false,
                "removal_reason": null,
                "stickied": false,
                "from": null,
                "is_self": false,
                "from_id": null,
                "permalink": "/r/worldnews/comments/3ef6q4/french_lawmakers_surprised_by_happy_citizens_in/",
                "name": "t3_3ef6q4",
                "created": 1437752114.0,
                "url": "http://m.sputniknews.com/russia/20150724/1024986748.html",
                "author_flair_text": null,
                "title": "French Lawmakers Surprised by \u2018Happy\u2019 Citizens in Crimea\u2019s Yalta / Sputnik International",
                "created_utc": 1437723314.0,
                "distinguished": null,
                "mod_reports": [],
                "visited": false,
                "num_reports": null,
                "ups": 0
            }

        }],
        "after": "t3_3eeqtg",
        "before": null
    }
}



    beforeEach(module('myApp'));
    beforeEach(inject(function($rootScope, $controller, $httpBackend,$compile) {
        scope = $rootScope;
        controller = $controller;
        httpBackend = $httpBackend;
        compile = $compile;
    }));
    xit("should populate the reddit data when the HTTP request succeeds", function () {
        httpBackend.when('GET','https://www.reddit.com/r/worldnews/new.json').respond(200,{data:data});

        controller('myAppCtrl', {'$scope': scope });
        //httpBackend.flush();
        scope.$apply();
  
    
        element = angular.element('<div my-data remoteurl="url" filter="test" order-by="sortExpression" order="order" ></div>');
       // scope = $rootScope.$new();
        compile(element)(scope); 
        scope.$digest(); 
 
        var isoScope = element.isolateScope();
 
        expect(isoScope.data.children).not.toBeNull();
    });

    xit('should populate the reddit data when the HTTP request succeeds', function(done) {

        httpBackend.when('GET','https://www.reddit.com/r/worldnews/new.json').respond(200,{data:data});

        controller('myAppCtrl', {'$scope': scope });
        //httpBackend.flush();
        scope.$apply();
           expect(scope.data.children).not.toBeNull();
           //expect(scope.data).toBeDefined();
           // expect(scope.data).toEqual(data);
    });
    xit("should not populate the  reddit data when the HTTP request fails", function () {

        httpBackend.when("GET", "https://www.reddit.com/r/worldnews/new.json").respond(404,{data:data});

        controller('myAppCtrl', {'$scope': scope });
        httpBackend.flush();
        scope.$apply();

        expect(scope.data).toBeUndefined();
    });
*/
    describe('unit testing directive', function() {
    var $compile,
        $rootScope;

    // Load the myApp module, which contains the directive
    beforeEach(module('myApp'));

    beforeEach(inject(function(_$compile_,_$rootScope_){
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('order style should be false in the beginning', function() {
        // Compile a piece of HTML containing the directive
        var element = $compile("<my-data></my-data>")($rootScope);

        $rootScope.$digest();
        // Check that the compiled element contains the templated content
        //expect(element.hasOwnProperty('order')).toBe(false);
      expect(element.html()).toContain('ul');
    });
});