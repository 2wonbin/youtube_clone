import { VideoProps } from "@/lib/dummyData";
import React from "react";

export default function Video({
    thumbnail: thumbnail,
    playtime: playtime,
    avatar: avatar,
    videoTitle: videoTitle,
    nickname: nickname,
    views: views,
    uploadDate: uploadDate,
}: VideoProps) {
    return (
        <div className="bg-white h-[350px] w-[calc(100%)]">
            <div className="h-2/3  relative p-2">
                <div className="bg-purple-200 h-full p-2 rounded-md">{thumbnail}</div>
                <div className="absolute bottom-3 right-3 text-white text-xs font-bold bg-black/40 p-1 rounded-md">
                    {playtime}
                </div>
            </div>
            <div className="h-1/3 p-2">
                <div className="flex flex-row gap-4">
                    <div className="">
                        <div className="rounded-full bg-black w-9 h-9"></div>
                    </div>
                    <div>
                        <div className="font-bold leading-[22px] tracking-normal truncate break-words max-w-[270px] max-h-[60px] whitespace-wrap">
                            <span className="">{videoTitle}</span>
                        </div>
                        <div className="text-sm text-slate-500 mt-2">
                            <div>{nickname}</div>
                            <div>
                                {views} <span>·</span> {uploadDate}(차이)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
