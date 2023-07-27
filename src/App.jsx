import { useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList.jsx";
import ContactInfo from "./components/ContactInfo.jsx";

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <ContactInfo selectedContactId={selectedContactId}/>
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}

export default App;
