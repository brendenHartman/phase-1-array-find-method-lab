
function isW(element){
    return (element.result === "W");
}
function superbowlWin(record) {
     if(record.find(isW)){
         const elem = record.find(isW);
         return elem["year"];
     }
     else {
        return record.find(isW);
     }
}