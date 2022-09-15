import {useEffect, useState } from 'react'

const Time = () => {
  const [_time, setTime] = useState<any>();
  // clock
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTime(
        date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    }, 1000);
  }, []);

  const date = new Date();
  
  let timeDisplay = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  })

    return (
    <>{timeDisplay}</>
    )
}

export default Time
