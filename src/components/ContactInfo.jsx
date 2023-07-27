import { useState, useEffect } from "react";
import ContactName from "./ContactName.jsx";

const ContactInfo = ({ selectedContactId }) => {
  const [contact, setContact] = useState({});

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${selectedContactId}`
        );
        const data = await response.json();

        setContact(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchContactInfo();
  }, []);

  console.log(contact);

  return (
    <>
      <table>
        <thead>
          <ContactName contact={contact}/>
        </thead>
        <tbody>
          {/* <tr>
            <td>Phone</td>
            <td>{contact.phone}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{contact.email}</td>
          </tr>
          <tr>
            <td>Address</td>
            <td></td>
          </tr>
          <tr>
            <td>Company</td>
            <td>{contact.company.name}</td>
          </tr>
          <tr>
            <td>Website</td>
            <td>{contact.website}</td>
          </tr> */}
        </tbody>
      </table>
    </>
  );
};

export default ContactInfo;
