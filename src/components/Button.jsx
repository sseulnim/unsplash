import likeIcon from "../assets/like.svg";
import plusIcon from "../assets/plus.svg";
import arrowDownIcon from "../assets/arrow-down.svg";

function Button() {
  return (
    <>
      <button>
        <img src={likeIcon} />
        <span>좋아요</span>
      </button>

      <button>
        <img src={plusIcon} />
        <span>북마크</span>
      </button>

      <button>
        <img src={arrowDownIcon} />
        <span>다운로드 버튼</span>
      </button>
    </>
  );
}

// 버튼 클릭 시 이벤트 핸들러 함수 호출
// 스타일 컴포넌트 사용

export default Button;
