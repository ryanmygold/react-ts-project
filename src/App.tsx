import 'antd/dist/antd.css';
import { useLocation, useNavigate, useRoutes } from "react-router-dom"

import router from "@/routers/index"
import { useEffect } from 'react';
import { message } from 'antd';



const ToPage1 = () => {
  const navigateTo = useNavigate();
  useEffect(() => {
    navigateTo("./page1");
    message.warning("你已经登录！")
  }, [])
  return <div></div>
}

const ToLogin = () => {
  const navigateTo = useNavigate();
  useEffect(() => {
    navigateTo("./login");
    message.warning("你还没有登录，请先登录！")
  }, [])
  return <div></div>
}

const BeforRouteEnter = () => {
  const location = useLocation();
  const outlet = useRoutes(router)
  let token = sessionStorage.getItem("react-ts-project-token");

  if (location.pathname === "/login" && token) {
    return <ToPage1 />
  }
  if (location.pathname !== "/" && location.pathname !== "/login" && !token) {
    message.error(location.pathname)
    return <ToLogin />
  }

  return outlet
}

function App() {


  // 1.如果访问的是登录页面，并且有token，跳转到首页
  // 2.如果访问的不是登录页面，并且没有token，跳转到登录页
  // 3.其余都可以正常跳转

  return (
    <BeforRouteEnter />
  )
}

export default App
