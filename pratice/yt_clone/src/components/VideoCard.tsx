export default function VideoCard(props: any) {
    return (
        <div className="p-2">
            <img src={props.image} className="rounded-xl" alt="" />
            <div className="grid grid-cols-12 pt-2">
                <div className="col-span-1 ">
                    <img
                        className="rounded-full w-10 h-10"
                        src={props.thumbImage}
                        alt=""
                    />
                </div>
                <div className="col-span-11 pl-5">
                    <div>{props.title}</div>
                    <div className="col-span-11 text-gray-400 text-base">
                        {props.author}
                    </div>
                    <div className="col-span-11 text-gray-400 text-base">
                        {props.views} | {props.timestamp}
                    </div>
                </div>
            </div>
        </div>
    );
}
