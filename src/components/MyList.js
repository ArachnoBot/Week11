function MyList(props) {
  const data = props.data
  let listItems
  if (data) {
    listItems = data.map((item) => {
      return (
        <li key={item.id}>{item.title}</li>
      )
    })
  }


  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  )
}

export default MyList