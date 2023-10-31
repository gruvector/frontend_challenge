import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const Container = styled.div`
  width: 300px;
  border: 1px solid black;
  margin: 0 auto;
  box-shadow: 10px 10px 0px black;
`

const MonthText = styled.div`
  font-size: 26px;
  font-weight: bold;
  text-align: center;
`

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dates, setDates] = useState([]);
  const [calendar, setCalendar] = useState({
    month: selectedDay.getMonth(),
    year: selectedDay.getFullYear(),
  });


  useEffect(() => {}, [])

  return (
    <div style={{ width: '100%', paddingTop: 50 }}>
      <Container>
        <MonthText>
          {months[calendar.month]}
        </MonthText>
      </Container>
    </div>
  );
}

export default App;
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
      


//       </header>
//     </div>
//   );
// }

// export default App;
