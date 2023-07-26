const ContactRow = (contact) => {
  return (
    <tr>
      <td>
        {contact.contact.name} <br/>
        <button>More Info</button>
      </td>
      <td>{contact.contact.phone}</td>
      <td>{contact.contact.email}</td>
    </tr>
  );
};

export default ContactRow;
