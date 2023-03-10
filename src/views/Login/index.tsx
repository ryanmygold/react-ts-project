import { Button, Input, message, Space } from 'antd';
import { ChangeEvent, useEffect, useState } from 'react'
import initLoginBg from "./init.ts"
import styles from "./login.module.scss"
import "./login.scss"
import { CaptchaAPI, LoginAPI } from "@/request/api"
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigateTo = useNavigate()
    // 背景处理 组件加载完后加载背景s
    useEffect(() => {
        initLoginBg()
        window.onresize = function () { initLoginBg() };
        getCaptchImg()
    }, []);

    const [usernameVal, setUsernameVal] = useState("");
    const [passwordVal, setPasswordVal] = useState("");
    const [captchaVal, setCaptchaVal] = useState("");
    //定义一个变量保存验证码图片信息
    const [captchaImg, setCaptchaImg] = useState("");
    const usernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUsernameVal(e.target.value)
    }
    const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordVal(e.target.value)
    }
    const captchaChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCaptchaVal(e.target.value)
    }
    // 点击登录按钮的事件
    const gotoLogin = async () => {
        console.log("用户输入的用户名和密码 还有验证码分别为：",
            usernameVal, passwordVal, captchaVal);
        //验证是否为空值
        if (!usernameVal.trim() || !passwordVal.trim() || !captchaVal.trim()) {
            message.warning("请输入所以信息")
        }

        let loginAPIRes = await LoginAPI({
            username: usernameVal,
            password: passwordVal,
            code: captchaVal,
            uuid: sessionStorage.getItem("uuid") as string
        });

        console.log("1111",loginAPIRes.token);

        if (loginAPIRes.code === 200) {
            //提示登陆成功
            message.success("登陆成功");
            //保存token
            sessionStorage.setItem("react-ts-project-token", loginAPIRes.token);
            //跳转到page1
            navigateTo("/page1")
            //删除uuid
            sessionStorage.removeItem("uuid")
        }

    }

    const getCaptchImg = async () => {
        // message.warning(111)
        //验证码的请求
        // captchaAPI().then((res) => {
        //     console.log(res)
        // })
        let captchaAPIRes = await CaptchaAPI();
        console.log(captchaAPIRes);
        if (captchaAPIRes.code === 200) {
            // 1.把图片数据显示在img上
            setCaptchaImg("data:image/gif;base64," + captchaAPIRes.img);
            // 2.本地保存uuid给登录的时候用
            sessionStorage.setItem("uuid", captchaAPIRes.uuid)
        }


    }
    return (
        <div className={styles.loginPage}>
            {/* 存放背景 */}
            <canvas id="canvas" style={{ display: "block" }}></canvas>
            {/* 登录盒子 */}
            <div className={styles.loginBox + " loginbox "}>
                {/* 标题部分 */}
                <div className={styles.title}>
                    <h1>前端&nbsp;·&nbsp;通用后台系统</h1>
                    <p>Strive Everyday</p>
                </div>
                {/* 表单部分 */}
                <div className='from'>
                    <Space direction="vertical" size="large" style={{
                        display: 'flex'
                    }}>
                        <Input placeholder="用户名" className='ipt' autoComplete="off" onChange={usernameChange} />
                        <Input.Password placeholder="密码" className='ipt' autoComplete="off" onChange={passwordChange} />
                        {/* 验证码 */}
                        <div className='captchaBox'>
                            <Input placeholder="验证码" className='ipt' onChange={captchaChange} />
                            <div className="captchaImg" onClick={getCaptchImg}>
                                <img src={captchaImg} alt="" height="38px" />
                            </div>
                        </div>
                        <Button type='primary' block onClick={gotoLogin}>登录</Button>
                    </Space>
                </div>
            </div>
        </div >
    )
}
export default Login