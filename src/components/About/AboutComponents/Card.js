import I1 from './I1.png';

const Card = (props)=>{
    return (
        <>
        <div className='flex gap-4'>
             <img src={I1} className='w-[36px] h-[36px]'/>
        
        
          <div className="flex flex-col gap-2">
            <h1 className='text-xl font-medium'>{props.heading}</h1>
            <p className='text-gray-500'>{props.content}</p>
         

        </div>
        </div>
        </>
    )
}

export default Card;