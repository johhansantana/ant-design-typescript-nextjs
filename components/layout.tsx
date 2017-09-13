import * as React from 'react'
import Head from 'next/head';
import { LocaleProvider } from 'antd'
import { esES } from '!/lib/locales'
import CSSTag from './CSSTag';
let antd
if (process.env.NODE_ENV !== 'production') {
  antd = require('!/styles/antd.scss')
}

interface State {
  production: boolean
}
interface Props {
  title: string,
  children: React.ReactNode
}

class Layout extends React.Component {
  state: State
  props: Props
  constructor() {
    super();

    this.state = {
      production: process.env.NODE_ENV === 'production'
    };
  }

  render() {
    const { title, children } = this.props;
    const { production } = this.state;
    return (
      <LocaleProvider locale={esES}>
        <div>
          <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
            {
              production &&
              <link rel="stylesheet" href="/static/css/app.css" />
            }
          </Head>
          <CSSTag style={antd} />

          {children}

        </div>
      </LocaleProvider>
    );
  }
}

export default Layout;