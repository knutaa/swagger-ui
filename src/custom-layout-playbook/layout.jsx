
import React from "react"

export default class CustomLayoutPlaybook extends React.Component {
    render() {
      const {
        getComponent
      } = this.props
  
      let Container = getComponent("Container")
      let Row = getComponent("Row")
      let Col = getComponent("Col")
  
      let SvgAssets = getComponent("SvgAssets")
      let InfoContainer = getComponent("InfoContainer", true)
      let VersionPragmaFilter = getComponent("VersionPragmaFilter")
      let Operations = getComponent("operations", true)
      let Models = getComponent("Models", true)
      let Errors = getComponent("errors", true)
  
      return (
        <div className='swagger-ui'>
          <SvgAssets/>
          <Row>
            <Col>
              <Operations />
            </Col>
          </Row>
        </div>
      )
    }
  }
  
  // // Create the plugin that provides our layout component
  // const CustomLayoutPlaybookPlugin = () => {
  //   return {
  //     components: {
  //       CustomLayoutPlaybook: CustomLayoutPlaybook
  //     }
  //   }
  // }
 
