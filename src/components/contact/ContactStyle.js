import styled from 'styled-components'

export const Button = styled.button`
  border: none;
  padding: 15px;
  background-color: #59b256;
  color: white;
  font-weight: 500;
  cursor: pointer;

  @media screen and (max-width: 480px) {
   margin-top: 10px;
  }
`

export const Textarea = styled.textarea`
  width: 100%;
  margin: 10px 0px;
  font-size: 14px;
  padding-left: 10px;
`

export const Input = styled.input`
  width: 50%;
  height: 50px;
  border: none;
  border-bottom: 1px solid black;
  margin: 10px 0px;
  font-size: 14px;
  padding-left: 10px;

  @media screen and (max-width: 480px) {
    width: 35%;
    height: 40px;
    margin: 10px;
    margin-left: 0;
  }
`

export const Form = styled.form`
margin-top: 20px;

@media screen and (max-width: 480px) {
    margin-top: 0px;
    display: flex;
    flex-wrap: wrap;
}
`

export const Desc = styled.p`
font-weight: 200;

@media screen and (max-width: 480px) {
 display: none;
}
`

export const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 20px;
`

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 0px;
  font-weight: 300;
  width: 70%;

  @media screen and (max-width: 480px) {
   margin: 20px 0px;
    width: 100%;
  }
`

export const Info = styled.div`
`

export const Title = styled.h1`
  font-size: 60px;
  width: 80%;

  @media screen and (max-width: 480px) {
   font-size: 30px;
  }
`

export const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Left = styled.div`
flex: 1;
`

export const Wrapper = styled.div`
 padding: 50px;
  display: flex;

  @media screen and (max-width: 480px) {
   flex-direction: column;
    padding: 0px 50px;
  }
`

export const Bg = styled.div`
  width: 20px;
  height: 100%;
  background-color: #59b256;
  position: absolute;
`

export const Container = styled.div`
height: 100vh;
 position: relative;
`
