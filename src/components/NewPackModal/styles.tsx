import styled from 'styled-components';

interface Props {
  isDragActive?: any;
  dragActive?: any;
  dragReject?: any;
  isDragReject?: any;
  img?: any;
}
interface Type {
  type?: 'default' | 'error' | 'success';
}


export const Container = styled.div`
  position: absolute;
  top: 22%;
  width: 70%;
  border: solid 1px #000300;
  background-color: #fff;
  margin-left: 15%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 18px;
  @media(max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`;


export const DropContainer = styled.div<Props>`
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  background-color: #f8f8fa;
  box-sizing: border-box;
  border-radius: 8px;
  ${(props) => props.isDragActive && props.dragActive};
  ${(props) => props.isDragReject && props.dragReject};
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 104px;
  height: 104px;
  margin-top: 12px;
  border: solid 1px #e0e3eb;
  margin-right: 12px;
  &:hover {
    background-color: #f0f1f5;
  }
  @media(max-width: 600px) {
    width: 54px;
    height: 54px;
    margin-top: 12px;
  }
`;
const messageResult = {
  default: '#212E63',
  error: '#FC4F4F',
  success: '#14C87C',
};
export const UploadMessage = styled.p<Type>`
  display: flex;
  color: ${(props) => messageResult[props.type || 'default']};
  justify-content: center;
  align-items: center;
  padding: 32px;
`;

export const Label = styled.span`
  font-size: 14pt;
  line-height: 14pt;
  color: rgb(94 98 120);
`;
export const InputComponent = styled.div`
  border-radius: 8pt;
  background-color: rgb(245 248 250);
  padding: 17px;
  width: 90%;
  margin: 2%;
`;
export const SelectComponent = styled.select`
  border-radius: 8pt;
  border: none;
  background-color: rgb(245 248 250);
  margin: 2%;
  padding: 17px;
  width: 90%;
`;

export const TagsComponent = styled.div`
  border-radius: 8pt;
  background-color: rgb(245 248 250);
  padding: 7px;
  margin: 2%;
  width: 90%;
`;

export const CancelButton = styled.button`
  color: rgb(94 98 120);
  border: none;
  background-color: transparent;
`;
export const Button = styled.button`
  background-color: rgb(232 60 77);
  border: none;
  padding: 12px;
  color: #fff;
`;


export const TrashComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px;
  border-radius: 6pt;
`;
