(function () {

    "use strict";

    angular.module('frontmovies', ['ngResource'])
        .factory('popularMovies', function ($resource) {

            return $resource('/popular/:movieId', {movieId: '@id'},
                {
                    'update': { method:'PUT' }
                });

        });


}());