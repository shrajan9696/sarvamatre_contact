import logo from './logo.svg';
import './App.css';
import ContactCard from './components/ContactCard/ContactCard';
import ContactFAQ from './components/ContactFAQ/ContactFAQ';
import I1 from './assets/I1.png';
import I2 from './assets/I2.png';
function App() {
  return (
   <>
    
      <ContactCard header="Chat to sales" content="speak to our friendly team" link="sales@untitledui.com" img={I1}/>
      <ContactFAQ img={I1} img2={I2} question="Is there a free trial available" answer="yes you can try us free for 30 days if you want we will provide you with free 30 min onboarding process" />
      <ContactFAQ img={I1} img2={I2} question="Is there a free trial available" answer="yes you can try us free for 30 days if you want we will provide you with free 30 min onboarding process" />
      <ContactFAQ img={I1} img2={I2} question="Is there a free trial available" answer="yes you can try us free for 30 days if you want we will provide you with free 30 min onboarding process" />
      <ContactFAQ img={I1} img2={I2} question="Is there a free trial available" answer="yes you can try us free for 30 days if you want we will provide you with free 30 min onboarding process" />
      <ContactFAQ img={I1} img2={I2} question="Is there a free trial available" answer="yes you can try us free for 30 days if you want we will provide you with free 30 min onboarding process" />
   </>
  );
}

export default App;
