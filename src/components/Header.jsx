import React from "react"

function Header(props) {
  const logo = (
    <img
      src="https://www.google.com/images/icons/product/keep-512.png"
      alt="logo"
      style={{ width: 50, height: 50 }}
    />
  )
  return (
    <div className="header">
      {logo}

      <h3>SparkScribe</h3>
    </div>
  )
}

export default Header
