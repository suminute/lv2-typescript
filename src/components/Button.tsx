import React from "react";
import { css, styled } from "styled-components";

export enum StyleType {
  FORM_SUBMIT = "FORM_SUBMIT",
  FORM_DELETE = "FORM_DELETE",
  FORM_SWITCH = "FORM_SWITCH",
}

interface ButtonProps {
  type?: "button" | "submit";
  children: React.ReactNode;
  styleType: StyleType;
  disabled?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({ type = "button", children, styleType, disabled, onClick }: ButtonProps) => {
  return (
    <StButton type={type} $styleType={styleType} disabled={disabled} onClick={onClick}>
      {children}
    </StButton>
  );
};

export default Button;

const buttonStyles = css`
  cursor: pointer;
  width: 90px;
  padding: 10px;
  margin: 5px;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  border-radius: 8px;
`;
const StButton = styled.button<{ $styleType: StyleType }>`
  ${buttonStyles}
  ${(props) => {
    switch (props.$styleType) {
      case StyleType.FORM_SUBMIT: {
        return css`
          background-color: #ff9900;
          color: #fff;
          border: none;
        `;
      }
      case StyleType.FORM_DELETE: {
        return css`
          background-color: #fff;
          border: 2px solid #f12213;
        `;
      }
      case StyleType.FORM_SWITCH: {
        return css`
          background-color: #fff;
          border: 2px solid #197414;
        `;
      }
      default:
        return ``;
    }
  }}
    &:disabled {
    background-color: #777;
  }
`;
