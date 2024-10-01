// code your solution he 
const record = [{ year: '2015', team: 'Denver Broncos', result: 'W' },]



function superbowlWin(record) {
    
    const winRecord = record.find(match => match.result === 'W');
     return winRecord ? winRecord.year : undefined
  
}



