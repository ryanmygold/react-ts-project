import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import react, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('模块1', '/page1', <PieChartOutlined />),
    getItem('模块2', '/page2', <DesktopOutlined />),
    getItem('User', 'page3', <UserOutlined />, [
        getItem('Tom', '/page3/page301'),
        getItem('Bill', '/page3/page302'),
        getItem('Alex', '/page3/page303'),
    ]),
    getItem('Team', 'page4', <TeamOutlined />, [getItem('Team 1', '/page4/page401'), getItem('Team 2', '/page4/page402')]),
    getItem('Files', '/page5', <FileOutlined />),
];

const MainMenu: React.FC = () => {

    const navigateTo = useNavigate();
    const currentRoute = useLocation();
    

    // function findKey(obj: { key: string }) {
    //     return obj.key === currentRoute.pathname;
    // }
    // for (let i = 0; i < items.length; i++) {
    //     if (items[i]?.['children'] && items[i]?.['children'].length > 1 && items[i]?.
    //     ['children'].find(findKey)) {
    //         console.log(items[i]!.key);
    //         firstOpenKeys = items[i]!.key as string;
    //         break;
    //     }
    // }

    //处理刷新页面的时候展开的项
    let firstOpenKeys: string = ""
    function findKey(obj: { key: string }) {
        return obj.key === currentRoute.pathname;
    }

    //some: 查找数据 有符合条件的就返回true，找到了就break了，没找到返回false
    //find: 查找数组符合函数条件的值  返回一个符合条件的数组
    for (const i of items) {
        const children = i?.['children'];
        if (children?.length > 1 && children?.some(findKey)) {
            console.log(i?.key);
            firstOpenKeys = i?.key as string;
            break;
        }
    }


    useEffect(() => {
        console.log("加载了菜单", currentRoute);
    }, [currentRoute])


    const handClick = (e: { key: string }) => {
        console.log(e.key);
        // 点击跳转到对应的路由 编程式导航跳转， 利用到一个hook :useNavigate
        navigateTo(e.key);
    }

    // openKeys 当前所有展开着的数组，一开始给空默认不展示
    const [openKeys, setOpenKeys] = useState([firstOpenKeys]);

    const onhandChange = (openKeys: string[]) => {
        // 点击展开和收缩的时候执行这里的代码
        console.log(openKeys);// 这些展开这的openKeys的数组
        setOpenKeys([openKeys[openKeys.length - 1]])
    }




    return (
        <Menu
            theme="dark"
            defaultSelectedKeys={[currentRoute.pathname]}
            mode="inline"
            items={items}
            onClick={handClick}
            openKeys={openKeys}
            onOpenChange={onhandChange}
        />
    )
}

export default MainMenu