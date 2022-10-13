import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { styled } from "@mui/system";

export const Title = styled("h1")(() => ({
  fontFamily: "roboto",
  fontSize: "2rem",
  fontWeight: "700",
  padding: "0.75rem",
}));

export const SubTitle = styled("h2")(() => ({
  fontFamily: "roboto",
  fontSize: "1.75rem",
  fontWeight: "500",
  padding: "0.75rem",
}));

export const NumbersContainer = styled("div")(() => ({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  maxWidth: "350px",
}));

export const NumbersContainerRow = styled("div")(() => ({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
}));

export const CalculatorNumber = styled("h3")(() => ({
  alignItems: "center",
  backgroundColor: "#111c44",
  borderRadius: "50%",
  cursor: "pointer",
  display: "flex",
  fontFamily: "roboto",
  fontSize: "1.5rem",
  fontWeight: "400",
  justifyContent: "center",
  margin: "1rem",
  padding: "1rem",
  minWidth: "80px",
  minHeight: "80px",
}));

export const CalculatorResult = styled("h2")(() => ({
  borderRadius: "32px",
  fontFamily: "roboto",
  fontSize: "1.75rem",
  fontWeight: "500",
  padding: "1.25rem",
  textAlign: "center",
  maxWidth: "425px",
}));
