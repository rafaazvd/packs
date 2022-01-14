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
      return '400px'
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
export const ModalSelectCountryDiv = styled.div`
  position: absolute;
  top: 22%;
  width: 50%;
  border: solid 1px #000300;
  background-color: #fff;
  margin-left: 25%;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  justify-content: space-between;
  align-items: flex-start;
  padding: 47px;
  @media(max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`;

export const SelectSpan = styled.span`
  color: rgb( 33 46 99);
  font-weight: bold;
  font-size: 21px;
  margin: 2%;
`;
export const TextSpan = styled.span`
  color: rgb( 33 46 99);
  font-weight: bold;
  font-size: 14px;
  margin-left: 2%;
`;

export const SelectDiv = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1%;
  width: 80%;
`;
export const CancelButton = styled.button`
  color: rgb(94 98 120);
  font-weight: bold;
  font-size: 18px;
  border: none;
  background-color: transparent;
`;
export const Button2 = styled.button`
  background-color: rgb( 33 46 99);
  border-radius: 4pt;
  border: none;
  padding: 10px 16px;
  font-weight: bold;
  color: #fff;
`;