import styled from 'styled-components';
interface Props {
  img?: any;
}

export const ContainerHider = styled.article<Props>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ddd;
  margin: 12px;
  min-width: 350px;
  opacity: 0.4;
  max-width: 350px;
  max-height: 500px;
  min-height: 500px;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  background-color: #f8f8fa;
  border-radius: 11px;
`;

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ddd;
  margin: 12px;
  min-width: 350px; 
  max-width: 350px;
  max-height: 500px;
  min-height: 500px;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  background-color: #f8f8fa;
  border-radius: 11px;
`;
export const Image = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  margin-right: 0.7rem;
`;

export const Title = styled.span`
  color: #000;
  font-size: 12pt;
  font-weight: 600;
`;

export const Subtitle = styled.small`
  color: rgb(181 181 195);
  font-size: 10pt;
  font-weight: 600;
`;

export const ButtonUp = styled.button`
  background-color: #484A4C;
  border: none;
  border-radius: 3px;
  margin: 9px;
  padding: 7px;
  opacity: 0.6;
  
`;

export const ApiText = styled.span`
  color: rgb(24 28 50);
  font-size: 10pt;
  font-weight: 600;
`;

export const Tags = styled.small`
  background-color: rgb(243 246 249);
  color: rgb(128 128 143);
  font-size: 9pt;
  border-radius: 7px;
  font-weight: 600;
  padding: 9px;
  margin: 3px;
`;

export const OptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  margin-left: 47%;
  margin-top: -2%;
  background-color: #fff;
  border-radius: 7px;
  padding: 1rem;
`;

export const TextOpt = styled.span`
  color: #212E63;
  font-size: 10pt;
  font-weight: 600;
  margin-left: 3%;
`;

export const TextOptrash = styled.span`
  color: #c45;
  font-size: 10pt;
  font-weight: 600;
  margin-left: 3%;
`;

export const Modal = styled.div`
  position: fixed;
  border: solid 1px rgb(181 181 195);
  background-color: #fff;
  border-radius: 16pt;
  padding: 40px;
  margin-top: -21%;
  margin-left: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const BtnHide = styled.button`
  color: #fff;
  background-color: rgb(232 60 77);
  padding: 0.6rem;
  border-radius: 4px;
  border: none;
  font-size: 10pt;
  font-weight: 600;
  margin-left: 3%;
  margin-top: 12px;
`;
