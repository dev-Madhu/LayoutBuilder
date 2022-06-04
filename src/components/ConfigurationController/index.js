// Write your code here

import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      console.log(showContent)
      console.log(showLeftNavbar)
      console.log(showRightNavbar)
      return (
        <div className="config-container">
          <h1 className="heading">Layout</h1>
          <div className="label-box">
            <input
              type="checkbox"
              id="checkbox1"
              className="check"
              onChange={onToggleShowContent}
            />
            <label htmlFor="checkbox1" className="input-label">
              Content
            </label>
          </div>
          <div className="label-box">
            <input
              type="checkbox"
              id="checkbox2"
              className="check"
              onChange={onToggleShowLeftNavbar}
            />
            <label htmlFor="checkbox2" className="input-label">
              Left Navbar
            </label>
          </div>
          <div className="label-box">
            <input
              type="checkbox"
              id="checkbox3"
              className="check"
              onChange={onToggleShowRightNavbar}
            />
            <label htmlFor="checkbox3" className="input-label">
              Right NavBar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
