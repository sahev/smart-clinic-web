import { forEach } from 'lodash'
import Vue from 'vue'

const components = require.context('../components/xray')
forEach(components.keys(), (fileName) => {
  const componentConfig = components(fileName)
  const componentName = fileName.split('/').pop().split('.')[0]
  Vue.component(componentName, componentConfig.default || componentConfig)
})
