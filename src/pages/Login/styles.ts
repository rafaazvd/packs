import styled from 'styled-components';
import { shade } from 'polished';
interface Props {
  img?: any;
}

export const Container = styled.div<Props>`
    background-image: url(${(props) => props.img});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
    width: 100%;
    height: 100vh;
    padding: 0 5px;
    background-color:rgb(33 46 99);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`;
export const Img = styled.img`
    margin: 2%;
    
`;
export const Button1 = styled.button`
    background-color: transparent;
    border: none;
`;
export const Button = styled.button`
    width: 70%;
    background-color: #e83c4d;
    height: 33px;
    border-radius: 10px;
    border: 0;
    margin-top: 47px;
    color: #f4ede8;
    font-weight: 500;
    transition: background-color 0.2s;
    &:hover {
        background: ${shade(0.2, '#BCF9C5')};
    }
`;

export const Input = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: none;
  height: 34%;
  width: 100%;
  margin-top: 10px;
  padding: 7px;
  border-radius: 8pt;
  background-color: rgb(245 248 250);
`;
