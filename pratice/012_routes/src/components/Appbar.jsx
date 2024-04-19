// client side routing
import { useNavigate } from "react-router-dom";

export default function Appbar() {
    const navigate = useNavigate();
    return (
        <div>
            <button
                onClick={() => {
                    // window.location.href = "/";
                    navigate("/");
                }}
            >
                Landing Page
            </button>
            <button
                onClick={() => {
                    // window.location.href = "/dashboard";
                    navigate("/dashboard");
                }}
            >
                Dashboard Page
            </button>
        </div>
    );
}
