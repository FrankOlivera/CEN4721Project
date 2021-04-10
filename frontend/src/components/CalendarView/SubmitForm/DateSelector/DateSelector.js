import { useState, useEffect } from 'react';
import { Menu, Button, MenuItem } from '@material-ui/core';

const monthes = [
    'Janurary',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'Decemeber'
];

const dates = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
    30, 31
];

const dates2 = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
    30
];

const dates3 = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28
];

const dates4 = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29
];

const years = [
    "2020",
    "2021",
    "2022",
    "2023"
];

const DateSelector = ({ date, setEventData, eventData, numberToMonth  }) =>{
    const [monthAnchor, setMonthAnchor] = useState(null);
    const [dateAnchor, setDayAnchor] = useState(null);
    const [yearAnchor, setYearAnchor] = useState(null);
    const [m, setMonth] = useState(numberToMonth(date.getMonth()));
    const [d, setDay] = useState(date.getDate().toString());
    const [y, setYear] = useState(date.getFullYear().toString());
    const [daysToUse, setDaysToUse] = useState(dates);

    useEffect(() => {
        setMonth(numberToMonth(date.getMonth()));
        setDay(date.getDate().toString());
        setYear(date.getFullYear().toString());
        monthChangeDays(numberToMonth(date.getMonth()));
    }, [date]);

    function setDate(month, day, year) {
        const newDate = month.toString() + day.toString() + year.toString();
        setEventData({ ...eventData, date: newDate });
    }

    //////////
    const handleDClick = (event) => { setDayAnchor(event.currentTarget); };
    const handleMClick = (event) => { setMonthAnchor(event.currentTarget); };
    const handleYClick = (event) => { setYearAnchor(event.currentTarget); };
    
    const handleDClose = () => { setDayAnchor(null); };
    const handleMClose = () => { setMonthAnchor(null); };
    const handleYClose = () => { setYearAnchor(null); };
    ////////////////

    const handleDayClick = (event) => {
        setDay(event.target.textContent);
        handleDClose();
        setDate(m, event.target.textContent, y);
    };
    const handleMonthClick = (event) => {
        setMonth(event.target.textContent);
        handleMClose();
        setDate(event.target.textContent, d, y);
        monthChangeDays(event.target.textContent);
        
    };
    const handleYearClick = (event) => {
        setYear(event.target.textContent);
        handleYClose();
        setDate(m, d, event.target.textContent);
    };

    const monthChangeDays = (e) =>{
        if (e === "Janurary" || e === "March" || e === "May" || e === "July" || e === "August" || e === "October" || e === "December") {
            setDaysToUse(dates);
        }
        else if (e === "February") {
            if (y % 4 === 0) {
                if (d === "30" || d === "31") {
                    setDay("29");
                }
                setDaysToUse(dates4);
            }
            else {
                if (d === "29" || d === "30" || d === "31") {
                    setDay("28");
                }

                setDaysToUse(dates3);
            }
        }
        else { if (d === "31") { setDay("30"); } setDaysToUse(dates2); }
    }

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
                    <MenuItem selected={ month.toString() === m } key={month.toString()} children={month} onClick={handleMonthClick} />
                ))}

            </Menu>
            <Button children={d.toString()} aria-controls="simple-menu" aria-haspopup="true" onClick={handleDClick} />
            <Menu
                id="simple-menu"
                anchorEl={dateAnchor}
                keepMounted
                open={Boolean(dateAnchor)}
                onClose={handleDClose}
                PaperProps={{ style: { maxHeight: 200 } }}
            >
                {
                    daysToUse.map((date) => (
                        <MenuItem selected={date.toString() === d} key={date.toString()} children={date} onClick={handleDayClick} />
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
                    <MenuItem selected={ year.toString() === y } key={ year.toString() } children={year} onClick={handleYearClick} />
                ))}

            </Menu>
        </>
    );
}

export default DateSelector;