

var names = ['@thenevaehxys', '@haleyspeaksthetruth', '@itsjaebaby_', '@brookiesgrwmspt', '@bandbabyliah2', '@notorfvrhpo', '@kevkevlash', '@lituwalyvicky', '@avawavuh', '@zipporahdae', '@savanaoo4', '@inahologramwithyou', '@luhsshae', '@estiee.3', '@xoxo.sanaak', '@li.kaylaazani', '@filesofjb', '@thepnkprlnt', '@liannasdraftss', '@onyinyetheestallion', '@ceekenziee', '@fiboonachi', '@real.liv777', '@rubinaaluvs'];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ,17, 19, 20, 21, 22];


function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}


function updateDisplay() {
    var displayElement = document.getElementById('randomDisplay');
    var randomName = getRandomItem(names);
    var randomNumber = getRandomItem(numbers);
    displayElement.textContent = randomName + ' has just claimed their code! ' + randomNumber + ' more person is still waiting...';
    
   
    var randomDelay = Math.floor(Math.random() * 4000) + 5000; 
    setTimeout(updateDisplay, randomDelay);
}


updateDisplay();
