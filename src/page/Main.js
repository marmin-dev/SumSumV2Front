import React, { useEffect, useState } from "react";
import { GetIn, GirlDiv, Text } from "../Module/MainModule";
import { Helmet } from "react-helmet";

// 메인 화면
const Main = () => {
  const [inUrl, setInUrl] = useState("/username");

  useEffect(() => {
    if (localStorage.getItem("sumsum_username")) {
      setInUrl("/suhee");
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>썸썸AI</title>
        <meta name="description" content="수희와 대화하기" />
        <meta
          name="keywords"
          content="Sumsumai, sumsumai, 수희 대화, sumsum, 썸썸AI, 썸썸"
        />
        <meta property="og:title" content="썸썸AI" />
        <meta property="og:description" content="수희와 대화하기" />
        <meta property="og:type" content="website" />
      </Helmet>
      <GirlDiv>
        <Text>
          SUMSUMAI
          <GetIn href={inUrl}>수희와 대화하기</GetIn>
        </Text>
      </GirlDiv>
    </>
  );
};

export default Main;
