import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../button/button.components";
import Light from "../ligh/light.components";

const FlexCenter = styled.div`
  display: flex;
  gap: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TraffitLight = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  border-radius: 20px;
  background-color: #211e1e;
`;

const ContainerLight = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50rem;
  background-color: #3a3636;
`;

const timeLight = [4000, 3000, 2000];

function Container() {
  const [index, setIndex] = useState<number>(0);
  const [isLight, setIsLight] = useState<boolean>(false);
  const handleClick = (value: any) => {
    if (value) {
      setIsLight(true);
    } else {
      setIsLight(false);
    }
  };
  useEffect(() => {
    if (isLight) {
      const time = setTimeout(() => {
        setIndex((index + 1) % 3);
        console.log(index);
      }, timeLight[index]);
      return () => {
        clearTimeout(time);
      };
    }
  });

  return (
    <FlexCenter>
      <TraffitLight>
        <ContainerLight>
          <Light color="#F00F00" active={isLight && index === 0} />
        </ContainerLight>

        <ContainerLight>
          <Light color="#FFFF00" active={isLight && index === 2} />
        </ContainerLight>

        <ContainerLight>
          <Light color="#00cc00" active={isLight && index === 1} />
        </ContainerLight>
      </TraffitLight>
      <Button handleChange={handleClick}></Button>
    </FlexCenter>
  );
}

export default Container;
