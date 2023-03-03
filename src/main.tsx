import ReactDOM from 'react-dom/client'
//正确的样式引入
//样式初始化一般放在最前面
import "reset-css"
import { BrowserRouter } from "react-router-dom"
//UI框架样式

//全局样式
import "@/assets/styles/global.scss"
//组件的样式
import App from './App'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
