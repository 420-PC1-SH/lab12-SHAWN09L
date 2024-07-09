const processor = require('./processor.js');

describe("transmission processor", function() {

    test("takes a string returns an object", function(){
        let result = processor("9701::<489584872710>");
        expect(typeof result).toEqual("object");
    });

    test("throws error if '::' not found", function () {
        const expectedError = new Error('Data is invalid ; should contain "::"');
        expect(() => { processor("9701<489584872710>"); }).toThrow(expectedError);
    });

    test("returns id in object", function () {
        let result = processor("9701::<489584872710>");
        expect(result.id).not.toEqual(undefined);
    });

    test("id returned must be of type number", function () {
        let result = processor("9701::<489584872710>");
        expect(result.id).toEqual(parseInt(result.id));
    })

    test("returns rawdata in object", function () {
        let result = processor("9701::<489584872710>");
        expect(result.rawcode).not.toEqual(undefined);
    })
    
    

});
