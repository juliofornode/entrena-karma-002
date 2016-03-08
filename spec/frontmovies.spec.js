describe('frontmovies', function () {

    var popularMovies;
    var $httpBackend;

    beforeEach(module('frontmovies'));

    beforeEach(inject(function (_popularMovies_, _$httpBackend_) {
        popularMovies = _popularMovies_;
        $httpBackend = _$httpBackend_;
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
    });

    it('should create a new popular movie', function () {

        var expectedData = function (data) {
            console.log(angular.mock.dump(data));
            return true;
        };


        $httpBackend.expectPOST(/./, expectedData)
            .respond(201);


        var newMovie = new popularMovies({
            movieId: "tt0076759",
            description: "Great movie!"
        });

        newMovie.$save();

        expect($httpBackend.flush).not.toThrow();

    })



});