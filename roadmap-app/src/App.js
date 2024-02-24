import React from 'react';
import './App.css';

const dataArray = [
  { name: 'Kämppä scripti', status: 'Tekeillä', icon: 'bx bx-home' },
  { name: 'Serverin optimointi täysin', status: 'Tekeillä', icon: 'bx bxs-layer' },
  { name: 'Suurimmat bugit', status: 'Tekeillä', icon: 'bx bxs-wrench' },
  { name: 'Serverille tekemistä', status: 'Tulossa', icon: 'bx bx-walk' },
  { name: 'Serverin auto systeemit', status: 'Suunnitteella', icon: 'bx bxs-car' }
];

function App() {
  return (
    <div className="App">
      <div className='header'>
        <p className='title'>Roadmap</p>
      </div>
      <div className='roadmap'>
        {dataArray.map((item, index) => (
          <div key={index} className='map-box'>
            <div>
              <i id='map-icons' className={item.icon ? item.icon : 'bx bx-home'}></i>
            </div>
            <div className='map-info'>
              <p className='info name'>{item.name}</p>
              <p className='info status'>{item.status}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='footer'>
        <p className='server'>Cosmic <span><a href='https://fivem.net/' target='_blank'>Fivem</a></span></p>
        <a href='https://discord.gg/32ZZfsDjDG' target='_blank' className='discord'><i class='bx bxl-discord-alt'></i> Join discord</a>
      </div>
    </div>
  );
}

export default App;