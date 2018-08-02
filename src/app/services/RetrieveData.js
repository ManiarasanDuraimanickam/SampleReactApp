const paceActualizationHost="http://localhost:8080";
const actualizationDashboardOperation="/report/dashboard";
function retrieveBydate(startDate,endDate){
 let startDt=new Date(startDate);
 let endDt=new Date(endDate);
 let strStartDate=startDt.getMonth()+1+"/"+startDt.getDate()+"/"+startDt.getFullYear();
 let strEndDate=endDt.getMonth()+1+"/"+endDt.getDate()+"/"+endDt.getFullYear();
fetch(paceActualizationHost+actualizationDashboardOperation+"?startDate="+strStartDate+"&endDate="+strEndDate
    /*,{
    method:'GET',
    headers:{Accept: 'application/json',
    'Content-Type': 'application/json'},
    body:JSON.stringify({
      'startDate':startDt.getMonth()+1+"/"+startDt.getDate()+"/"+startDt.getFullYear(),
      'endDate'  :endDt.getMonth()+1+"/"+endDt.getDate()+"/"+endDt.getFullYear()
    })
}*/)
.then(result=>result.json())
.then(resp=>{
    console.log(resp);
});
console.log(startDt.getDate()+"  "+endDt.getDate());
return "";
}
module.exports={
dataRetieveByDate:  retrieveBydate
} 