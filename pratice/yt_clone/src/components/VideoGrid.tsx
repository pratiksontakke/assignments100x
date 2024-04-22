import VideoCard from "./VideoCard";

let VIDEOS = [
    {
        title: "How to learn coding in 100 days | 3 month plans",
        image: "/photo.jpg",
        thumbImage: "/photo.jpg",
        author: "Pratik Sontakke",
        views: "100k",
        timestamp: "10 days ago",
    },
    {
        title: "How to learn tennis in 100 days | 3 month plans",
        image: "/photo.jpg",
        thumbImage: "/photo.jpg",
        author: "Pratik Sontakke",
        views: "100k",
        timestamp: "10 days ago",
    },
    {
        title: "How to learn cricket in 100 days| 3 month plans",
        image: "/photo.jpg",
        thumbImage: "/photo.jpg",
        author: "Pratik Sontakke",
        views: "100k",
        timestamp: "10 days ago",
    },
    {
        title: "How to learn coding in 100 days | 3 month plans",
        image: "/photo.jpg",
        thumbImage: "/photo.jpg",
        author: "Pratik Sontakke",
        views: "100k",
        timestamp: "10 days ago",
    },
    {
        title: "How to learn tennis in 100 days | 3 month plans",
        image: "/photo.jpg",
        thumbImage: "/photo.jpg",
        author: "Pratik Sontakke",
        views: "100k",
        timestamp: "10 days ago",
    },
    {
        title: "How to learn cricket in 100 days| 3 month plans",
        image: "/photo.jpg",
        thumbImage: "/photo.jpg",
        author: "Pratik Sontakke",
        views: "100k",
        timestamp: "10 days ago",
    },
    {
        title: "How to learn coding in 100 days | 3 month plans",
        image: "/photo.jpg",
        thumbImage: "/photo.jpg",
        author: "Pratik Sontakke",
        views: "100k",
        timestamp: "10 days ago",
    },
    {
        title: "How to learn tennis in 100 days | 3 month plans",
        image: "/photo.jpg",
        thumbImage: "/photo.jpg",
        author: "Pratik Sontakke",
        views: "100k",
        timestamp: "10 days ago",
    },
    {
        title: "How to learn cricket in 100 days| 3 month plans",
        image: "/photo.jpg",
        thumbImage: "/photo.jpg",
        author: "Pratik Sontakke",
        views: "100k",
        timestamp: "10 days ago",
    },
];

export default function VideoGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {VIDEOS.map((video) => {
                return (
                    <div>
                        <VideoCard
                            title={video.title}
                            image={video.image}
                            thumbImage={video.thumbImage}
                            author={video.author}
                            views={video.views}
                            timestamp={video.timestamp}
                        ></VideoCard>
                    </div>
                );
            })}
        </div>
    );
}
