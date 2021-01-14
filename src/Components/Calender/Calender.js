import {useState} from 'react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import img from '../../images/Mask Group 1.png'
import './Calender.css'
import header from '../../images/Mask Group 2.png'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Appoinment from './Appoinment';
const Calender = () => {
const [selectedDate, setSelectedDate] = useState({
    checkIn:new Date(),
    checkOut:new Date()
});
const handleCheckInDate = (date) => {
const newDate = {...setSelectedDate}
      newDate.checkIn = date;
    setSelectedDate(newDate);

  };

  const handleCheckOutDate = (date) => {
    const newDate = {...setSelectedDate}
          newDate.checkOut = date;
        setSelectedDate(newDate);
    
      };
    

    return (
        <div style={{ backgroundImage: ` linear-gradient(rgba(0,0,0,0.5),#009688), url(${header })`}} className="calender-area">
            <div className="container">
            <div className="row">
                <div className="col-md-8">
                <div className="calender">
                <div className="calender-text">
                <h2>APPOINTMENT</h2>
                </div>
                  
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Check In Date"
          value={selectedDate.checkIn}
          onChange={handleCheckInDate}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Check Out Date"
          format="MM/dd/yyyy"
          value={selectedDate.checkOut}
          onChange={handleCheckOutDate}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
                    </div>
                </div>

              <div className="col-md-4">
              <div className="calender-img">
                <img src={img} alt="img" className="img-fluid" />
                </div>
              </div>
            </div>
            </div>
            <Appoinment></Appoinment>
        </div>
    );
};

export default Calender;