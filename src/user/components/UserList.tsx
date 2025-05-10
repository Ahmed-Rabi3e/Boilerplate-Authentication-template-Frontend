import Card from "../../shared/components/UIElements/Card";
import UserItem from "./UserItem";

const UsersList = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="flex justify-center items-center">
        <Card>
          <h2>No users found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="container list-none mx-auto p-0 w-[90%] max-w-[50rem] flex justify-center flex-wrap">
      {items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};

export default UsersList;
