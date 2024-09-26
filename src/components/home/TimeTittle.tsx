import React, { useEffect, useState } from "react";

const TimeTitle: React.FC = () => {
    const [currentDate, setCurrentDate] = useState<string>('');

    useEffect(() => {
        const today = new Date()
        const options: Intl.DateTimeFormatOptions = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }
        const formattedDate = today.toLocaleDateString('en-US', options)
        setCurrentDate(formattedDate)
    })

  return <div>Today is {currentDate}</div>;
};

export default TimeTitle;
