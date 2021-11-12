import styled from 'styled-components'

export const AwardDesc = styled.p``

export const AwardTitle = styled.h4`
font-weight: bold;
color: #555;
margin-bottom: 10px;
`

export const AwardText = styled.div`
 width: 70%;
`

export const Award = styled.div`
 margin-top: 50px;
 display: flex;
 align-items: center;
 justify-content: space-between;

 @media screen and (max-width: 480px) {
   display: none;
 }
`

export const Sub = styled.p`
  margin: 20px 0px;
`

export const Desc = styled.p`
  font-weight: 300;
`

export const Title = styled.h1`
  font-weight: 400;
`

export const ImgA = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 20px;
`

export const Image = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Right = styled.div`
  flex: 1;

  @media screen and (max-width: 480px) {
    padding: 20px;
  }
`

export const Card = styled.div`
  width: 60%;
  height: 70vh;
  border-radius: 30px;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 480px) {
    height: 30vh;
  }
`

export const Bg = styled(Card)`
  position: absolute;
  top: 50px;
  left: 50px;
  background-color: #333;

  @media screen and (max-width: 480px) {
   display: none;
  }
  ${Card}
`

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;

  @media screen and (max-width: 480px) {
     width: 100%;
  }
`

export const AboutHolder = styled.div`
 width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;

  @media screen and (max-width: 480px) {
      flex-direction: column;
      text-align: center;
      margin-top: 50px;
  }
`
