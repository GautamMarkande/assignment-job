import React, { useEffect, useState } from 'react'
import { useGetCurrListlatestQuery ,useGetCurrListRateOnspecificDateQuery} from '../../redux/currencyReducer'
// import Card from '../commom/card/Card'
import '../pages/CurrRates.css'
import CurrRateCard from '../commom/card/CurrRateCard'
// import { HandleChangeDate } from '../../functions/FetchRateOnDate'
function CurrRates() {
  const { data: latestRates } = useGetCurrListlatestQuery()
  console.log(latestRates)
  const [data, setdata] = useState([])
  const currdate = new Date()
  const [date,setdate] = useState(`${currdate.getFullYear()}-${currdate.getMonth()}-${currdate.getDate()}`)
  const {data:latestRatesOnDate,refetch} = useGetCurrListRateOnspecificDateQuery(date)
  useEffect(() => {
    const arr = [];
    for (let key in latestRates?.rates) {
      const body = {
        id: key,
        rate: latestRates?.rates[key]
      }
      arr.push(body)
    }
    setdata(arr)
  }, [latestRates?.rates])
  // console.log(data)
  const handleChangeDate=(e)=>{
    console.log(e.target.value)
    setdate(e.target.value)
    refetch(date)
    // const arr = [];
    for (let key in latestRatesOnDate?.rates) {
      const body = {
        id: key,
        rate: latestRatesOnDate?.rates[key]
      }
      // arr.push(body)
      setdata([...data,body])
    }
    
    console.log(data)
   }
  return (
    <div>
      <div className='RateContainerMain'>
      <span>get historical rates for a specific day</span>
        <input type="date" name="rate" id="rate" className='date' onChange={(e)=>handleChangeDate(e)}/>
      </div>
      <div className='RateContainer'>
      {  console.log(data)}
        {
        
          data?.map((item,i) => (
            <CurrRateCard id={item.id} rate={item.rate} key={i} />
          ))
        }
      </div>
    </div>
  )
}

export default CurrRates
