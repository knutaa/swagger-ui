import CustomLayoutPlaybook from "./layout"
import TopbarPlugin from "plugins/topbar"
import ConfigsPlugin from "corePlugins/configs"

// the CustomLayoutPlaybook preset

let preset = [
  TopbarPlugin,
  ConfigsPlugin,
  () => {
    return {
      components: { CustomLayoutPlaybook }
    }
  }
]

module.exports = preset
