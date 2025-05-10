import { Link } from "react-router-dom";

import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";

const UserItem = ({ id, image, name, placeCount }) => {
  return (
    <li className="m-4 w-[calc(45%-2rem)] min-w-[17.5rem] mt-28">
      <Card className="p-0">
        <Link
          to={`/${id}/places`}
          className="flex items-center w-full h-full p-4 text-white bg-gray-900 transition-all hover:bg-yellow-400"
        >
          <div className="w-16 h-16 mr-4">
            <Avatar image={image} alt={name} />
          </div>
          <div>
            <h2 className="text-xl font-normal text-yellow-400 transition-all hover:text-gray-900">
              {name}
            </h2>
            <h3 className="text-base transition-all hover:text-gray-900">
              {placeCount} {placeCount === 1 ? "Place" : "Places"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
