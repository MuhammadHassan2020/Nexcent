// import logo from './logo.svg';
import './App.css';
import './Media(1280-1024).css'
import './Media(1023-769).css'
import './Media(768-486).css'
import './Media(485-350).css'
import Navbaar from './Navbaar/Navbaar';
import Hero from './Hero/Hero' 
import ClientSection from './ClientSection/ClientSection';
import Community from './Community/Community';
import Unlock from './Unlock/Unlock';
import Achievements from './Achievements/Achievements';
import FemaleUnlock from './FemaleUnlock/FemaleUnlock'
import Customer from './Customer/Customer';
import CommunityUpdate from './CommunityUpdate/CommunityUpdate';
import Frame from './Frame/Frame';
import Footer from './Footer/Footer';
function App() {
  return (
    <div>
      <Navbaar/>
      <Hero/>
      <ClientSection/>
      <Community/>
      <Unlock/>
      <Achievements/>
      <FemaleUnlock/>
      <Customer/>
      <CommunityUpdate/>
      <Frame/>
      <Footer/>
    </div>
  );
}

export default App;
