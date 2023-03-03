import 'antd/dist/antd.css';
import { useRoutes } from "react-router-dom"

import router from "@/routers/index"

function App() {

  const outlet = useRoutes(router)
  return (
    <div>
      {outlet}
    </div>
  )
}

export default App
