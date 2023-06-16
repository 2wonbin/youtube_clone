import { VideoProps } from "@/lib/dummyData";
import Video from "./Video";

const dummyData: VideoProps[] = [
    {
        id: 1,
        thumbnail: "썸네일",
        playtime: "재생시간",
        avatar: "아바타",
        videoTitle:
            "어디 니가 길어지면 어디까지 길어질 수 있는데 만약에 더 길어지면 어쩔껀데 어쩌긴 어쩌겠어 높이 더 먹겠지 ",
        nickname: "닉네임",
        views: "조회수",
        uploadDate: "업로드 날짜",
    },
    {
        id: 2,
        thumbnail: "썸네일",
        playtime: "재생시간",
        avatar: "아바타",
        videoTitle: "비디오 제목",
        nickname: "닉네임",
        views: "조회수",
        uploadDate: "업로드 날짜",
    },
    {
        id: 3,
        thumbnail: "썸네일",
        playtime: "재생시간",
        avatar: "아바타",
        videoTitle: "비디오 제목",
        nickname: "닉네임",
        views: "조회수",
        uploadDate: "업로드 날짜",
    },
    {
        id: 4,
        thumbnail: "썸네일",
        playtime: "재생시간",
        avatar: "아바타",
        videoTitle: "비디오 제목",
        nickname: "닉네임",
        views: "조회수",
        uploadDate: "업로드 날짜",
    },
    {
        id: 5,
        thumbnail: "썸네일",
        playtime: "재생시간",
        avatar: "아바타",
        videoTitle: "비디오 제목",
        nickname: "닉네임",
        views: "조회수",
        uploadDate: "업로드 날짜",
    },
    {
        id: 6,
        thumbnail: "썸네일",
        playtime: "재생시간",
        avatar: "아바타",
        videoTitle: "비디오 제목",
        nickname: "닉네임",
        views: "조회수",
        uploadDate: "업로드 날짜",
    },
    {
        id: 7,
        thumbnail: "썸네일",
        playtime: "재생시간",
        avatar: "아바타",
        videoTitle: "비디오 제목",
        nickname: "닉네임",
        views: "조회수",
        uploadDate: "업로드 날짜",
    },
    {
        id: 8,
        thumbnail: "썸네일",
        playtime: "재생시간",
        avatar: "아바타",
        videoTitle: "비디오 제목",
        nickname: "닉네임",
        views: "조회수",
        uploadDate: "업로드 날짜",
    },
    {
        id: 9,
        thumbnail: "썸네일",
        playtime: "재생시간",
        avatar: "아바타",
        videoTitle: "비디오 제목",
        nickname: "닉네임",
        views: "조회수",
        uploadDate: "업로드 날짜",
    },
    {
        id: 10,
        thumbnail: "썸네일",
        playtime: "재생시간",
        avatar: "아바타",
        videoTitle: "비디오 제목",
        nickname: "닉네임",
        views: "조회수",
        uploadDate: "업로드 날짜",
    },
];

export default function VideoContainer() {
    return (
        <section className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 px-16 gap-8 py-8">
            {dummyData.map((video: VideoProps) => (
                <Video {...video} />
            ))}
        </section>
    );
}
