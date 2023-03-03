import { Button, Input, Space } from 'antd';
import { ChangeEvent, useEffect, useState } from 'react'
import initLoginBg from "./init.ts"
import styles from "./login.module.scss"
import "./login.scss"

const Login = () => {
    // 背景处理 组件加载完后加载背景s
    useEffect(() => {
        initLoginBg()
        window.onresize = function () { initLoginBg() }
    }, []);

    const [usernameVal, setUsernameVal] = useState("");
    const [passwordVal, setPasswordVal] = useState("");
    const [captchaVal, setCaptchaVal] = useState("");
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
    const gotoLogin = () => {
        console.log("用户输入的用户名和密码 还有验证码分别为：",
            usernameVal, passwordVal, captchaVal);
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
                        <Input placeholder="用户名" className='ipt' />
                        <Input.Password placeholder="密码" className='ipt' />
                        {/* 验证码 */}
                        <div className='captchaBox'>
                            <Input placeholder="验证码" className='ipt' />
                            <div className="captchaImg">
                                <img src="data:image/gif;base64,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" height="38" alt="" />
                            </div>
                        </div>
                        <Button type='primary' block>登录</Button>
                    </Space>
                </div>
            </div>
        </div >
    )
}
export default Login