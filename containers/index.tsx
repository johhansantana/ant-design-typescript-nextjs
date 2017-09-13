import * as React from 'react'
import { DatePicker, LocaleProvider } from 'antd'
import enUS from 'antd/lib/locale-provider/en_US'
import Layout from '!/components/layout'

class Index extends React.Component {
  render() {
    return (
      <Layout title="Login">
        <LocaleProvider locale={enUS}>
          <div>
            <DatePicker />
          </div>
        </LocaleProvider>
      </Layout>
    )
  }
}

export default Index;
