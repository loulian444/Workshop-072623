const ContactRow = ({ contact, setSelectedContactId }) => {

  const sendId = () => {
    setSelectedContactId(contact.id)
  };  

  return (
    <tr onClick={sendId}>
      <td>{contact.name}</td>
      <td>{contact.phone}</td>
      <td>{contact.email}</td>
    </tr>
  );
};

export default ContactRow;
