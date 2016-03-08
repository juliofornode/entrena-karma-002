(function () {

    "use strict";

    angular.module('omdb', ['frontmovies'])
        .factory('omdbService', function ($http, $q) {

            var movieData = {"Title":"Star Wars","Year":"1983","Rated":"N/A","Released":"01 May 1983","Runtime":"N/A","Genre":"Action, Adventure, Sci-Fi","Director":"N/A","Writer":"N/A","Actors":"Harrison Ford, Alec Guinness, Mark Hamill, James Earl Jones","Plot":"N/A","Language":"English","Country":"USA","Awards":"N/A","Poster":"N/A","Metascore":"N/A","imdbRating":"7.8","imdbVotes":"349","imdbID":"tt0251413","Type":"game","Response":"True"};
            var movieDataById = {"Title":"Star Wars","Year":"1983","Rated":"N/A","Released":"01 May 1983","Runtime":"N/A","Genre":"Action, Adventure, Sci-Fi","Director":"N/A","Writer":"N/A","Actors":"Harrison Ford, Alec Guinness, Mark Hamill, James Earl Jones","Plot":"N/A","Language":"English","Country":"USA","Awards":"N/A","Poster":"N/A","Metascore":"N/A","imdbRating":"7.8","imdbVotes":"349","imdbID":"tt0251413","Type":"game","Response":"True"};
            var baseUrl = 'http://www.omdbapi.com/?v=1&';

            return {
                search: function (query) {
                    var myPromise = $q.defer();
                    $http.get(baseUrl + 's=' + encodeURIComponent(query))
                        .success(function (data) {
                            myPromise.resolve(data);
                        });
                    return myPromise.promise;
                },

                searchById: function (id) {
                    var myPromise = $q.defer();
                    $http.get(baseUrl + 'i=' + id)
                        .success(function (data) {
                            myPromise.resolve(data);
                        });
                    return myPromise.promise;
                }
            }
        });


}());