describe('omdb service', function () {

    var omdbService = {};
    var movieData = {"Title":"Star Wars","Year":"1983","Rated":"N/A","Released":"01 May 1983","Runtime":"N/A","Genre":"Action, Adventure, Sci-Fi","Director":"N/A","Writer":"N/A","Actors":"Harrison Ford, Alec Guinness, Mark Hamill, James Earl Jones","Plot":"N/A","Language":"English","Country":"USA","Awards":"N/A","Poster":"N/A","Metascore":"N/A","imdbRating":"7.8","imdbVotes":"349","imdbID":"tt0251413","Type":"game","Response":"True"};
    var movieDataById = {"Title":"Star Wars","Year":"1983","Rated":"N/A","Released":"01 May 1983","Runtime":"N/A","Genre":"Action, Adventure, Sci-Fi","Director":"N/A","Writer":"N/A","Actors":"Harrison Ford, Alec Guinness, Mark Hamill, James Earl Jones","Plot":"N/A","Language":"English","Country":"USA","Awards":"N/A","Poster":"N/A","Metascore":"N/A","imdbRating":"7.8","imdbVotes":"349","imdbID":"tt0251413","Type":"game","Response":"True"};
    var $httpBackend;

    beforeEach(module('omdb'));

    beforeEach(inject(function(_omdbService_, _$httpBackend_) {
        omdbService = _omdbService_;
        $httpBackend = _$httpBackend_;
    }));

    it('should return the search result', function () {
        //console.log(angular.mock.dump(movieData));
        var response;

        $httpBackend.when('GET', 'http://www.omdbapi.com/?v=1&s=Star%20Wars')
            .respond(200, movieData);

        omdbService.search('Star Wars')
            .then(function (data) {
                response = data;
            });

        $httpBackend.flush();

        expect(response).toEqual(movieData);
    });

    it('should return the searchById result', function () {
        var response;

        $httpBackend.when('GET', 'http://www.omdbapi.com/?v=1&i=tt0251413')
            .respond(200, movieDataById);

        omdbService.searchById('tt0251413')
            .then(function (data) {
                response = data;
            });

        $httpBackend.flush();

        expect(response).toEqual(movieDataById);
    });

});