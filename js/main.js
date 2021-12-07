'use strict'



var gNumAmount
var gNums
var gCount


function gameInit(num) {
    gCount = 1;
    gNumAmount = num;
    gNums = [];
    createNumbers(num)
    renderBoard(num)

}



function createNumbers(num) {
    var nums = [];

    for (var i = 1; i <= num; i++) {
        nums.push(i)
    }
    shuffle(nums);
    gNums = nums;

}





function renderBoard(num) {
    var numOfLoops = Math.sqrt(num);
    var strHTML = '';

    for (var i = 0; i < numOfLoops; i++) {
        strHTML += '<tr>'
        for (var j = 0; j < numOfLoops; j++) {
            var numInTd = gNums.pop()

            strHTML += `                                                                    
            <td onclick="cellClicked(this)"  > 
            ${numInTd}
            </td>
            `
        }
        strHTML += '</tr>'
    }

    var elBoard = document.querySelector('.board');
    elBoard.innerHTML = strHTML;
}






function cellClicked(clickedNum) {

    var elClickedNum = +clickedNum.innerText;

    if (elClickedNum === gCount) { // Timer should go here that way it will start ONLY when i press 1 and later if you repress 1 nothing will change
        clickedNum.style.backgroundColor = 'gray';
        clickedNum.style.color = 'white';
        if (gCount === gNumAmount)return victory();
        gCount++;

    }


}




function victory() {
    console.log('VICTORY!');
    var elVic = document.querySelector('.victory');
    elVic.style.display = 'block';

}


function resetGame(elResBtn) {
elResBtn.parentElement.style.display = 'none';
console.log('elResBtn.parentElement:', elResBtn.parentElement);


    gameInit(gNumAmount)


}




//_______________________________________________util function 



function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min; //INCLUSIVE
}




function shuffle(numsToShuffle) {
    numsToShuffle.sort(() => Math.random() - 0.5);

}