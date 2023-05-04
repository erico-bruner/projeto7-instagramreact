import Posts from "./Posts";
import SideBar from "./SideBar";
import Stories from "./Stories/index";

export default function Body() {
    return (
        <div class="corpo">
            <div class="esquerda">
                <Stories />
                <Posts />
            </div>

            <SideBar />
        </div>
    )
}