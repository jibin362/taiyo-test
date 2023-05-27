import { useAppSelector } from "../../redux/hooks";
import ContactCard from "./ContactCard";

function ContactList() {
  const contacts = useAppSelector((state) => state.contact.contacts);

  return (
    <>
      {contacts.map((elem) => (
        <ContactCard key={elem.id} contact={elem} />
      ))}
    </>
  );
}

ContactList.propTypes = {};

export default ContactList;
