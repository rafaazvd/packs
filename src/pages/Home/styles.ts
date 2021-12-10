import styled from 'styled-components';
interface Props {
  img?: any;
  data?: any;
}

export const ContainerHome = styled.div<Props>`
  width: 100%;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: 100% ${(props) => {
    if(props.data) {
      return '30%'
    } else {
      return '300px'
    }
  }};
  background-position: top;
  background-color: #f8f8fa;
`;

export const Input = styled.div`
  background-color: #fff;
  margin-right: 10px;
  padding: 0;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 6pt;
  /* margin-right: 0; */
  width: 60%;
  &:active {
    background-color: #fbfbfc;
    border-radius: 3px;
  }
  input {
    background: transparent;
    border: 0;
    box-shadow: none;
    color: #272727;
    font-size: 16px;
    line-height: 1.5em;
    margin: 0;
    outline: none;
    padding: 8px 16px;
    width: 100%;
  }
  padding-right: 32px;
`;

export const Button = styled.button`
  color: '#fff';
  background-color: rgb(232 60 77);
  padding: 3px 10px 3px 10px;
  border-radius: 6pt;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none;
`;