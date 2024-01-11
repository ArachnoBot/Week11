function MyHOC(Component) {
  return (props) => ( 
    <div className="wrapper">
      <Component {...props} />
    </div>
  )
}

export default MyHOC