type EventType = "click" | "scroll" | "mousemove";

type ExcludeEvent = Exclude<EventType, "scroll">;

const handleEvent = (event: ExcludeEvent) => {
    console.log("handleEvent : " + event);
};

handleEvent("click");
handleEvent("mousemove");
// handleEvent("scroll");
