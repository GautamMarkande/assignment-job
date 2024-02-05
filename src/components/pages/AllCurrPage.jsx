import React from 'react'
import Card from '../commom/card/Card'
import { useGetCurrListSymbolsQuery } from '../../redux/currencyReducer'
import { useEffect,useState } from 'react'
import './AllCurrPage.css'
function AllCurrPage() {
    const {data:Currency} = useGetCurrListSymbolsQuery()
    console.log(Currency)
    const [data,setdata] = useState([]);
  
    useEffect(()=>{
        const arr = []
        for(let key in Currency?.symbols){
            const obj = {
                id:key,
                name:Currency?.symbols[key]
            }
            arr.push(obj)
        }
        setdata(arr)
    },[Currency?.symbols])
  return (
    <div className='AllCurrPageContainer'>
      {
        data?.map((item,i)=>(
            <Card id={item.id} name={item.name} key={i}/>
        ))
      }
    </div>
  )
}

export default AllCurrPage
