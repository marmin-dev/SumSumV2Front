import React from "react";
import { GetIn, GirlDiv, Text } from "../Module/MainModule";

// 404
const NotFound = () => {
  return (
    <GirlDiv>
      <Text>
        길을 잘못들었어 404야
        <GetIn href="/">돌아가자</GetIn>
      </Text>
    </GirlDiv>
  );
};

export default NotFound;
