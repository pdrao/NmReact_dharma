
// I have to crated nested div with parent div id is "parent"
// second div should be child as "child"
// inside the child should be h1

const parentdiv= React.createElement("div", {id: "parent"}, 
    React.createElement("div", {id:"child"},
    React.createElement("h1",{},
   "hello h1 inside the parent div")
   ))
   const root = ReactDOM.createRoot(document.getElementById("root"));
   root.render(parentdiv);