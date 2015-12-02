var chai = require('chai'),
    expect = chai.expect;

chai.should();


module.exports = function () {
    
    // You should write a function stringChunk that takes a string and a positive integer n, splits the string into parts of n length and returns them in an array. It is ok for the last element to have less characters than n. If n is not a valid size(> 0) (or is absent), you should return an empty array. If n is greater than the lenght of the string, you should return an array with the only element being the same string.
    
    
    function stringChunkLoop(str, n) {

        if (!n || n < 0) return [];
        var sliceTimes = Math.ceil(str.length / n), arr = [];
        for (var i = 0, j = 0; i < sliceTimes; i += 1, j += n) {
            arr.push(str.slice(j, j + n));
        }
        return arr;
    }


    function stringChunk(str, n) {

        if (!n || n < 0) return [];
        if (str.length <= n) return [str];
        return [].concat(str.slice(0, n), stringChunk(str.slice(n), n));
    }


    describe('function stringChunk', function () {
        it('should return empty array when n < 1', function () {
            expect(stringChunk('test', 0)).to.eql([]);
            expect(stringChunk('test', -1)).to.eql([]);
        });
        it('should return empty array when n absent', function () {
            expect(stringChunk('test')).to.eql([]);
        });
        it('should split the string in groups of length n or less', function () {
            expect(stringChunk('test', 1)).to.eql(['t', 'e', 's', 't']);
            expect(stringChunk('test', 2)).to.eql(['te', 'st']);
            expect(stringChunk('test', 3)).to.eql(['tes', 't']);
            expect(stringChunk('a test', 2)).to.eql(['a ', 'te', 'st']);
            expect(stringChunk('a test', 20)).to.eql(['a test']);
        });
    });

    
    
    // An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
    

    function isIsogram(str) {
        
        var splitStr = str.toLowerCase().split('');
        if (splitStr.length === 0) return true;
        if (splitStr.slice(1).indexOf(splitStr[0]) !== -1) return false;
        return isIsogram(str.slice(1));
    }


    describe('function isIsogram', function () {
        it('should return true for the empty string', function () {
            expect(isIsogram('')).to.be.true;
        });
        it('should return true if isogram', function () {
            expect(isIsogram('aeiou')).to.equal(true);
        });
        it('should return false if not isogram', function () {
            expect(isIsogram('aeioAu')).to.equal(false);
        });
    });

};