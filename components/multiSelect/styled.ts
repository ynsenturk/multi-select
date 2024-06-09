import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  row-gap: 10px;
  flex: 1;
  margin-bottom: 20px;
`;

export const Input = styled.View`
  border: 1px;
  border-color: #94a3b8;
  width: 100%;
  border-radius: 12px;
  padding: 10px;
  flex-direction: row;
  align-items: flex-start;
  column-gap: 10px;
`;

export const OpenButton = styled.View``;

export const Selectable = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 15px;
  border-bottom-width: 0.2px;
  border-bottom-color: "#94a3b8";
  column-gap: 10px;
`;

export const Check = styled.View<{ checked?: boolean }>`
  width: 24px;
  height: 24px;
  border-radius: 5px;
  border: 1px;
  background-color: transparent;
  border-color: ${({ checked }) => (checked ? "#0275ff" : "gray")};
  background-color: ${({ checked }) => (checked ? "#0275ff" : "white")};
`;

export const CheckedItem = styled.View`
  background-color: #e2e8f0;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  column-gap: 10px;
  justify-content: space-between;
  border-radius: 10px;
`;

export const RemoveItem = styled.TouchableOpacity`
  background-color: #94a3b8;
  width: 22px;
  height: 22px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;
