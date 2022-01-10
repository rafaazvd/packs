import React, {useState} from 'react';
import {RiHome6Line} from 'react-icons/ri';
import {GoSearch} from 'react-icons/go';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
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
  ContainerHome,
} from './styles';

const Home = () => {
  const [packs, setPacks] = useState<any>([
    {
      _id: 'kncjqieeeeq',
      templateImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAy1FrANmzisZbDig7sRlxV8b5i9T-JQCCXg&usqp=CAU',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS9ERN1m83jDo2rL_lHng9Do9bCfPLWeB4xg&usqp=CAU',
      title: 'NBA Sport',
      category: 'Eletronicos, Clothes',
      api: 'Sports Shopping',
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
      tags: ['Headphone', 'Lebron James', 'beats', 'Fones'],
    },
    {
      _id: 'kncjcedd2dfrqieeq',
      templateImage: 'https://sportshub.cbsistatic.com/i/r/2020/03/13/72c3988a-1c48-45bb-a118-268c14877b46/thumbnail/1200x675/80364df95c08a36c8c0ec94869507f71/march-madness-logo.jpg',
      image: 'https://i0.wp.com/livebasketballbr.com/wp-content/uploads/2020/08/nba-logo.jpg?fit=1280%2C1024&ssl=1',
      title: 'NBA Products',
      category: 'Eletronicos, Clothes',
      api: 'Sports Shopping',
      tags: ['Headphone', 'Lebron James', 'beats', 'Fones'],
    },
    {
      _id: 'kncjceddd2dfrqieeq',
      templateImage: 'https://sportshub.cbsistatic.com/i/r/2020/03/13/72c3988a-1c48-45bb-a118-268c14877b46/thumbnail/1200x675/80364df95c08a36c8c0ec94869507f71/march-madness-logo.jpg',
      image: 'https://i0.wp.com/livebasketballbr.com/wp-content/uploads/2020/08/nba-logo.jpg?fit=1280%2C1024&ssl=1',
      title: 'NBA Products',
      category: 'Eletronicos, Clothes',
      api: 'Sports Shopping',
      tags: ['Headphone', 'Lebron James', 'beats', 'Fones'],
    },
  ]);
  const [filter, setFilter] = useState();
  const [isCreate, setIsCreate] = useState(false);


  let controlR = 1;
  const handleEdit = (dt: any) => {
    console.log({
      edit: dt,
    })
  };
  const handleDuplicate = (dt: any) => {
    // api.post(dt);
    const newArr = [...packs];
    controlR++;
    const newdt = {...dt, _id: `${dt._id}${controlR}`}
    newArr.push(newdt);
    setPacks(newArr);
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
                  gridTemplateColumns: 'repeat(3, 1fr)',
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
      </ContainerHome>
    );
};
export default Home;
