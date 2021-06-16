import React from "react"

const Spinner = ({ msg }) => {
  return (
    <div className="ui active inverted dimmer">
      <div className="ui text big loader">{msg}</div>
    </div>
  )
}

Spinner.defaultProps = {
  msg: "Application is Loading...",
}

export default Spinner
