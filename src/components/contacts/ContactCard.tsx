import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { deleteContact } from "../../redux/slices/contactSlice";
import Button from "../Button";

interface IContactCardProp {
  contact: IContact;
}

/**
 * Contact Card
 */
function ContactCard({ contact }: IContactCardProp) {
  const dispatch = useAppDispatch();
  const navigation = useNavigate();

  const onEdit = () => {
    navigation(`/contacts/${contact.id}`);
  };

  const onDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className="p-3 border border-block-200">
      <p>{contact.firstName}</p>
      <p>{contact.lastName}</p>
      <p>{contact.status}</p>
      <Button onClick={onEdit} variant="Success">
        Edit
      </Button>
      <Button onClick={onDelete} variant="Danger">
        Delete
      </Button>
    </div>
  );
}

ContactCard.propTypes = {};

export default ContactCard;
