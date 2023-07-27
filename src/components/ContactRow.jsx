import ContactInfo from "./ContactData";

const ContactRow = ({ contact, setSelectedContactId }) => {
  return (
    <tr onClick={setSelectedContactId}>
      <td>{contact.name}</td>
      <td>{contact.phone}</td>
      <td>{contact.email}</td>
    </tr>
  );
};

export default ContactRow;
