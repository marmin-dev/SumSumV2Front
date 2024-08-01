import React, { useEffect, useState } from "react";
import { GetIn, GirlDiv, Text } from "../Module/MainModule";

const Main = () => {
  const [inUrl, setInUrl] = useState("/username");

  useEffect(() => {
    if (localStorage.getItem("sumsum_username")) {
      setInUrl("/suhee");
    }
  }, []);

  return (
    <GirlDiv>
      <Text>
        SUMSUMAI
        <GetIn href={inUrl}>수희와 대화하기</GetIn>
      </Text>
    </GirlDiv>
  );
};

export default Main;
