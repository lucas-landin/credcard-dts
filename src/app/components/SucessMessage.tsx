
import Image from "next/image";
import {iconComplete } from "../assets";
const SuccessMessage = () => {
return(
    <div className=" flex flex-col justify-center items-center gap-10 h-96 w-full ">
        <Image
          src={iconComplete}
          alt="Imagem Mobile"
          width={80}
          height={80}
        />    

   <div className="flex flex-col items-center justify-center gap-1">
   <span className="  text-2xl text-[#220931] uppercase tracking-widest ">Thank you!</span>   
    <p> We've added your card details</p>
   </div>
    <a href="/" className="p-4 rounded-lg bg-[#220931] text-center text-white w-full mt-1 mb-1 hover-bg-[#370e51]">Confirm</a>
    </div>
)
}; export default SuccessMessage