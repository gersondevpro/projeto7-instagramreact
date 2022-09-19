import Corpo from "./Corpo"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

export default function App() {
    return (
        <div>
            <Navbar/>
            <div class="main">
                <Corpo/>
                <Sidebar/>
            </div>
        </div>
    )
}