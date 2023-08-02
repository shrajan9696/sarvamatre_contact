import Card from './AboutComponents/Card';
import I3 from './I3.png';
const About = ()=>{
    const data = [
        {id:1, header:"Driving Growth with a Hybrid Approach", content:"This approach combines the best of traditional services with innovative digital solutions. This hybrid approach allows us to provide a holistic and integrated suite of services to businesses, offering scalable and flexible solutions that bring cost-effectiveness. We help businesses stay ahead of the curve and future-proof their operations."},
        {id:2, header:"Expanded Market Reach", content:"We assist businesses in expanding their market reach. We help to identify new target markets, devise market entry strategies, and establish partnerships and distribution channels to help businesses penetrate new markets and unlock growth opportunities."},
        {id:3, header:"Market Insights", content:"We offer valuable market insights, enabling businesses to stay ahead of market trends and make data-driven decisions."},
        {id:4, header:"Brand Building", content:"We help businesses build strong and distinctive brands and to establish their brand presence, enhance brand equity, and differentiate themselves in the market."},
        {id:5, header:"Long Term Partnership", content:"We strive to build long-term partnerships. We provide ongoing support, guidance, and collaboration, adapting our services to meet their evolving needs and ensuring that we continue to add value to their business at every stage of their growth journey."},
        {id:6, header:"Enhanced Efficiency", content:"We streamline business processes and optimize operations to enhance efficiency and productivity. Through process reengineering, automation, and implementation of best practices, we help businesses streamline their workflows, reduce costs, and achieve higher levels of operational excellence."},
        {id:7, header:"Innovation And Digital Transformation", content:"We assist businesses in embracing innovation and digital transformation. By leveraging emerging technologies, we help businesses enhance their digital capabilities, adopt new business models."},
        {id:8, header:"Strategic Guidance", content:"Helping businesses navigate through complex challenges and make informed decisions. We enable to identify growth opportunities, mitigate risks, and develop effective strategies that align with business goals."}
    ]
    return (
        <>
        <h1 className="text-[36px] font-medium mb-20">How Are We Different</h1>

        <div className="flex justify-between">
            <div className="grid grid-cols-3 gap-10 basis-8/12">
               {data.map(ele =>{
                return <Card heading = {ele.header} content = {ele.content} key={ele.id}/>
               } )}
            </div>
           
            <div>
            <img src={I3} className='h-[70%] basis-3/12 '/>
            </div>
        </div>

        
        </>
    );
}

export default About;