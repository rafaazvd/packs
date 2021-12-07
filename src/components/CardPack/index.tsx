import React, { useState } from 'react';
import { Divider } from '@mui/material';
import { FaEdit } from 'react-icons/fa'
import { HiDuplicate } from 'react-icons/hi'
import { BsFillEyeSlashFill } from 'react-icons/bs'
import { FaTrash } from 'react-icons/fa'

import icoBtn from '../../assets/ico-btn.svg';
import {
  Container,
  ApiText,
  ButtonUp,
  Image,
  Subtitle,
  Tags,
  Title,
  OptionDiv,
  TextOpt,
  TextOptrash,
  ContainerHider,
  Modal,
  BtnHide,
} from './styles';
interface IProps {
  data: any;
  handleEdit(dt: any): void;
  handleDuplicate(dt: any): void;
  handleHide(dt: any): void;
  handleHideOff(dt: any): void;
  handleDelete(dt: any): void;
}
const Home = ({
  data,
  handleDelete,
  handleDuplicate,
  handleEdit,
  handleHide,
  handleHideOff,
}: IProps) => {
  const [isOption, setIsOption] = useState(false);

  const viewOptions = () => {
    setIsOption(!isOption);
  };
    return data.isHide
    ?
    (
      <article>
        <ContainerHider img={data.templateImage}>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
              <ButtonUp onClick={() => viewOptions()}>
                {/* <BsUiChecksGrid /> */}
                <img style={{
                }} src={icoBtn} alt="" />
              </ButtonUp>
            </div>
            {
              isOption && (
                <OptionDiv>
                  <button onClick={() => {
                    setIsOption(!isOption);
                    handleEdit(data)
                  }} style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '4%', border: 'none', backgroundColor: 'transparent'}}>
                    <FaEdit color={'#212E63'} />
                    <TextOpt>Editar</TextOpt>
                  </button>
                  <button onClick={() => {
                    setIsOption(!isOption);
                    handleDuplicate(data)
                  }} style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '4%', border: 'none', backgroundColor: 'transparent'}}>
                    <HiDuplicate color={'#212E63'} />
                    <TextOpt>Duplicar</TextOpt>
                  </button>
                  <button onClick={() => {
                    setIsOption(!isOption);
                    handleHide(data)
                  }} style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '4%', border: 'none', backgroundColor: 'transparent'}}>
                    <BsFillEyeSlashFill color={'#212E63'} />
                    <TextOpt>Esconder</TextOpt>
                  </button>
                  <button onClick={() => {
                    setIsOption(!isOption);
                    handleDelete(data)
                  }} style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '4%', border: 'none', backgroundColor: 'transparent'}}>
                    <FaTrash color={'#c45'} />
                    <TextOptrash>Excluir</TextOptrash>
                  </button>
                </OptionDiv>
              )
            }
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#fff',
            width: '100%',
            borderRadius: '11px',
            height: '59%',
            padding: '14px',
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center'
            }}>
              <Image src={data.image} alt="offlet"/>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
                <Title>{data.title}</Title>
                <Subtitle>{data.subTitle}</Subtitle>
              </div>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'row',
              margin: '10px',
            }}>
              <Subtitle>API:</Subtitle>
              <ApiText>{data?.api}</ApiText>
            </div>
            <Divider />
            <br />
            <Subtitle>Tags</Subtitle>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'auto auto auto',
            }}>
              {
                data?.tags.map((t: string) => (
                  <Tags key={t}>
                    {t}
                  </Tags>
                ))
              }
            </div>
            
          </div>
        </ContainerHider>
        <Modal>
          <BsFillEyeSlashFill color={'#212E63'} size={70}/>
          <span>Pack Escondido</span>
          <BtnHide onClick={() => handleHideOff(data)}>
          Tornar Visível 
          </BtnHide>
        </Modal>
      </article>
    )
    :
    (
      <Container img={data.templateImage}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
            <ButtonUp onClick={() => viewOptions()}>
              {/* <BsUiChecksGrid /> */}
              <img style={{
              }} src={icoBtn} alt="" />
            </ButtonUp>
          </div>
          {
            isOption && (
              <OptionDiv>
                <button onClick={() => {
                  setIsOption(!isOption);
                  handleEdit(data)
                }} style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '4%', border: 'none', backgroundColor: 'transparent'}}>
                  <FaEdit color={'#212E63'} />
                  <TextOpt>Editar</TextOpt>
                </button>
                <button onClick={() => {
                  setIsOption(!isOption);
                  handleDuplicate(data)
                }} style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '4%', border: 'none', backgroundColor: 'transparent'}}>
                  <HiDuplicate color={'#212E63'} />
                  <TextOpt>Duplicar</TextOpt>
                </button>
                <button onClick={() => {
                  setIsOption(!isOption);
                  handleHide(data)
                }} style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '4%', border: 'none', backgroundColor: 'transparent'}}>
                  <BsFillEyeSlashFill color={'#212E63'} />
                  <TextOpt>Esconder</TextOpt>
                </button>
                <button onClick={() => {
                  setIsOption(!isOption);
                  handleDelete(data)
                }} style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '4%', border: 'none', backgroundColor: 'transparent'}}>
                  <FaTrash color={'#c45'} />
                  <TextOptrash>Excluir</TextOptrash>
                </button>
              </OptionDiv>
            )
          }
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#fff',
          width: '100%',
          borderRadius: '11px',
          height: '59%',
          padding: '14px',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center'
          }}>
            <Image src={data.image} alt="offlet"/>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
              <Title>{data.title}</Title>
              <Subtitle>{data.subTitle}</Subtitle>
            </div>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'row',
            margin: '10px',
          }}>
            <Subtitle>API:</Subtitle>
            <ApiText>{data?.api}</ApiText>
          </div>
          <Divider />
          <br />
          <Subtitle>Tags</Subtitle>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'auto auto auto',
          }}>
            {
              data?.tags.map((t: string) => (
                <Tags key={t}>
                  {t}
                </Tags>
              ))
            }
          </div>
          
        </div>
      </Container>
    );
};
export default Home;
