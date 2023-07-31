import { styled } from "styled-components";

interface InputItemProps {
  type: string;
  title: string;
  name: string;
  id?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputItem = ({ type, title, name, id = name, value, onChange }: InputItemProps) => {
  return (
    <StDiv>
      <StLabel htmlFor={id}>{title}</StLabel>
      <StInput type={type} name={name} id={id} value={value} onChange={onChange} />
    </StDiv>
  );
};

export default InputItem;

const StDiv = styled.div`
  padding: 20px;
`;
const StLabel = styled.label`
  font-size: 20px;
  font-weight: 700;
  margin-right: 10px;
`;

const StInput = styled.input`
  box-sizing: border-box;
  padding: 5px;
  margin-right: 50px;
  font-size: 16px;
  line-height: 20px;
`;
