import { Routes,Route } from 'react-router-dom';
import './index.css'
import Main from './Main';
import Upload from './Upload';
import Admin from './Admin';
import styled from 'styled-components';
function App() {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/upload' element={<Upload/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </Container>
  );
}

export default App;
const Container = styled.div`
/* background-color: #000; */
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`











// const [ledOn,setLedOn] = useState(false)
// const [one,setOne] = useState("0")
// const handleClick = async(e) => {
//   try{
//     await axios.post("http://localhost:5000/led",{one})
//   }catch(e){
//     console.log(e);
//   }
// }
// useEffect(()=> {
//   handleClick();
// },[one])
/* <ButtonContainer>
<ButtonLedOn onClick={() => {  
  setLedOn(true)
  setOne("1")
  }} >Led On</ButtonLedOn>
<ButtonLedOff onClick={() => {

 setLedOn(false)
 setOne("0")
}}>Led Off</ButtonLedOff>
</ButtonContainer>
<ImagesContainer>{ledOn ? <Ledon src={led_on} /> :  <Ledoff src={led_off} />}
</ImagesContainer> */

// const ButtonContainer = styled.div`
//  width: 300px;
//  height: 200px;
//  display: flex;
//  justify-content: center;
//  align-items: center;
// `
// const ImagesContainer = styled.div`
// position: relative;
//  width: 200px;
//  height: 200px;
//  `
// const ButtonLedOn = styled.button`
 
// `
// const ButtonLedOff = styled.button`
 
// `
// const Ledon = styled.img`
// position: absolute;
//  height: 100%;
//  width: 100%;
// `
// const Ledoff = styled.img`
// position: absolute;
//    height: 100%;
//  width: 100%;
// `