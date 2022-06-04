// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => {
  const renderContentView = () => (
    <div className="content">
      <h1 className="content-head">Content</h1>
      <p className="description">
        Lorem ipsum dolor sit amet , consectetur adipiscing elit sed do eiusmod
        tempor incididunt ut libore et dolore magna aliqua Ut enim ad minim
        veniam.
      </p>
    </div>
  )

  const renderLeftNavbarView = () => (
    <div className="left-navbar">
      <h1 className="content-head">Left Navbar Menu</h1>
      <ul className="list-cont">
        <li className="list-item">Item 1</li>
        <li className="list-item">Item 2</li>
        <li className="list-item">Item 3</li>
        <li className="list-item">Item 4</li>
      </ul>
    </div>
  )

  const renderRightNavbarView = () => (
    <div className="right-navbar">
      <h1 className="content-head">Right Navbar Menu</h1>
      <div className="ad-box-container">
        <div className="ad-box">
          <p className="list-item">Ad 1</p>
        </div>
        <div className="ad-box">
          <p className="list-item">Ad 2</p>
        </div>
      </div>
    </div>
  )
  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent, showLeftNavbar, showRightNavbar} = value

        return (
          <div className="body-container">
            {showLeftNavbar && <>{renderLeftNavbarView()}</>}
            {showContent && <>{renderContentView()}</>}
            {showRightNavbar && <>{renderRightNavbarView()} </>}
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}
export default Body
