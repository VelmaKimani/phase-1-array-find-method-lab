function superbowlWin(record){
    for(let win of record){
      if(win.result === "W"){
        return win.year;
      }
      else if(win.result === "L"){
        return win.year;
      }
    }
    // if(record.year === 2015){
    //     return record;
    // } 
}
record.find(superbowlWin);