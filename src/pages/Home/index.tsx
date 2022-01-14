import React, {useState} from 'react';
import {RiHome6Line} from 'react-icons/ri';
import {GoSearch} from 'react-icons/go';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper'
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import { Draggable } from "react-drag-reorder";
import ModalPack from '../../components/NewPackModal';
import CardTest from '../CardTest/Card';
import Header from '../../components/Header';
import br_logo from '../../assets/br.png';
import banner from '../../assets/banner.png';
import {
  Input,
  Button,
  Button2,
  ContainerHome,
  ModalSelectCountryDiv,
  SelectSpan,
  TextSpan,
  SelectDiv,
  CancelButton,
} from './styles';

const Home = () => {
  const [packs, setPacks] = useState<any>([
    {
      _id: 'kncj1345245qieeeeq',
      templateImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAy1FrANmzisZbDig7sRlxV8b5i9T-JQCCXg&usqp=CAU',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS9ERN1m83jDo2rL_lHng9Do9bCfPLWeB4xg&usqp=CAU',
      title: 'NBA Sport',
      category: 'Eletronicos, Clothes',
      api: 'Sports Shopping',
      dragIndex: 0,
      isHide: false,
      tags: ['Headphone', 'Lebron James', 'beats', 'Fones'],
    },
    {
      _id: 'kncjqieecvwvfq',
      templateImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS9ERN1m83jDo2rL_lHng9Do9bCfPLWeB4xg&usqp=CAU',
      image: 'https://i0.wp.com/livebasketballbr.com/wp-content/uploads/2020/08/nba-logo.jpg?fit=1280%2C1024&ssl=1',
      title: 'NBA Products',
      category: 'Eletronicos, Clothes',
      api: 'Sports Shopping',
      dragIndex: 1,
      isHide: false,
      tags: ['Headphone', 'Lebron James', 'beats', 'Fones'],
    },
    {
      _id: 'knecfvfwvcjqieeq',
      templateImage: 'https://www.ocregister.com/wp-content/uploads/2021/05/imageedit_1_7474432946.jpg?w=593',
      image: 'https://i0.wp.com/livebasketballbr.com/wp-content/uploads/2020/08/nba-logo.jpg?fit=1280%2C1024&ssl=1',
      title: 'NBA Products',
      category: 'Eletronicos, Clothes',
      api: 'Sports Shopping',
      dragIndex: 2,
      isHide: false,
      tags: ['Headphone', 'Lebron James','Headphone', 'LebronJames', 'beats', 'Fones', 'testes'],
    },
    {
      _id: 'kncjced2dfrqieeq',
      templateImage: 'https://sportshub.cbsistatic.com/i/r/2020/03/13/72c3988a-1c48-45bb-a118-268c14877b46/thumbnail/1200x675/80364df95c08a36c8c0ec94869507f71/march-madness-logo.jpg',
      image: 'https://i0.wp.com/livebasketballbr.com/wp-content/uploads/2020/08/nba-logo.jpg?fit=1280%2C1024&ssl=1',
      title: 'NBA Products',
      category: 'Eletronicos, Clothes',
      api: 'Sports Shopping',
      dragIndex: 3,
      tags: ['Headphone', 'Lebron James', 'beats', 'Fones'],
    },
    {
      _id: 'kncjcedd2dfrqieeq',
      templateImage: 'https://sportshub.cbsistatic.com/i/r/2020/03/13/72c3988a-1c48-45bb-a118-268c14877b46/thumbnail/1200x675/80364df95c08a36c8c0ec94869507f71/march-madness-logo.jpg',
      image: 'https://i0.wp.com/livebasketballbr.com/wp-content/uploads/2020/08/nba-logo.jpg?fit=1280%2C1024&ssl=1',
      title: 'NBA Products',
      category: 'Eletronicos, Clothes',
      api: 'Sports Shopping',
      dragIndex: 4,
      tags: ['Headphone', 'Lebron James', 'beats', 'Fones'],
    },
    {
      _id: 'kncjceddd2dfrqieeq',
      templateImage: 'https://sportshub.cbsistatic.com/i/r/2020/03/13/72c3988a-1c48-45bb-a118-268c14877b46/thumbnail/1200x675/80364df95c08a36c8c0ec94869507f71/march-madness-logo.jpg',
      image: 'https://i0.wp.com/livebasketballbr.com/wp-content/uploads/2020/08/nba-logo.jpg?fit=1280%2C1024&ssl=1',
      title: 'NBA Products',
      category: 'Eletronicos, Clothes',
      api: 'Sports Shopping',
      dragIndex: 5,
      tags: ['Headphone', 'Lebron James', 'beats', 'Fones'],
    },
    {
      _id: 'kncjced2ssdfrqieeq',
      templateImage: 'https://sportshub.cbsistatic.com/i/r/2020/03/13/72c3988a-1c48-45bb-a118-268c14877b46/thumbnail/1200x675/80364df95c08a36c8c0ec94869507f71/march-madness-logo.jpg',
      image: 'https://i0.wp.com/livebasketballbr.com/wp-content/uploads/2020/08/nba-logo.jpg?fit=1280%2C1024&ssl=1',
      title: 'NBA Products',
      category: 'Eletronicos, Clothes',
      api: 'Sports Shopping',
      dragIndex: 3,
      tags: ['Headphone', 'Lebron James', 'beats', 'Fones'],
    },
    {
      _id: 'kncjsscedd2dfrqieeq',
      templateImage: 'https://sportshub.cbsistatic.com/i/r/2020/03/13/72c3988a-1c48-45bb-a118-268c14877b46/thumbnail/1200x675/80364df95c08a36c8c0ec94869507f71/march-madness-logo.jpg',
      image: 'https://i0.wp.com/livebasketballbr.com/wp-content/uploads/2020/08/nba-logo.jpg?fit=1280%2C1024&ssl=1',
      title: 'NBA Products',
      category: 'Eletronicos, Clothes',
      api: 'Sports Shopping',
      dragIndex: 4,
      tags: ['Headphone', 'Lebron James', 'beats', 'Fones'],
    },
    {
      _id: 'kncjceddd2dfrqieesssq',
      templateImage: 'https://sportshub.cbsistatic.com/i/r/2020/03/13/72c3988a-1c48-45bb-a118-268c14877b46/thumbnail/1200x675/80364df95c08a36c8c0ec94869507f71/march-madness-logo.jpg',
      image: 'https://i0.wp.com/livebasketballbr.com/wp-content/uploads/2020/08/nba-logo.jpg?fit=1280%2C1024&ssl=1',
      title: 'NBA Products',
      category: 'Eletronicos, Clothes',
      api: 'Sports Shopping',
      dragIndex: 5,
      tags: ['Headphone', 'Lebron James', 'beats', 'Fones'],
    },
    {
      _id: 'kncjwefefced2ssdfrqieeq',
      templateImage: 'https://sportshub.cbsistatic.com/i/r/2020/03/13/72c3988a-1c48-45bb-a118-268c14877b46/thumbnail/1200x675/80364df95c08a36c8c0ec94869507f71/march-madness-logo.jpg',
      image: 'https://i0.wp.com/livebasketballbr.com/wp-content/uploads/2020/08/nba-logo.jpg?fit=1280%2C1024&ssl=1',
      title: 'NBA Products',
      category: 'Eletronicos, Clothes',
      api: 'Sports Shopping',
      dragIndex: 3,
      tags: ['Headphone', 'Lebron James', 'beats', 'Fones'],
    },
    {
      _id: 'kncjsscedd2qaqdwdfrqieeq',
      templateImage: 'https://sportshub.cbsistatic.com/i/r/2020/03/13/72c3988a-1c48-45bb-a118-268c14877b46/thumbnail/1200x675/80364df95c08a36c8c0ec94869507f71/march-madness-logo.jpg',
      image: 'https://i0.wp.com/livebasketballbr.com/wp-content/uploads/2020/08/nba-logo.jpg?fit=1280%2C1024&ssl=1',
      title: 'NBA Products',
      category: 'Eletronicos, Clothes',
      api: 'Sports Shopping',
      dragIndex: 4,
      tags: ['Headphone', 'Lebron James', 'beats', 'Fones'],
    },
    {
      _id: 'kncjwfrfceddd2dfrqieesssq',
      templateImage: 'https://sportshub.cbsistatic.com/i/r/2020/03/13/72c3988a-1c48-45bb-a118-268c14877b46/thumbnail/1200x675/80364df95c08a36c8c0ec94869507f71/march-madness-logo.jpg',
      image: 'https://i0.wp.com/livebasketballbr.com/wp-content/uploads/2020/08/nba-logo.jpg?fit=1280%2C1024&ssl=1',
      title: 'NBA Products',
      category: 'Eletronicos, Clothes',
      api: 'Sports Shopping',
      dragIndex: 5,
      tags: ['Headphone', 'Lebron James', 'beats', 'Fones'],
    },
    {
      _id: 'kncjwrRGETGwefeftced2ssdfrqieeq',
      templateImage: 'https://sportshub.cbsistatic.com/i/r/2020/03/13/72c3988a-1c48-45bb-a118-268c14877b46/thumbnail/1200x675/80364df95c08a36c8c0ec94869507f71/march-madness-logo.jpg',
      image: 'https://i0.wp.com/livebasketballbr.com/wp-content/uploads/2020/08/nba-logo.jpg?fit=1280%2C1024&ssl=1',
      title: 'NBA Products',
      category: 'Eletronicos, Clothes',
      api: 'Sports Shopping',
      dragIndex: 3,
      tags: ['Headphone', 'Lebron James', 'beats', 'Fones'],
    },
    {
      _id: 'kncjsscedrd2qaqdwdfrqTERGERTieeq',
      templateImage: 'https://sportshub.cbsistatic.com/i/r/2020/03/13/72c3988a-1c48-45bb-a118-268c14877b46/thumbnail/1200x675/80364df95c08a36c8c0ec94869507f71/march-madness-logo.jpg',
      image: 'https://i0.wp.com/livebasketballbr.com/wp-content/uploads/2020/08/nba-logo.jpg?fit=1280%2C1024&ssl=1',
      title: 'NBA Products',
      category: 'Eletronicos, Clothes',
      api: 'Sports Shopping',
      dragIndex: 4,
      tags: ['Headphone', 'Lebron James', 'beats', 'Fones'],
    },
    // {
    //   _id: 'kncjwfrfcedRYHHTYdd2dfrrqieesssq',
    //   templateImage: 'https://sportshub.cbsistatic.com/i/r/2020/03/13/72c3988a-1c48-45bb-a118-268c14877b46/thumbnail/1200x675/80364df95c08a36c8c0ec94869507f71/march-madness-logo.jpg',
    //   image: 'https://i0.wp.com/livebasketballbr.com/wp-content/uploads/2020/08/nba-logo.jpg?fit=1280%2C1024&ssl=1',
    //   title: 'NBA Products',
    //   category: 'Eletronicos, Clothes',
    //   api: 'Sports Shopping',
    //   dragIndex: 5,
    //   tags: ['Headphone', 'Lebron James', 'beats', 'Fones'],
    // },
    // {
    //   _id: 'kncjwrRGETGweswfeftced2ssdfrqieeq',
    //   templateImage: 'https://sportshub.cbsistatic.com/i/r/2020/03/13/72c3988a-1c48-45bb-a118-268c14877b46/thumbnail/1200x675/80364df95c08a36c8c0ec94869507f71/march-madness-logo.jpg',
    //   image: 'https://i0.wp.com/livebasketballbr.com/wp-content/uploads/2020/08/nba-logo.jpg?fit=1280%2C1024&ssl=1',
    //   title: 'NBA Products',
    //   category: 'Eletronicos, Clothes',
    //   api: 'Sports Shopping',
    //   dragIndex: 3,
    //   tags: ['Headphone', 'Lebron James', 'beats', 'Fones'],
    // },
    // {
    //   _id: 'kncjsscsedrd2qaqdwdfrqTERGERTieeq',
    //   templateImage: 'https://sportshub.cbsistatic.com/i/r/2020/03/13/72c3988a-1c48-45bb-a118-268c14877b46/thumbnail/1200x675/80364df95c08a36c8c0ec94869507f71/march-madness-logo.jpg',
    //   image: 'https://i0.wp.com/livebasketballbr.com/wp-content/uploads/2020/08/nba-logo.jpg?fit=1280%2C1024&ssl=1',
    //   title: 'NBA Products',
    //   category: 'Eletronicos, Clothes',
    //   api: 'Sports Shopping',
    //   dragIndex: 4,
    //   tags: ['Headphone', 'Lebron James', 'beats', 'Fones'],
    // },
    // {
    //   _id: 'kncjwfrfcedRsYHHTYdd2dfrrqieesssq',
    //   templateImage: 'https://sportshub.cbsistatic.com/i/r/2020/03/13/72c3988a-1c48-45bb-a118-268c14877b46/thumbnail/1200x675/80364df95c08a36c8c0ec94869507f71/march-madness-logo.jpg',
    //   image: 'https://i0.wp.com/livebasketballbr.com/wp-content/uploads/2020/08/nba-logo.jpg?fit=1280%2C1024&ssl=1',
    //   title: 'NBA Products',
    //   category: 'Eletronicos, Clothes',
    //   api: 'Sports Shopping',
    //   dragIndex: 5,
    //   tags: ['Headphone', 'Lebron James', 'beats', 'Fones'],
    // },
    // {
    //   _id: 'kncjwrRGETGsssweswfeftced2ssdfrqieeq',
    //   templateImage: 'https://sportshub.cbsistatic.com/i/r/2020/03/13/72c3988a-1c48-45bb-a118-268c14877b46/thumbnail/1200x675/80364df95c08a36c8c0ec94869507f71/march-madness-logo.jpg',
    //   image: 'https://i0.wp.com/livebasketballbr.com/wp-content/uploads/2020/08/nba-logo.jpg?fit=1280%2C1024&ssl=1',
    //   title: 'NBA Products',
    //   category: 'Eletronicos, Clothes',
    //   api: 'Sports Shopping',
    //   dragIndex: 3,
    //   tags: ['Headphone', 'Lebron James', 'beats', 'Fones'],
    // },
    // {
    //   _id: 'kncssjsscsedrd2qaqdwdfrqTERGERTieeq',
    //   templateImage: 'https://sportshub.cbsistatic.com/i/r/2020/03/13/72c3988a-1c48-45bb-a118-268c14877b46/thumbnail/1200x675/80364df95c08a36c8c0ec94869507f71/march-madness-logo.jpg',
    //   image: 'https://i0.wp.com/livebasketballbr.com/wp-content/uploads/2020/08/nba-logo.jpg?fit=1280%2C1024&ssl=1',
    //   title: 'NBA Products',
    //   category: 'Eletronicos, Clothes',
    //   api: 'Sports Shopping',
    //   dragIndex: 4,
    //   tags: ['Headphone', 'Lebron James', 'beats', 'Fones'],
    // },
    // {
    //   _id: 'kncjwfssssrfcedRsYHHTYdd2dfrrqieesssq',
    //   templateImage: 'https://sportshub.cbsistatic.com/i/r/2020/03/13/72c3988a-1c48-45bb-a118-268c14877b46/thumbnail/1200x675/80364df95c08a36c8c0ec94869507f71/march-madness-logo.jpg',
    //   image: 'https://i0.wp.com/livebasketballbr.com/wp-content/uploads/2020/08/nba-logo.jpg?fit=1280%2C1024&ssl=1',
    //   title: 'NBA Products',
    //   category: 'Eletronicos, Clothes',
    //   api: 'Sports Shopping',
    //   dragIndex: 5,
    //   tags: ['Headphone', 'Lebron James', 'beats', 'Fones'],
    // },
  ]);
  const [filter, setFilter] = useState();
  const [isCreate, setIsCreate] = useState(false);
  const [isSelectCountry, setIsSelectCountry] = useState(false);
  const [newDuplicateData, setDuplicate] = useState<any>();

  const ModalSelectCountry = (props: any) => {
    return (
      <ModalSelectCountryDiv>
        <SelectSpan>Selecione os Países para replicar o Pack.</SelectSpan>
        <div style={{
          width: '90%',
        }}>
          <SelectDiv>
            <input type="checkbox" />
            <TextSpan>Brasil</TextSpan>
          </SelectDiv>
          <SelectDiv>
            <input type="checkbox" />
            <TextSpan>Estados Unidos</TextSpan>
          </SelectDiv>
          <SelectDiv>
            <input type="checkbox" />
            <TextSpan>Alemanha</TextSpan>
          </SelectDiv>
          <SelectDiv>
            <input type="checkbox" />
            <TextSpan>Bulgaria</TextSpan>
          </SelectDiv>
          <SelectDiv>
            <input type="checkbox" />
            <TextSpan>Inglaterra</TextSpan>
          </SelectDiv>
          <div style={{
          display: 'flex',
          width: '90%',
          marginTop: '4%',
          marginRight: 'auto',
          marginLeft: 'auto',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <CancelButton onClick={() => setIsSelectCountry(false)}>
            Cancelar
          </CancelButton>
          <Button2>
            Replicar
          </Button2>
        </div>
        </div>
      </ModalSelectCountryDiv>
    );
  }
  const handleEdit = (dt: any) => {
    console.log({
      edit: dt,
    })
  };
  const handleDuplicate = (dt: any) => {
    setIsSelectCountry(true);
    setDuplicate(dt);
    // api.post(dt);
    // const newArr = [...packs];
    // controlR++;
    // const newdt = {...dt, _id: `${dt._id}${controlR}`}
    // newArr.push(newdt);
    // setPacks(newArr);

  };
  const handleHide = (dt: any) => {
    // api.put(dt)
    const newArr = [...packs];
    const newdt = {...dt, isHide: true};
    const index = newArr.findIndex(p => p._id === dt._id);
    newArr[index] = newdt;
    setPacks(newArr);
  };
  const handleHideOff = (dt: any) => {
    // api.put(dt)
    const newArr = [...packs];
    const newdt = {...dt, isHide: false};
    const index = newArr.findIndex(p => p._id === dt._id);
    newArr[index] = newdt;
    setPacks(newArr);
  };

  const handleDelete = (dt: any) => {
    // api.delete(dt)
    const newArr = [...packs];
    const index = newArr.findIndex(p => p._id === dt._id);
    newArr.splice(index, 1);
    setPacks(newArr);
  };

  const setPage = () => {
    //
  }

  const moveCard = (dragIndex: number, hoverIndex: number) => {
    console.log({
      dragIndex,
      hoverIndex,
    })
    const dragCard = packs[dragIndex]
    setPacks(
      update(packs, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard],
        ],
      }),
    )
  }

  let sizesComponents: any = {
    1: 'calc(26%)',
    2: 'calc(50%) calc(50%) calc(20%)',
    3: 'calc(35%) calc(35%) calc(35%) calc(45%)',
    4: 'calc(25%) calc(25%) calc(25%) calc(25%) calc(56%)',
    5: 'calc(21%) calc(21%) calc(21%) calc(21%) calc(21%) calc(60%)',
    6: 'calc(18%) calc(18%) calc(18%) calc(18%) calc(18%) calc(18%) calc(70%)',
    7: 'calc(15%) calc(15%) calc(15%) calc(15%) calc(15%) calc(15%) calc(15%) calc(77%)',
    8: 'calc(15%) calc(15%) calc(15%) calc(15%) calc(15%) calc(15%) calc(15%) calc(15%) calc(77%)',
    9: 'calc(35%) calc(35%) calc(35%) calc(35%) calc(35%) calc(35%) calc(35%) calc(35%) calc(35%) calc(35%)',
    10: 'calc(35%) calc(35%) calc(35%) calc(35%) calc(35%) calc(35%) calc(35%) calc(35%) calc(35%) calc(35%) calc(35%)',
    11: 'calc(35%) calc(35%) calc(35%) calc(35%) calc(35%) calc(35%) calc(35%) calc(35%) calc(35%) calc(35%) calc(35%) calc(35%)',
  }
  const nm  = packs?.length / 3;
  const numberInt = parseInt(String(nm), 10);
  const numberFormat = nm > numberInt ? numberInt + 1: nm;

    return (
      <ContainerHome img={banner} data={packs}>
        <Header setPage={setPage} />
        <div style={{ width: '80%', marginRight: 'auto', marginLeft: 'auto'}}>
          <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 200
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              width: '77%',
            }}>
              <span style={{color: '#fff', fontSize: 27}}>Packs Home</span>
              <div style={{opacity: 0.7, display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 7}}>
                <RiHome6Line color={'#ddd'} size={20} />
                <li style={{color: '#ddd', fontSize: 15, marginLeft: 7}}>Packs Home</li>
              </div>
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}>
              <Input>
                <input
                placeholder="Buscar Pack"
                type="text"
                onChange={(event: any) => setFilter(event.target.value)}
                />
                <GoSearch />
              </Input>
              <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <img src={br_logo} style={{height: 20, marginRight: 7}} alt='offlet'/>
                <select style={{
                  border: 'none',
                  backgroundColor: 'transparent',
                  fontWeight: '600',
                  color: '#fff'
                }} onChange={(value: any) => {}}>
                  <option value="br">Brazil</option>
                </select>
              </div>
              <Button onClick={() => setIsCreate(true)}>
                <span style={{color: '#fff', fontSize: 30, marginRight: 7}}>+</span>
                <span style={{color: '#fff', fontSize: 14, fontWeight: '600'}}>Novo pack</span>
              </Button>
            </div>
          </div>
          <DndProvider backend={HTML5Backend}>
              <div style={{
                  marginTop: 12,
                  display: 'grid',
                  gridTemplateRows: sizesComponents[numberFormat],
                  gridTemplateColumns: 'auto auto auto',
                  overflowY: 'scroll',
                  gridColumnGap: '1px',
                  gridRowGap: '1px',
                }} >
                {
                  packs?.map((dt: any, i: number) => {
                    return (
                    <CardTest
                      key={dt._id}
                      index={i}
                      id={dt._id}
                      text={dt.title}
                      data={dt}
                      handleEdit={handleEdit}
                      handleDuplicate={handleDuplicate}
                      handleHide={handleHide}
                      handleDelete={handleDelete}
                      moveCard={moveCard}
                      handleHideOff={handleHideOff}
                      />)
                  })
                }
              </div>
          </DndProvider>
        </div>
        {
          isCreate && <ModalPack setIsCreate={setIsCreate} />
        }
        {
          isSelectCountry && <ModalSelectCountry />
        }        
      </ContainerHome>
    );
};
export default Home;
