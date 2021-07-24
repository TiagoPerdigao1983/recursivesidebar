import RecursiveNavbar from "./Components/RecursiveNavbar";

const navbarLinks = [
  { name: "features", label: "Features" },
  { name: "pricing", label: "Pricing" },
  { name: "Dropdown", label: "Dropdown" },
];

function App() {
  return (
    <>
      <RecursiveNavbar navbarLinks={navbarLinks} />
    </>
  );
}

export default App;
