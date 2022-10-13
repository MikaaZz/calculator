import { Box } from "@mui/material";
import {
  CalculatorNumber,
  CalculatorResult,
  NumbersContainer,
  NumbersContainerRow,
} from "../../styles/styles";

export const Calculator = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#101e54",
        borderRadius: "32px",
        maxWidth: "425px",
      }}
    >
      <CalculatorResult>Result</CalculatorResult>
      <NumbersContainer>
        <NumbersContainerRow>
          <CalculatorNumber>7</CalculatorNumber>
          <CalculatorNumber>8</CalculatorNumber>
          <CalculatorNumber>9</CalculatorNumber>
        </NumbersContainerRow>
        <NumbersContainerRow>
          <CalculatorNumber>4</CalculatorNumber>
          <CalculatorNumber>5</CalculatorNumber>
          <CalculatorNumber>6</CalculatorNumber>
        </NumbersContainerRow>
        <NumbersContainerRow>
          <CalculatorNumber>1</CalculatorNumber>
          <CalculatorNumber>2</CalculatorNumber>
          <CalculatorNumber>3</CalculatorNumber>
        </NumbersContainerRow>
        <NumbersContainerRow>
          <CalculatorNumber>0</CalculatorNumber>
          <CalculatorNumber>,</CalculatorNumber>
        </NumbersContainerRow>
      </NumbersContainer>
    </Box>
  );
};
