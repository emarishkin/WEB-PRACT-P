import {Header} from './components/Header'
import {Footer} from './components/Footer'
import React from 'react';
import {Items} from './components/items'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      items:[
        {
          id:1,
          title:'грязный шкаф',
          img:'грязный шкаф.jpg',
          category:'wardrobes',
          price:'1999',
        },
        {
          id:2,
          title:'белый стул',
          img:'белый стул.webp',
          category:'chairs',
          price:'1000',
        },
        {
          id:3,
          title:'стул хороший',
          img:'стул хороший.jpg',
          category:'chairs',
          price:'10000',
        },
        {
          id:4,
          title:'кровать историческая',
          img:'кровать историческая.webp',
          category:'bed',
          price:'17000.1',
        },
        {
          id:5,
          title:'кровать доисторическая',
          img:'кровать доисторическая.webp',
          category:'bed',
          price:'не по карману',
        }
      ]
    }
  }
  render(){
  return (
    <div className='wrapper'>
      <Header />
      <Items items={this.state.items}/>
      <Footer />
    </div>
  );
}
}

export default App;
