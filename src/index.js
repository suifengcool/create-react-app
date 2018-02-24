import React from 'react'
// import ReactDOM from 'react-dom';  此时，需调用ReactDOM.render()方法
import { render } from 'react-dom'
import { createStore } from 'redux'

/*
* connect方法生成容器组件以后，需要让容器组件拿到state对象，才能生成 UI 组件的参数。
* 一种解决方法是将state对象作为参数，传入容器组件。但是，这样做比较麻烦，尤其是容器组件可能在很深的层级，一级级将state传下去就很麻烦。
* React-Redux 提供Provider组件，可以让容器组件拿到state。
* Provider在根组件外面包了一层，这样一来，App的所有子组件就默认都可以拿到state了。
*/
import { Provider } from 'react-redux'

import App from './components/App'
import reducer from './reducers'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// createStore方法用来注册一个store，返回值为包含了若干方法的对象
const store = createStore(reducer)

render(
    <Provider store={store}>
    	<App />
    </Provider>,
    document.getElementById('root')
)

/*
*  用于在生产环境中为用户在本地创建一个service worker 来缓存资源到本地，提升应用的访问速度。
*  service worker 是在后台运行的一个线程，可以用来处理离线缓存、消息推送、后台自动更新等任务。
*  registerServiceWorker就是为react项目注册了一个service worker，用来做资源的缓存，这样你下次访问时，就可以更快的获取资源。
*  而且因为资源被缓存，所以即使在离线的情况下也可以访问应用（此时使用的资源是之前缓存的资源）。
*  注意，registerServiceWorker注册的service worker 只在生产环境中生效（process.env.NODE_ENV === 'production'）。
*/
registerServiceWorker();
