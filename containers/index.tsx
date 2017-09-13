import * as React from 'react'
import { DatePicker } from 'antd'
import Layout from '!/components/layout'

class Index extends React.Component {
  render() {
    return (
      <Layout title="Login">
        <DatePicker />
      </Layout>
    )
  }
}

export default Index;
