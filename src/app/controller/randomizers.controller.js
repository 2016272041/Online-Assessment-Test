var app = app;
var express = app;
app.controller('safeCtrl', ['$scope', function ($scope) {
    var userid = userid[number];
    var name = name[string];
    var username = username[string];
    var email = email [string];
    var testsid = testsid[number];
    var questions = questions[string];

    function generateRandomItem(userid) {
        var userid = userid[Math.floor(Math.random() * 3)];
        var name = name[Math.floor(Math.random() * 3)];
        var username = username[Math.floor(Math.random() * 3)];
        var email = email[Math.floor(Math.random() * 3)];
        var testsid = testsid[Math.floor(Math.random() * 3)];
        var questions = questions[Math.floor(Math.random() *3)]

        return {
            userid: userid,
            name: name,
            username: username,
            email: email,
            testsid: testsid,
            questions: questions
        }
    }

    $scope.rowCollection = [];

    for (userid; userid < 100; userid++) {
        $scope.rowCollection.push(generateRandomItem(userid));
    }

    //add to the real data holder
    $scope.addRandomItem = function addRandomItem() {
        $scope.rowCollection.push(generateRandomItem(userid));
        userid++;
    };

    //remove to the real data holder
    $scope.removeItem = function removeItem(row) {
        var index = $scope.rowCollection.indexOf(row);
        if(index !== -1) {
            $scope.rowCollection.splice(index, 1);
        }
    }
}]);