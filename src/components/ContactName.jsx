const ContactName = ({ contact }) => {
  return (
    <tr>
      <th colSpan="2">{contact.name}</th>
    </tr>
  );
};

export default ContactName;
