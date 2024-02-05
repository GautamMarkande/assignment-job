// import { useGetCurrListRateOnspecificDateQuery } from "../redux/currencyReducer"

// export const HandleChangeDate=(e,setdata)=>{
//  console.log(e.target.value)
//  const {data:latestRates} = useGetCurrListRateOnspecificDateQuery(e.target.value)
//  const arr = [];
//  for (let key in latestRates?.rates) {
//    const body = {
//      id: key,
//      rate: latestRates?.rates[key]
//    }
//    arr.push(body)
//  }
//  setdata(arr)
// }