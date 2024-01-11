import { useEffect, useState } from "react"
import MyList from "./MyList";

function About() {
  const [data, setData] = useState(null);
    
  useEffect(() => {
    let mounted = true
    async function getData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts")
      const data = await res.json()

      if (mounted) {
        setData(data)
      }
    }

    getData()

    return () => {
      mounted = false
    }

  }, [])

  return (
    <div>
      <MyList data={data}/>
    </div>
  )
}

export default About