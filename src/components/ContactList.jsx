import { useState, useEffect } from "react";
import ContactRow from "./ContactRow.jsx";

const ContactList = ({ setSelectedContactId }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users`
        );
        const data = await response.json();

        setContacts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchContacts();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th colSpan="3">Contact List</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Phone</td>
            <td>Email</td>
          </tr>
          {contacts.map((contact) => {
            return (
              <ContactRow
                key={contact.id}
                contact={contact}
                setSelectedContactId={setSelectedContactId}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ContactList;
