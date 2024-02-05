import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const currApi = createApi({
    reducerPath:'CurrencyApi',
    baseQuery:fetchBaseQuery({
        baseUrl:"https://api.forexrateapi.com/v1/",
    }),
    endpoints:(builder)=>({
     getCurrListSymbols:builder.query({
        query:(body)=>"symbols?api_key=a5d7976dfde7c32aaaa5290b28ed435c"
     }),
     getCurrListlatest:builder.query({
        query:(body)=>"latest?api_key=a5d7976dfde7c32aaaa5290b28ed435c"
     }),
     getCurrListRateOnspecificDate:builder.query({
        query:(date)=>{
            console.log(date)
            return ({
            url:`${date}?api_key=a5d7976dfde7c32aaaa5290b28ed435c`,
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