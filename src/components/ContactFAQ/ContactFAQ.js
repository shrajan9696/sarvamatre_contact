import { useState } from "react";
const ContactFAQ = (props)=>{
    const [expanded, setExpanded] = useState(false);
  const toggleHandler = () => {
    setExpanded(!expanded);
  };
    return (


<div className="flex flex-col">
<div
  className={`flex justify-between items-center w-[580px] ${
    !expanded}`}>
  <div className="flex">
   <img src={props.img} />
   <h1 className="font-bold text-xl">{props.question}</h1>
  </div>
  <img
    src={expanded?props.img3:props.img2}
    width="40.85px"
    onClick={toggleHandler}
    className="cursor-pointer" />
</div>
{expanded && <div className="w-[580px] px-11 text-gray-500 text-current">{props.answer}</div>}
</div>
    )
}

export default ContactFAQ;

{/* <>
    <div className=" flex justify-center gap-3">
    <img src={props.img} className="h-[40px] w-[40px] border border-2 p-2  rounded-lg "/>
    <h1 className="text-lg font-bold w-[30%]">Is There a free trial version</h1>
    <img src={props.img2} className="h-[30px] w-[30px]  "/>
    <input type="dropdown"></input>
             
    </div>
</> */}