import React, {useState} from 'react';

import CardPack from '../../components/CardPack';

const Home = () => {
  const [packs, setPacks] = useState([
    {
      _id: 'kncjqieeeeq',
      templateImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAy1FrANmzisZbDig7sRlxV8b5i9T-JQCCXg&usqp=CAU',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS9ERN1m83jDo2rL_lHng9Do9bCfPLWeB4xg&usqp=CAU',
      title: 'NBA Products',
      subTitle: 'Eletronicos, Clothes',
      api: 'Sports Shopping',
      isHide: false,
      tags: ['Headphone', 'Lebron James', 'beats', 'Fones'],
    },
    {
      _id: 'kncjqieecvwvfq',
      templateImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS9ERN1m83jDo2rL_lHng9Do9bCfPLWeB4xg&usqp=CAU',
      image: 'https://i0.wp.com/livebasketballbr.com/wp-content/uploads/2020/08/nba-logo.jpg?fit=1280%2C1024&ssl=1',
      title: 'NBA Products',
      subTitle: 'Eletronicos, Clothes',
      api: 'Sports Shopping',
      isHide: false,
      tags: ['Headphone', 'Lebron James', 'beats', 'Fones'],
    },
    {
      _id: 'knecfvfwvcjqieeq',
      templateImage: 'https://www.ocregister.com/wp-content/uploads/2021/05/imageedit_1_7474432946.jpg?w=593',
      image: 'https://i0.wp.com/livebasketballbr.com/wp-content/uploads/2020/08/nba-logo.jpg?fit=1280%2C1024&ssl=1',
      title: 'NBA Products',
      subTitle: 'Eletronicos, Clothes',
      api: 'Sports Shopping',
      isHide: false,
      tags: ['Headphone', 'Lebron James','Headphone', 'LebronJames', 'beats', 'Fones', 'testes'],
    },
    {
      _id: 'kncjced2dfrqieeq',
      templateImage: 'https://sportshub.cbsistatic.com/i/r/2020/03/13/72c3988a-1c48-45bb-a118-268c14877b46/thumbnail/1200x675/80364df95c08a36c8c0ec94869507f71/march-madness-logo.jpg',
      image: 'https://i0.wp.com/livebasketballbr.com/wp-content/uploads/2020/08/nba-logo.jpg?fit=1280%2C1024&ssl=1',
      title: 'NBA Products',
      subTitle: 'Eletronicos, Clothes',
      api: 'Sports Shopping',
      tags: ['Headphone', 'Lebron James', 'beats', 'Fones'],
    },
    {
      _id: 'kncjcedd2dfrqieeq',
      templateImage: 'https://sportshub.cbsistatic.com/i/r/2020/03/13/72c3988a-1c48-45bb-a118-268c14877b46/thumbnail/1200x675/80364df95c08a36c8c0ec94869507f71/march-madness-logo.jpg',
      image: 'https://i0.wp.com/livebasketballbr.com/wp-content/uploads/2020/08/nba-logo.jpg?fit=1280%2C1024&ssl=1',
      title: 'NBA Products',
      subTitle: 'Eletronicos, Clothes',
      api: 'Sports Shopping',
      tags: ['Headphone', 'Lebron James', 'beats', 'Fones'],
    },
    {
      _id: 'kncjceddd2dfrqieeq',
      templateImage: 'https://sportshub.cbsistatic.com/i/r/2020/03/13/72c3988a-1c48-45bb-a118-268c14877b46/thumbnail/1200x675/80364df95c08a36c8c0ec94869507f71/march-madness-logo.jpg',
      image: 'https://i0.wp.com/livebasketballbr.com/wp-content/uploads/2020/08/nba-logo.jpg?fit=1280%2C1024&ssl=1',
      title: 'NBA Products',
      subTitle: 'Eletronicos, Clothes',
      api: 'Sports Shopping',
      tags: ['Headphone', 'Lebron James', 'beats', 'Fones'],
    },
  ]);
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
  const handleDelete = (dt: any) => {
    // api.delete(dt)
    const newArr = [...packs];
    const index = newArr.findIndex(p => p._id === dt._id);
    newArr.splice(index, 1);
    setPacks(newArr);
  };

  const sizesComponents = {
    1: 'calc(26%)',
    2: 'calc(50%) calc(26%)',
    3: 'calc(35%) calc(35%) calc(35%)',
  }
  // const nm  = packs?.length <= 3 ? 1 :
  //  packs?.length <= 6 ? 2 : 3;
  const nm  = packs?.length / 3;
  const numberInt = parseInt(String(nm), 10);
  console.log({
    nm,
    numberInt,
  })
  const numberFormat = nm > numberInt ? numberInt + 1: nm;

    return (
      <div>
        <div className="grid-articles">
        {
          packs?.map(dt => (
            <CardPack
            key={dt._id} data={dt}
            handleEdit={handleEdit}
            handleDuplicate={handleDuplicate}
            handleHide={handleHide}
            handleDelete={handleDelete}
            />
          ))
        }            
        </div>
        {/* <div style={{minHeight: '400px', maxHeight: '400px'}}>
          <h1>oi</h1>
        </div> */}
      </div>
    );
};
export default Home;
