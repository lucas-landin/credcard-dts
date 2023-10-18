"use client";

import { useState } from "react";


const CardForm = ({updateCardholderName,updateCardNumber,updateExpMonth,updateExpYear,updateCvc}) => {
  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [successForm, setSuccessForm] = useState(false);
  const [cardNumberError, setCardNumberError] = useState("");

  const [errorFields, setErrorFields] = useState({
    cardholderName: false,
    cardNumber: false,
    expMonth: false,
    expYear: false,
    cvc: false,
  });
  
  function formatDate (input) {
    const numericValue = input.replace(/\D/g, ""); 
    const month = parseInt(numericValue, 10); 
  
    if (month >= 1 && month <= 12) {
      return month.toString(); 
    } else {
      return ""; 
    }
  }

  function formatCreditCardNumber(input) {
    const numericString = input.replace(/\D/g, "");
    const groups = numericString.match(/(\d{1,4})/g);
    if (groups) {
      return groups.join(" ");
    }
    return numericString;
  }

  function formatCvcNumber(input) {
    const cleanCvc = input.replace(/\D/g, "");
    return cleanCvc;
  }

  const validateCreditCardNumber = (value) => {
    const numericValue = value.replace(/\D/g, "");
    if (numericValue.length !== 16) {
      setCardNumberError("Card number must have 16 digits");
      setErrorFields({ ...errorFields, cardNumber: true });
    } else {
      setCardNumberError("");
      setErrorFields({ ...errorFields, cardNumber: false });
    }
  };

  const handleInputChange = (field, value) => {
    setSuccessForm(false);
    switch (field) {
      case "cardholderName":
        updateCardholderName(value);
        break;
      case "cardNumber":
        updateCardNumber(value);
        break;
      case "expMonth":
        updateExpMonth(value);
        break;
      case "expYear":
        updateExpYear(value);
        break;
      case "cvc":
        updateCvc(value);
        break;
      default:
        break;
    }
    
    
    if (!value.trim()) {
      setErrorFields({ ...errorFields, [field]: true });
    } else {
      setErrorFields({ ...errorFields, [field]: false });
    }
   
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isCardholderNameEmpty = !cardholderName.trim();
    const isCardNumberEmpty = !cardNumber.trim();
    const isExpMonthEmpty = !expMonth.trim();
    const isExpYearEmpty = !expYear.trim();
    const isCvcEmpty = !cvc.trim();

    

    setErrorFields({
      cardholderName: isCardholderNameEmpty,
      expMonth: isExpMonthEmpty,
      expYear: isExpYearEmpty,
      cvc: isCvcEmpty,
    });

    validateCreditCardNumber(cardNumber);

    if (
      isCardholderNameEmpty ||
      isCardNumberEmpty ||
      isExpMonthEmpty ||
      isExpYearEmpty ||
      isCvcEmpty
    ) {
      
      setSuccessForm(false);
    } else {
      
  
      
      
      setSuccessForm(true);
    }
  };

  return (
    <div className="form_wrapper flex flex-col items-center justify-center px-8 pb-2 pt-20 text-[#220931] min-[1016px]:col-span-1 min-[1416px]:max-w-[500px]">
      {!successForm && (
        <form className="card_form" onSubmit={handleSubmit}>
          <label className="font-base uppercase tracking-widest">Cardholder Name</label>
          <input
            type="text"
            placeholder="e.g. Jane Appleseed"
            value={cardholderName}
            onChange={(e) => {
              setCardholderName(e.target.value);
              handleInputChange("cardholderName", e.target.value);
              
            }}
            className={`p-3  w-full mt-2 mb-4 border border-solid rounded-lg ${
              errorFields.cardholderName ? "border-red-500" : "border-gray-400"
            }`}
            maxLength={20}
          />
          {errorFields.cardholderName && (
            <div className="text-red-500">Can't be blank</div>
          )}

          <label className="font-base uppercase tracking-widest">Card Number</label>
          <input
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
            value={formatCreditCardNumber(cardNumber)}
            onChange={(e) => {
              setCardNumber(e.target.value);
              validateCreditCardNumber(e.target.value);
              handleInputChange("cardNumber", e.target.value);
            }}
            className={`p-3 w-full mt-2 mb-4 border border-solid border-gray-400 rounded-lg ${
              errorFields.cardNumber ? "border-red-500" : "border-gray-400"
            }`}
            maxLength={19}
          />
          {errorFields.cardNumber && (
            <div className="text-red-500">
              {cardNumberError || "Can't be blank"}
            </div>
          )}

          <div className="card_date_cv flex flex-row gap-6">
            <div className="cad_date_label w-1/2">
              <label className=" min-[1016px]:text-base text-sm uppercase tracking-widest whitespace-nowrap ">Exp. Date (MM/YY)</label>
              <div className="cad_date_input flex flex-row gap-4">
                <input
                  type="text"
                  placeholder="MM"
                  value={formatDate(expMonth)}
                  onChange={(e) =>{setExpMonth(e.target.value);
                    handleInputChange("expMonth", e.target.value);
                  }}
                  className={`p-3 w-1/2 my-4 border border-solid border-gray-400 rounded-lg  ${
                    errorFields.expMonth ? "border-red-500" : "border-gray-400"
                  }`}
                  maxLength={2}
                />

                <input
                  type="text"
                  placeholder="YY"
                  value={expYear}
                  onChange={(e) => {setExpYear(e.target.value);
                    handleInputChange("expYear", e.target.value);
                  }}
                  className={`p-3 w-1/2 my-4 border border-solid border-gray-400 rounded-lg  ${
                    errorFields.expYear ? "border-red-500" : "border-gray-400"
                  }`}
                  maxLength={2}
                />
              </div>
              {(errorFields.expMonth || errorFields.expYear) && (
                <div className="text-red-500">Can't be blank</div>
              )}
            </div>

            <div className="card_cv flex flex-col w-1/2">
              <label className="font-base uppercase tracking-widest">cvc</label>
              <input
                type="text"
                placeholder="e.g. 123"
                value={formatCvcNumber(cvc)}
                onChange={(e) => {
                  handleInputChange("cvc", e.target.value);
                  setCvc(e.target.value);
                }}
                className={`p-3 w-full my-4 border border-solid border-gray-400 rounded-lg ${
                  errorFields.cvc ? "border-red-500" : "border-gray-400"
                }`}
                maxLength={3}
              />
              {errorFields.cvc && (
                <div className="text-red-500">Can't be blank</div>
              )}
            </div>
          </div>

          <button className="p-4 rounded-lg bg-[#220931] text-white w-full mt-1 mb-1 hover-bg-[#370e51]">
            Confirm
          </button>
        </form>
      )}
      {successForm && <p>Success message</p>}
    </div>
  );
};

export default CardForm;
