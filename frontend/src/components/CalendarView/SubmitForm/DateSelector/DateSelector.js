import { useState } from 'react';
import { Menu, Button, MenuItem } from '@material-ui/core';

const monthes = [
    'Janurary',
    '12:15am',
    'Callisto',
    'Dione',
    'Ganymede',
    'Hangouts Call',
    'Luna',
    'Oberon',
    'Phobos',
    'Pyxis',
    'Sedna',
    'Titania',
    'Triton',
    'Umbriel',
];//FINISH/FIX

const dates = [
    "00",
    "01"
];//FINISH

const years = [
    "2020",
    "2021",
    "2022",
    "2023"
]; //don't have to add more

function DateSelector(props) {
    const [monthAnchor, setMonthAnchor] = useState(null);
    const [dateAnchor, setDayAnchor] = useState(null);
    const [yearAnchor, setYearAnchor] = useState(null);
    const [m, setMonth] = useState("Month");
    const [d, setDay] = useState("Day");
    const [y, setYear] = useState("Year");

    function clear() {
        m = "Month";
        d = "Day";
        y = "Year";
    }

    function setDate(month,day,year) {
        if (month === "Janurary") {
            month = "1";
        }//FINSHED
        props.callBack(month, day, year);
    }

    function setDateMonth(e) {
        setDate(e,d,y);
    }
    function setDateDay(e) {
        setDate(m, e, y);
    }
    function setDateYear(e) {
        setDate(m, d, e);
    }

    //////////
    const handleMClick = (event) => {
        setMonthAnchor(event.currentTarget);
    };
    const handleMonthClick = (event) => {
        setMonth(event.target.textContent);
        handleMClose();
        setDateMonth(event.target.textContent);
    };
    const handleMClose = () => {
        setMonthAnchor(null);
    };
    ////////////////
    const handleDClick = (event) => {
        setDayAnchor(event.currentTarget);
    };
    const handleDayClick = (event) => {
        setDay(event.target.textContent);
        handleDClose();
        setDateDay(event.target.textContent);
    };
    const handleDClose = () => {
        setDayAnchor(null);
    };
    //////////////////
    const handleYClick = (event) => {
        setYearAnchor(event.currentTarget);
    };
    const handleYearClick = (event) => {
        setYear(event.target.textContent);
        handleYClose();
        setDateYear(event.target.textContent);
    };
    const handleYClose = () => {
        setYearAnchor(null);
    };

    return (
        <>
            <Button children={m} aria-controls="simple-menu" aria-haspopup="true" onClick={handleMClick} />
            <Menu
                id="simple-menu"
                anchorEl={monthAnchor}
                keepMounted
                open={Boolean(monthAnchor)}
                onClose={handleMClose}
                PaperProps={{ style: { maxHeight: 200 } }}
            >
                {monthes.map((month) => (
                    <MenuItem key={month.toString()} children={month} onClick={handleMonthClick} />
                ))}

            </Menu>
            <Button children={d} aria-controls="simple-menu" aria-haspopup="true" onClick={handleDClick} />
            <Menu
                id="simple-menu"
                anchorEl={dateAnchor}
                keepMounted
                open={Boolean(dateAnchor)}
                onClose={handleDClose}
                PaperProps={{ style: { maxHeight: 200 } }}
            >
                {dates.map((date) => (
                    <MenuItem key={date.toString()} children={date} onClick={handleDayClick} />
                ))}

            </Menu>
            <Button children={y} aria-controls="simple-menu" aria-haspopup="true" onClick={handleYClick} />
            <Menu
                id="simple-menu"
                anchorEl={yearAnchor}
                keepMounted
                open={Boolean(yearAnchor)}
                onClose={handleYClose}
                PaperProps={{ style: { maxHeight: 200 } }}
            >
                {years.map((year) => (
                    <MenuItem key={ year.toString() } children={year} onClick={handleYearClick} />
                ))}

            </Menu>
        </>
    );
}

export default DateSelector;