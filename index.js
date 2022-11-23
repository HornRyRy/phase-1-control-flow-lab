function scuberGreetingForFeet(rideDist){
  if (rideDist <= 400){
    return 'This one is on me!'
  }

  else if(rideDist > 400 && rideDist <= 2000){
    return 'That will be twenty bucks.'
  }

  else if(rideDist > 2000 && rideDist <= 2500){
    return 'I will gladly take your thirty bucks.'
  }

  else if(rideDist > 2500){
    return 'No can do.'
  }

  else{
    return 'You are out of bounds, buddy. Not a valid input'
  }
}

function ternaryCheckCity(destIsNyc){
  return (destIsNyc === 'NYC' ? 'Ok, sounds good.' : 'No go.') 
}

function switchOnCharmFromTip(tipIsGenerous){
  if(tipIsGenerous === 'generous'){
    return "Thank you so much."
  }

  else if(tipIsGenerous === 'not as generous'){
    return 'Thank you.'
  }

  else if(tipIsGenerous === 'LOTR'){
    return 'Not all those who wander are lost'
  }

  else{
    return 'Bye.'
  }
}

//Tests shown below as REFERENCE
// describe('switchOnCharmFromTip()', function () {
//   it('should return "Thank you so much." if the tip is generous', function () {
//     expect(switchOnCharmFromTip('generous')).to.equal('Thank you so much.');
//   });

//   it('should return "Thank you." if the tip is not as generous', function () {
//     expect(switchOnCharmFromTip('not as generous')).to.equal('Thank you.');
//   });

//   it('should return "Bye." if anything else', function () {
//     expect(switchOnCharmFromTip('thanks for everything')).to.equal('Bye.');
//   });
// });
// });