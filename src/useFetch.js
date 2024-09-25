import {useEffect, useState} from 'react';

const useFetch = (url) => {
  
  const[data,setData] = useState(null);
  const[isPending,setisPending] = useState(true);
  const [error, setError] = useState(null);

    useEffect(() => {
      const abort = new AbortController();
      setTimeout(() => {
        fetch(url,{signal:abort.signal})
        .then(res => {
          if (!res.ok) {
            throw Error('could not fetch the data for that resource');
          } 
          return res.json();
        })
        .then(data => {
          setisPending(false);
          setData(data);
          setError(null);
        })
        .catch(err => {
          if(err.name === 'AbortError') {
            console.log('fetch aborted');
          }
          else {
          setisPending(false);
          setError(err.message);
          }
        })
      }, 1000);

      return ()=> abort.abort();
    }, [url])
  
    return {data,isPending,error};
}
 
export default useFetch;