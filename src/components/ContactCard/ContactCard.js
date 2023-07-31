const ContactCard = (props)=>{
    return (
<>
    <div className="border border-2   rounded-lg px-5 w-[280px]">
         <img src={props.img} className="h-[40px] w-[40px] border border-2 p-2 mb-12 mt-5 rounded-lg "/>
         <div className="flex flex-col mb-2">
            <h1 className="text-xl font-bold mb-1">{props.header} </h1>
            <h1 className="text-lg text-slate-600 mb-2">{props.content}</h1>
            <h1 className="text-lg font-medium underline mb-5">{props.link}</h1>
         </div>
    </div>
</>
    )
}

export default ContactCard;