import { useState } from 'react'
import InputBox from './Components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {

  const [amount, setAmount] = useState(0)  // this will basically change the amount value
  const [from, setFrom] = useState("usd") // this is for changing the currency from
  const [to, setTo] = useState("inr") // this is for changing the currency to
  const [convertedAmount, setConvertedAmount] = useState(0)  // this is used to show the converted value

  const currencyInfo = useCurrencyInfo(from)  // this will have the object of all the currency 

  const options = Object.keys(currencyInfo) // this will have the keys means list of all currency
  // console.log(options)

  const swap = () => { // this function will swap the amounts and currency from to to from 
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
  const convert = () => {  //  this function basically set the amount in to input box
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App