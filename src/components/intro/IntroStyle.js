import styled from 'styled-components'



export const Image  = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
`

export const Bg = styled.div`
  clip-path: polygon(100% 0%, 100% 51%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);
  background-color: #59b256;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
`

export const Right = styled.div`
  flex: 1;
  position: relative;
`

export const Desc = styled.p`
@media screen and (max-width: 480px) {
display: none;
}
`

export const TitleItem = styled.div`
  height: 50px;
  font-size: 30px;
  font-weight: bold;
  color: #59b256;
  display: flex;
  align-items: center;
`

export const TitleWrapper = styled.div`
  height: 100%;
  animation: move 10s ease-in-out infinite alternate;

  @keyframes move {
  25% {
    transform: translateY(-50px);
  }
  50% {
    transform: translateY(-100px);
  }
  75% {
    transform: translateY(-150px);
  }
  100% {
    transform: translateY(-200px);
  }
}
`

export const Title = styled.div`
  height: 50px;
  overflow: hidden;
`

export const Name = styled.h1`
font-size: 60px;
`

export const Heading = styled.h2`
  font-size: 30px;
  font-weight: 300;
`

export const Wrapper = styled.div`
  padding: 50px;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
  }
`

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
 width: 100%;
 display: flex;
 align-items: center;
  height: 100vh;

  @media screen and (max-width: 480px) {
   flex-direction: column;
  }
`
