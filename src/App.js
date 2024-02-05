
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
// import {useGetCurrListlatestQuery } from './redux/currencyReducer';
import Header from './components/commom/Header';
import AllCurrPage from './components/pages/AllCurrPage';
// import HistoricalRate from './components/pages/HistoricalRate';
import CurrRates from './components/pages/CurrRates';
import Home from './components/Home/Home';
function App() {
  // const {data} = useGetCurrListSymbolsQuery()
  // const {data} = useGetCurrListlatestQuery()
  // console.log(data)
  return (

    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/symbols' element={<AllCurrPage/>}/>
        <Route path='/rates' element={<CurrRates/>}/>
        {/* <Route path='/hrates' element={<HistoricalRate/>}/> */}
      </Routes>
    </BrowserRouter>

  );
}

export default App;
