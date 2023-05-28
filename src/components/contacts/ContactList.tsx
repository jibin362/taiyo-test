import { useAppSelector } from "../../redux/hooks";
import ContactCard from "./ContactCard";

/**
 * Contact List component
 */
function ContactList() {
  const contacts = useAppSelector((state) => state.contact.contacts);

  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-10">
      {contacts.map((elem) => (
        <ContactCard key={elem.id} contact={elem} />
      ))}
    </div>
  );
}

ContactList.propTypes = {};

export default ContactList;
