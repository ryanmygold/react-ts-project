import { Navigate } from "react-router-dom"
import { lazy } from "react"
import React from "react"
import Login from "@/views/Login"


const Home = lazy(() => import("@/components/Home"))
const Page1 = lazy(() => import("@/views/page1"))
const Page2 = lazy(() => import("@/views/page2"))
const Page301 = lazy(() => import("@/views/page301"))
const Page302 = lazy(() => import("@/views/page302"))
const Page303 = lazy(() => import("@/views/page303"))
const Page401 = lazy(() => import("@/views/page401"))
const Page402 = lazy(() => import("@/views/page402"))
const Page5 = lazy(() => import("@/views/page5"))

const withLoadingComponent = (comp: JSX.Element) => (
    <React.Suspense fallback={<div>Loading...</div>}>
        {comp}
    </React.Suspense>
)

const routes = [
    // 嵌套路由 开始-------------------
    {
        path: "/",
        element: <Navigate to="/login" />
    },
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/page1",
                element: withLoadingComponent(<Page1 />)
            },
            {
                path: "/page2",
                element: withLoadingComponent(<Page2 />)
            },
            {
                path: "/page3/page301",
                element: withLoadingComponent(<Page301 />)
            },
            {
                path: "/page3/page302",
                element: withLoadingComponent(<Page302 />)
            },
            {
                path: "/page3/page303",
                element: withLoadingComponent(<Page303 />)
            },
            {
                path: "/page4/page401",
                element: withLoadingComponent(<Page401 />)
            },
            {
                path: "/page4/page402",
                element: withLoadingComponent(<Page402 />)
            },
            {
                path: "/page5",
                element: withLoadingComponent(<Page5 />)
            },
            {
                path: "*",
                element: <Navigate to="/page1" />
            }
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "*",
        element: <Navigate to="/login" />
    }
]


export default routes