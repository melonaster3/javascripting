const assert = require('chai').assert; 
const breedDetails = require('../syncBreeds');

describe('#breedDetails', () => {
  it('Returns breed details for Bombay breed', () => {
    const expected =  "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.";
    
    const bombay = breedDetails('Bombay');

    assert.equal(expected, bombay);
  })

  it('Returns breed details for Balinese breed', () => {
    const expected = "Curious, outgoing, intelligent cats with good communication skills";
    
    const balinese = breedDetails('Balinese');

    assert.equal(expected, balinese);
  })

})