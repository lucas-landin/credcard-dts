"use cliente"
import Image from "next/image";
import {bgDesktop, bgMobile, } from "../assets";

const ImageSwitcher = ({ cardholderName, cardNumber, expMonth, expYear, cvc }) => {

  function formatDates(input) {
    const numericValue = input.replace(/\D/g, "");
  
    if (numericValue === "") return "00"; 
    const month = parseInt(numericValue, 10);
    if (month < 1) return "00";
    if (month > 12) return "12";

    return month.toString().padStart(2, "0");
  }

  function formatCardNumber (input) {
    const numericValue = input.replace(/\D/g, "");
    const groups = numericValue.match(/(\d{1,4})/g);
    if (groups) {
      return groups.join(" ");
    }
    if (numericValue === "") return "0000 0000 0000 0000";
    return numericValue
  }

  return (
    <div className="">
      <div className="bigScreenImg hidden min-[1416px]:block min-[1416px]:col-span-1">
        {/* Renderiza essa imagem em telas maiores */}
        <Image
          src={bgDesktop}
          alt="Imagem Desktop"
          width={500}
          height={900}
          className=" object-cover"
         
        />

        <div className=" bg-card-front w-[445px] h-[244px] object-cover z-10 absolute  top-[220px] left-40 shadow-2xl rounded-md">

          <div className="card_deco absolute top-7 left-7 z-10 flex flex-row items-center gap-4">
            <div className=" bg-white w-11 h-11 rounded-full  " />
            <div className=" bg-transparent border border-solid border-white w-5 h-5 rounded-full " />
          </div>

            <div className=" card_dts absolute top-32 px-6 text-white w-full ">

            
            <span className=" text-2xl tracking-[0.280em] w-full text-center ">{formatCardNumber(cardNumber)}</span>
            

            <div className="flex justify-between items-end flex-row mt-10">
            <p className=" uppercase tracking-widest">{cardholderName}</p>

            <div className=" flex flex-row tracking-widest">
            <p>{formatDates(expMonth)}</p> / <p>{expYear}</p>
            </div>

            </div>

            </div>   
           
           
          </div>

       <div className=" bg-card-back w-[445px] h-[244px] object-cover  z-10 absolute top-[500px] left-[256px] shadow-2xl">
       <div className=" text-white absolute top-28 left-[23rem]">
       <span className=" text-sm tracking-widest">{cvc}</span>
       </div>
       </div>
        
      </div>

      

      <div className=" smallScreenImg  min-[1416px]:hidden  min-[1415px]:block">
        {/* Renderiza essa imagem em telas menores */}
        <Image
          src={bgMobile}
          alt="Imagem Mobile"
          width={200}
          height={200}
          layout="responsive"
        />       

        <div className=" bg-card-back w-[280px] h-[280px] bg-contain bg-no-repeat  absolute top-[50px] left-[80px]">
        <div className=" text-white absolute  top-16 left-[218px]">
        <span className=" text-sm tracking-widest">{cvc}</span>
        </div>
        </div>

      <div className=" bg-card-front  w-[280px] h-[280px] bg-contain bg-no-repeat z-10 absolute  top-[136px] left-[30px] shadow-sm rounded-md">

          <div className="card_deco absolute top-5 left-4 z-10 flex flex-row items-center gap-2">
          <div className=" bg-white w-8 h-8 rounded-full  " />
         <div className=" bg-transparent border border-solid border-white w-3 h-3 rounded-full " />
         </div>

          <div className=" card_dts absolute top-20 px-6 text-white w-full ">

  
           <span className=" text-sm tracking-[0.280em] w-full text-center ">{formatCardNumber(cardNumber)}</span>
  

         <div className="flex justify-between items-end flex-row mt-3">
            <p className=" text-xs uppercase tracking-widest">{cardholderName}</p>

           <div className=" text-xs flex flex-row tracking-widest">
               <p>{formatDates(expMonth)}</p> / <p>{expYear}</p>
            </div>

            </div>

            </div>   
 
 
      </div>

      </div>
    </div>
  );
};
export default ImageSwitcher;
