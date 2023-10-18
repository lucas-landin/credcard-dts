"use client"
import ImageSwitcher from "./components/ImageSwitcher"
import CardForm from "./components/CardForm"
import React, { useState } from 'react';


export default function Home() {
 
 const [cardholderName, setCardholderName] =  useState<string>("Jane Appleseed");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [expMonth, setExpMonth] = useState<string>(""); 
  const [expYear, setExpYear] = useState<string>("00"); 
  const [cvc, setCvc] = useState<string>("000");
  


 const updateCardholderName = (name: string) => {
   setCardholderName(name);
 }

 const updateCardNumber = (number: string) => {
  setCardNumber(number);
}

const updateExpMonth = (month: string) => {
  setExpMonth(month);
}

const updateExpYear = (year: string) => {
  setExpYear(year);
}

const updateCvc = (cvc: string) => {
  setCvc(cvc);
}

  return (
   <div className=" flex-col flex bg-white min-[1415px]:grid min-[1415px]:grid-cols-2 w-full h-screen ">
    <ImageSwitcher 
    cardholderName={cardholderName}
    cardNumber={cardNumber}
    expMonth={expMonth}
    expYear={expYear}
    cvc={cvc}
    />
    <CardForm 
    updateCardholderName={updateCardholderName}
    updateCardNumber={updateCardNumber}
    updateExpMonth={updateExpMonth}
    updateExpYear={updateExpYear}
    updateCvc={updateCvc}
    />
   </div>
  )
}
