import React, { useRef } from "react";
import styled from "styled-components";
import buttonProps from "./button.props.interface";

const ButtonContainer = styled.button`
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 10px;
  background-color: #0800ff;
  cursor: pointer;
`;
const Span = styled.span`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.span`
  font-size: 30px;
  line-height: 1.5;
  color: #ffffff;
`;

function Button(porps: buttonProps) {
  const textRef = useRef<HTMLSpanElement>(null);
  const text = useRef<string>("ON");
  const handleClick = () => {
    if (text.current === "ON") {
      text.current = "OFF";
      porps.handleChange(true);
    } else {
      text.current = "ON";
      porps.handleChange(false);
    }
    if (textRef.current !== null) {
      textRef.current.innerHTML = `${text.current}`;
    }
  };
  return (
    <ButtonContainer onClick={handleClick}>
      <Span>
        <Text ref={textRef}>{text.current}</Text>
      </Span>
    </ButtonContainer>
  );
}

export default Button;
