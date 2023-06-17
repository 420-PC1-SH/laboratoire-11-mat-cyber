const processor = require('./processor.js');

describe("transmission processor", function() {

    test("take a string and returns an object", function() {
        let result = processor("9701::<489584872710>");

        expect(typeof result).toEqual("object");
    });

    test("return -1 if '::' not found", function (){
        let result = processor("9701<489584872710>");
        expect(result).toEqual(-1);
    });

    test("returns id in object", function () {
        let result = processor("9701::<489584872710>");
        expect(result.id).not.toEqual(undefined);
    });

    test("id field must be of type Number", function () {
        let result = processor("9701::<489584872710>");
        expect(typeof result.id).toEqual("number");
    });

    test("returns rawData in object", function () {
        let result = processor("9701::<489584872710>");
        expect(result.rawData).not.toEqual(undefined);
    });

    test("returns -1 if rawData don't start and end with '<' and '>'", function() {
        let result = processor("9701::<489584872710");
        expect(result).toEqual(-1);
        result = processor("9701::489584872710>");
        expect(result).toEqual(-1);
    })
});