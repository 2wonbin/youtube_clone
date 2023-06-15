
export default function VideoContainer() {
    return (
        <section className="w-full bg-yellow-200">
            <div className="bg-green-200 h-[300px] py-4 px-10">
                <div className="bg-red-400 h-2/3 relative">
                    <div className="bg-purple-200 w-full h-full p-2 rounded-md">사진</div>
                    <div className="absolute bottom-1 right-1 text-white text-xs font-bold bg-black/40 p-1 rounded-md">재생시간</div>
                </div>
                <div>
                    <div className="flex flex-row">
                        <div>아바타</div>
                        <div>
                            <div>제목</div>
                            <div>
                                <div>닉네임</div>
                                <div>조회수 <span>·</span> 업로드일(차이)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
