import React, { useEffect, useState } from "react";

const GreetingTitle : React.FC = () => {
    const [greeting, setGreeting] =  useState<string>()

    useEffect(() => {
        const currentHour = new Date().getHours()
        if (currentHour < 12) {
            setGreeting("Good morning!")
        } else if (currentHour < 18) {
            setGreeting("Good afternoon!")
        } else {
            setGreeting("Good evening!")
        }
    })
  return <div>{greeting}</div>;
};

export default GreetingTitle;
