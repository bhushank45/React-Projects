import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";

const App = () => {
  const users = [
    {
      img: "https://plus.unsplash.com/premium_photo-1672691612717-954cdfaaa8c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI3fHx3b3JraW5nJTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww",
      intro:
        "Helping teams work smarter. We simplify priorities, reduce delays, and keep progress visible at every step.",
      tag: "Satisfied",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1663047358825-db548553dbf7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE3fHx3b3JraW5nJTIwcHJvZmVzc2lvbmFsJTIwbWFsZXxlbnwwfHwwfHx8MA%3D%3D",
      intro:
        "Clear plans, better results. We create structure around your goals and help teams move with confidence.",
      tag: "Underserved",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      intro:
        "Focused support for growing teams. From planning to delivery, we help you stay aligned and move faster.",
      tag: "Underbanked",
    },
  ];
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;
