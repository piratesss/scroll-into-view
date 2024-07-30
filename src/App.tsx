// import { useRef } from "react";

// import "./App.css";

// import ScrollToTop from "./components/ScrollToTop";

// interface Section {
//   name: string;
//   id: string;
// }

// function App() {
//   const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

//   const scrollToSection = (id: string) => {
//     const section = sectionRefs.current[id];

//     if (section) {
//       window.scrollTo({
//         top: section.offsetTop - 67,
//         behavior: "smooth",
//       });
//     }
//   };

//   const sections: Section[] = [
//     { name: "Men's", id: "mens" },
//     { name: "Women's", id: "womens" },
//     { name: "Apparels", id: "apparels" },
//     { name: "Company", id: "company" },
//   ];

//   return (
//     <div className="App">
//       <ScrollToTop />
//       <div className="bg-blue-200 fixed w-full p-5 top-0 left-0">
//         {sections.map((section) => (
//           <li
//             key={section.id}
//             onClick={() => scrollToSection(section.id)}
//             className="link"
//           >
//             {section.name}
//           </li>
//         ))}
//       </div>

//       {sections.map((section) => (
//         <div
//           key={section.id}
//           ref={(el) => (sectionRefs.current[section.id] = el)}
//           className={section.id}
//         >
//           <h3>{section.name}</h3>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;

import { useRef } from "react";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";

interface Section {
  name: string;
  id: string;
}

function App() {
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const scrollToSection = (id: string) => {
    const section = sectionRefs.current[id];

    if (section) {
      window.scrollTo({
        top: section.offsetTop - 67,
        behavior: "smooth",
      });
    }
  };

  const sections: Section[] = [
    { name: "Men's", id: "mens" },
    { name: "Women's", id: "womens" },
    { name: "Apparels", id: "apparels" },
    { name: "Company", id: "company" },
  ];

  return (
    <div className="App">
      <ScrollToTop />
      <div className="bg-blue-200 fixed w-full p-5 top-0 left-0">
        <ul>
          {sections.map((section) => (
            <li
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="link"
            >
              {section.name}
            </li>
          ))}
        </ul>
      </div>

      {/* {sections.map((section) => (
        <div
          key={section.id}
          ref={(el) => (sectionRefs.current[section.id] = el)}
          className={section.id}
        >
          <h3>{section.name}</h3>
        </div>
      ))} */}

      <div>
        <div
          ref={(el) => (sectionRefs.current["mens"] = el)}
          id="mens"
          className="mens"
        >
          <h3>Men's</h3>
        </div>

        <div
          ref={(el) => (sectionRefs.current["womens"] = el)}
          id="womens"
          className="womens"
        >
          <h3>Women's</h3>
        </div>

        <div
          ref={(el) => (sectionRefs.current["apparels"] = el)}
          id="apparels"
          className="apparels"
        >
          <h3>Apparels</h3>
        </div>

        <div
          ref={(el) => (sectionRefs.current["company"] = el)}
          id="company"
          className="company"
        >
          <h3>Company</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
