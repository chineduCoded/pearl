import styled from 'styled-components'

export const Container = styled.div`
    width: 50px;
    height: 25px;
    border-radius: 20px;
    border: 1pz solid #999;
    background-color: white;
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const Button = styled.button`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #999;
    position: absolute;
    cursor: pointer;
`

export const Icon = styled.img`
     width: 15px;
     height: 15px;
`