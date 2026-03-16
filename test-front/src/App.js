import { useEffect, useState } from "react";

// 주소 끝에 슬래시가 중복되지 않도록 확인하세요.
const path = "/api/v1"; 

function App() {
  const [data, setData] = useState("데이터 로딩 중...");

  useEffect(() => {
    const dataFunc = async () => {
      try {
        // 옵션을 최소화하여 기본 통신 확인
        const res = await fetch(path);
        
        if (res.ok) {
          const result = await res.text();
          setData(result);
        } else {
          setData("서버 응답 에러: " + res.status);
        }
      } catch (error) {
        console.error("Fetch 에러 발생:", error);
        setData("연결 실패 (백엔드 서버 확인 필요)");
      }
    };
    dataFunc();
  }, []);

  return (
    <>
      <h3>REACT</h3>
      <h3>boot ip : {data}</h3>
    </>
  );
}

export default App;