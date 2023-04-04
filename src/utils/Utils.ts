export const converTimeStamp = (timeStamp?: number) => {
    // console.log(timeStamp);
    
    // convert unix timestamp to milliseconds
    let ts_ms = timeStamp ? timeStamp*1 : new Date().getTime();
  
    // initialize new Date object
    let date_ob = new Date(ts_ms);
  
    // year as 4 digits (YYYY)
    let year = date_ob.getFullYear();
  
    // month as 2 digits (MM)
    let month = ('0' + (date_ob.getMonth() + 1)).slice(-2);
  
    // date as 2 digits (DD)
    let date = ('0' + date_ob.getDate()).slice(-2);
    let fullDateTime = date + '/' + month + '/' + year
  
    return fullDateTime;
  }