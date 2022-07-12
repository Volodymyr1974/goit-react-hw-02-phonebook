const ContactItem = ({ name, number, onDeleteContact }) => {
    return (
        <div>
            {`${name}: ${number}`}
            <button
                onClick={onDeleteContact}
                type="button"
            >
                Delete
            </button>
        </div>


    )
};
export default ContactItem;