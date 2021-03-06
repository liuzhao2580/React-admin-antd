import React from 'react'
import ReactDOM from 'react-dom'
import { ConfigProvider } from 'antd'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { Provider } from 'react-redux'
import store from './store'

// 导入全局样式
import '@/styles/index.less'

ReactDOM.render(
    <Provider store={store}>
        <ConfigProvider>
            <App />
        </ConfigProvider>
    </Provider>,
    document.getElementById('root')
)
serviceWorker.unregister()
