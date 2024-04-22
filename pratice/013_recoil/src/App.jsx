import { useRecoilValue, useSetRecoilState } from "recoil";
import {
    jobsAtom,
    messagingAtom,
    networkAtom,
    notificationsAtom,
    totalNotificationSelector,
} from "./store/atoms/atoms";
import "./App.css";

function App() {
    const networkCount = useRecoilValue(networkAtom);
    const jobsCount = useRecoilValue(jobsAtom);
    const notificationsCount = useRecoilValue(notificationsAtom);
    const messagingCount = useRecoilValue(messagingAtom);
    const totalNotificationCount = useRecoilValue(totalNotificationSelector);

    return (
        <div>
            <button>Home</button>
            <button>
                My network ({networkCount >= 100 ? "99+" : networkCount})
            </button>
            <button>Jobs ({jobsCount >= 100 ? "99+" : jobsCount})</button>
            <button>
                Messaging ({messagingCount >= 100 ? "99+" : messagingCount})
            </button>
            <button>
                Notification (
                {notificationsCount >= 100 ? "99+" : notificationsCount})
            </button>
            <button>Me {totalNotificationCount}</button>
        </div>
    );
}

function ButtonUpdater() {
    const setMessagingCount = useSetRecoilState(messagingAtom);
    return (
        <button
            onClick={() =>
                setMessagingCount((messagingCount) => messagingCount + 1)
            }
        >
            Me
        </button>
    );
}

export default App;
