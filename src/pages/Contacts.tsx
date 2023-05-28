import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import NoData from "../components/contacts/NoData";
import { useAppSelector } from "../redux/hooks";
import ContactList from "../components/contacts/ContactList";

function Contacts() {
  const contacts = useAppSelector((state) => state.contact.contacts);

  const navigate = useNavigate();

  const onClick = () => navigate("/contacts/create");

  return (
    <div className="w-100 flex flex-col justify-center items-center min-h-screen">
      <Button onClick={onClick}>Create Contact</Button>
      <div className="w-full mt-10 flex items-center justify-center">
        {contacts.length === 0 ? <NoData /> : <ContactList />}
      </div>
    </div>
  );
}

export default Contacts;
