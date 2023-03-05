import React, { useState, useEffect } from 'react';
import { API_GET_DATA } from './global/constants'
import Panel from './Panel';
import "./index.css";

import List from './pages/Home/components/List'

async function fetchData(setData) {
    const res = await fetch(API_GET_DATA)
    const { data } = await res.json()
    setData(data)
  }
  

const Dashboard = () => {

  const [activePanel, setActivePanel] = useState([]);

  const handlePanelClick = (panelId) => {
    setActivePanel(panelId);
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(setData)
  }, [])

//   function addItem() {
//     submittingStatus.current = true
//     add(function (prevData) {
//       return [       
//         {
//           id: v4(),
//           note,
//           date,
//           time,
//         },
//         ...prevData,
//       ];
//     });
//   }

  return (
    <div>
      <h1>Dashboard</h1>
      {/* <div>
        <Panel
          id="panel1"
          title="Panel 1"
          isActive={activePanel === 'panel1'}
          onClick={handlePanelClick}
        >
          <p>Content for panel 1</p>
        </Panel>
        <Panel
          id="panel2"
          title="Panel 2"
          isActive={activePanel === 'panel2'}
          onClick={handlePanelClick}
        >
          <p>Content for panel 2</p>
        </Panel>
        <Panel
          id="panel3"
          title="Panel 3"
          isActive={activePanel === 'panel3'}
          onClick={handlePanelClick}
        >
          <p>Content for panel 3</p>
        </Panel>
    </div> */}

    {data.map((item) => {
        const {note, date, time ,id } = item;
        return (
            <Panel
                id={id}
                title={note}
                isActive={activePanel === id}
                onClick={handlePanelClick}
            >
            <button className="add">join</button>
            <button className="add">left</button>
            </Panel>
        )
    })}
    </div>
  );
};

export default Dashboard;
