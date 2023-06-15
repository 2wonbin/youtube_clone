
export default function Navbar() {
  return (
    <div className="flex flex-row justify-between p-4 bg-sky-200 gap-2">
        <div className="flex gap-2">
            <div>햄버거</div>
            <div>로고</div>
        </div>
        <div className="flex flex-1 justify-end gap-2 ">
            <div>돋보기</div>
            <div>마이크</div>
        </div>
        <div className="flex gap-2">
            <div>업로드</div>
            <div>알림</div>
            <div>아바타</div>
        </div>
    </div>
  )
}
