import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { deleteContact } from "../../redux/slices/contactSlice";
import Button from "../Button";
import Badge from "../Badge";

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

  const status = contact.status === "active" ? "Active" : "Inactive";
  const statusVariant = contact.status === "active" ? "Success" : "Danger";

  return (
    <div className="lg:w-1/5 w-[47%] p-3 border border-block-200 flex flex-col justify-center items-center drop-shadow-md">
      <p className="mb-3">
        {contact.firstName} {contact.lastName}
      </p>
      <Badge label={status} variant={statusVariant} />
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
