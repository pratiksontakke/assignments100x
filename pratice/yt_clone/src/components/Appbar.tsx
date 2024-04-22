import Searchbar from "./Searchbar";

export default function Appbar() {
    return (
        <div className="flex justify-between mt-2 mb-2">
            <div>Youtube</div>
            <div>
                <Searchbar />
            </div>
            <div>Sign in</div>
        </div>
    );
}
