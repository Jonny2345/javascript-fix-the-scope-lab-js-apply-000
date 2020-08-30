var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  var animal = 'cat';
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

function add2(n) {
  // Feel free to move things around!
  const two = 2
  return n + two
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}
describe('theFunk', function() {
    it('is "FUNKY!"', function() {
      expect(window.theFunk).toEqual('FUNKY!')
    })
  })

  var funkyFunction = function() {
    return function(){
      return "FUNKY!"
    }
  }

  var theFunk = funkyFunction()()





