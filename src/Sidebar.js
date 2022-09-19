import Sugestoes from "./Sugestoes";
import Usuario from "./Usuario";

export default function Sidebar() {
    return(
        <div class="menu-right">
            <Usuario/>
            <Sugestoes/>
        </div>
    )
} 