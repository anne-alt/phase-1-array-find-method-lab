// code your solution here
function superbowlWin(record) {
const win =record.find( item => item.result === "W") 
    if (!!win === true) {
   console.log (win.year);   
   return win.year;
    }
}
