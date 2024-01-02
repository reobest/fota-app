import React, { useState } from 'react'
import styled from 'styled-components'
import car from './video/car.mp4'
const Upload = () => {
    const [file,setFile] = useState()
    const HandleFile = (e) => {
       setFile(e.target.files[0])
       console.log(e.target.files[0]);
    }
  return (
    <Container>
        <video src={car} autoPlay loop muted/>
        <Content>
            <h1>Upload Binary File</h1>
            <form method='POST'>
            <input type="file" name="file" id="file" class="inputfile" onChange={HandleFile}/>
            <label for="file" className='reo'>Choose a file</label>
            <button>Upload</button>
            <input type='text' className='upload' name='node-id'placeholder='enter the node-id'/>
            </form>
            <p>{file?.name}</p>

        </Content>
    </Container>
  )
}

export default Upload
const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
`
const Content = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 15;
  >p{
    position: absolute;
    bottom: 30px;
    color: #fff;
  }
  >form{
    display: flex;
    align-items: center;
    justify-content: space-around;
     margin-top: 50px;
     width: 350px;
     height: 80px;
     >button{
        cursor: pointer;
        width: 120px;
        height: 35px;
        background-color: transparent;
        border: 1px solid #03e9f4;
        color: #fff;
        font-size: 11px;
     }
     >button:hover{
        background-color: #03e9f4;
        color: #fff;
     }
  }
  >h1{
    margin-top: 100px;
    font-size: 50px;
    color: #03e9f4;
    font-weight: 100;
    letter-spacing: 2px;
    color: #03e9f4;
  }

`