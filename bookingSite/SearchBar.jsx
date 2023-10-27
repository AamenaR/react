import React, { useState } from 'react'
import "./Styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from 'react-bootstrap';
import { DateRange } from 'react-date-range';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file


// functionally 
// const CheckInDate = ({startDate,endDate,setStartDate,setEndDate}) => {

// const [showInput, setShowInput] = useState(false)

// const handleSelect = (dates) => {
//   setStartDate(dates.selection.startDate)
//   setEndDate(dates.selection.endDate)
//   console.log(dates);
// }

// const selectionRange = {
//   startDate: startDate,
//   endDate: endDate,
//   key: 'selection',
// }

//   return (
//     <Col  className='bg-white me-1 p-3 rounded baap'>
//   {showInput === true ? 
//     <div className="check-in-date">
//     <DateRangePicker
//         ranges={[selectionRange]}
//         onChange={handleSelect}
//       />  
//     </div>
//   : null}

//     <div 
//       onClick={() => {
//         setShowInput(!showInput)
//       }}
//       >Check-in Date -- Check-out Date
//       </div>
//   </Col>
//   )
// }

// ////////////////////////////////////////////////////////////////////
// my code

const SelectDate = function(){
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const[show, setShow] = useState(false)
  const [state, setState] = useState([
    {
      startDate: startDate,
      endDate: endDate,
      key: 'selection'
    }
  ]);
  const handleSelect = (dates) => {
      setStartDate(dates.selection.startDate)
      setEndDate(dates.selection.endDate)
      console.log(dates);
  }
  
return(
<div>
<Col  className='bg-white me-1 p-3 rounded baap col-4'onClick={()=>{setShow(!show)}}>Check-in Date -- Check-out Date
{show === true ? <div className={'check-in-date'}>
<DateRange
  editableDateInputs={true}
  onChange={handleSelect}
  moveRangeOnFirstSelection={false}
  ranges={state}/>
</div>
: null}
</Col>
</div>
)
}

// #FFB700
// designing compo
function SearchBar() {
  return (
    <Container className='margin-t'>
        <Row className='bg-search rounded p-1 text-start fw-bold'>
            <Col className='bg-info me-1 p-3 rounded col-4'>Where are you going?</Col>  
            <SelectDate/>
            {/* <Col className='bg-white me-1 p-3 rounded col-4'>Where are you going?</Col> */}
            <Col className='bg-white p-3 rounded col-4'>1 adult  0 children  1 room</Col>
        </Row>
    </Container>
  )
}

export default SearchBar;
