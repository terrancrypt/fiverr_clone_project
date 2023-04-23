import { useMediaQuery } from "react-responsive";

// Responsive Desktop first

// Default 
export const Default = ({ children }) => {
  const Default = useMediaQuery({ minWidth: 1320 });
  return Default ? children : null;
};

// Laptop 1160px => 1319px
export const Laptop = ({ children }) => {
  const Laptop = useMediaQuery({ minWidth: 1160, maxWidth: 1319 });
  return Laptop ? children : null;
};

// Tablet 600px => 1159px
export const Tablet = ({ children }) => {
  const Tablet = useMediaQuery({ minWidth: 600, maxWidth: 1159 });
  return Tablet ? children : null;
};

// Mobile 0 => 599px
export const Mobile = ({ children }) => {
  const Mobile = useMediaQuery({ maxWidth: 599 });
  return Mobile ? children : null;
};


