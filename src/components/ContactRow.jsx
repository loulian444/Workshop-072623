const ContactRow = (contact) => {
  return (
    <tr>
      <td><a onClick={() => console.log(`hello`)}>{contact.contact.name}</a></td>
      <td>{contact.contact.phone}</td>
      <td>{contact.contact.email}</td>
    </tr>
  );
};

export default ContactRow;
