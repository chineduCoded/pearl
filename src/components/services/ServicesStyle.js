import styled from 'styled-components'

export const Image = styled.img`
  width: 100%;
  transition: all 10s ease;

  &:hover {
   transform: translateY(-100%);
  }
`

export const Circle = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin: 3px;
  background-color: white;
`

export const Browser = styled.div`
  height: 20px;
  background-color: rgb(243, 242, 242);
  display: flex;
  align-items: center;
  position: sticky;
  z-index: 2;
`

export const Container = styled.div`
  width: 30%;
  height: 40vh;
  margin: 20px 10px;
  border: 2px solid rgb(243, 242, 242);
  border-radius: 10px 10px 0px 0px;
  overflow: hidden;

  @media screen and (max-width: 480px) {
    width: 40%;
    height: 20vh;
  }
`
