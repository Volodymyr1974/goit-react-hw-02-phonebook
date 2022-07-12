import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul >
            {contacts.map(({ id, name, number }) => (
                <li key={id}>
                    <ContactItem
                        name={name}
                        number={number}
                        onDeleteContact={() => onDeleteContact(id)}
                    />
                    {/* {`${contact.name}: ${contact.number}`}
                    <button
                        onClick={() => onDeleteContact(contact.id)}
                        type="button"
                    >
                        Delete
                    </button> */}
                </li>
            ))}
        </ul>
    );
};

export default ContactList;