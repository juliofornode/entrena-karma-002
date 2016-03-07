describe('omdb service', function () {

    var movieData = '{"Title":"Star Wars","Year":"1983","Rated":"N/A","Released":"01 May 1983","Runtime":"N/A","Genre":"Action, Adventure, Sci-Fi","Director":"N/A","Writer":"N/A","Actors":"Harrison Ford, Alec Guinness, Mark Hamill, James Earl Jones","Plot":"N/A","Language":"English","Country":"USA","Awards":"N/A","Poster":"N/A","Metascore":"N/A","imdbRating":"7.8","imdbVotes":"349","imdbID":"tt0251413","Type":"game","Response":"True"}';

    it('should return the search result', function () {

        var omdbService = {};

        angular.mock.module({
            'omdbService': {
                search: function (query) {
                    return movieData;
                }
            }
        });

        angular.mock.inject(function(_omdbService_) {
            omdbService = _omdbService_;
        });

        expect(omdbService.search('Star Wars')).toEqual(movieData);

    })


});