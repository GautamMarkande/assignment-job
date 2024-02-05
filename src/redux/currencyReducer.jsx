import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const currApi = createApi({
    reducerPath:'CurrencyApi',
    baseQuery:fetchBaseQuery({
        baseUrl:"https://api.forexrateapi.com/v1/",
    }),
    endpoints:(builder)=>({
     getCurrListSymbols:builder.query({
        query:(body)=>"symbols?api_key=30d02ee45fb87cb0ee5ab95357d45157"
     }),
     getCurrListlatest:builder.query({
        query:(body)=>"latest?api_key=30d02ee45fb87cb0ee5ab95357d45157"
     }),
     getCurrListRateOnspecificDate:builder.query({
        query:(date)=>{
            console.log(date)
            return ({
            url:`${date}?api_key=30d02ee45fb87cb0ee5ab95357d45157`,
            method:"GET"
        })
    }
            
     })

    }),
})
export const {useGetCurrListSymbolsQuery,
    useGetCurrListlatestQuery,
    useGetCurrListRateOnspecificDateQuery
} = currApi