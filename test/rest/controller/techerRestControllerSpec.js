describe("teacherRestController", function(params) {
    var teacherModel = require('../../../src/rest/model/teacherModel');


    var teacherModelSpied = {
        echoMsg: jasmine.createSpy(),
        find: jasmine.createSpy(),
        findById: jasmine.createSpy(),
        save: jasmine.createSpy(),
        findByIdUpdateFullyThenSave: jasmine.createSpy(),
        findByIdUpdatePartiallyThenSave: jasmine.createSpy(),
        findByIdThenRemove: jasmine.createSpy(),
        findByIdInBodyThenRemove: jasmine.createSpy()
    };

    var teacherRestController = require('../../../src/rest/controller/studentRestController')(studentModelSpied);

    var request = { params: { id: 1 } };
    var response = {
        send: jasmine.createSpy(),
        status: jasmine.createSpy()
    };

    describe("GET /teachers/echo/:msg", function() {
        it('should call teacherModel.echoMsg function', function() {

        });
    });

    describe("GET /teachers", function() {
        it('teacherRestController.find should call studentModel.find function', function() {
            teacherRestController.find(request, response);
            expect(teacherModelSpied.find).toHaveBeenCalled();
        });
    });

});