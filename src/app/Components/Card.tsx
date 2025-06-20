import React from "react";

type CardProps = {
  photo: string;
  name: string;
  username: string;
  email: string;
  website: string;
  num: string;
};

const Card = (props: CardProps) => {
  return (
    <div>
      <div className="flex justify-center m-5 mb-8">
        <div className="card lg:card-side bg-base-100 drop-shadow-xl shadow-gray-500 lg:h-64 lg:w-2xl">
          <figure className="p-2">
            <img
              src={props.photo}
              alt="User profile"
              onError={(event) => {
                event.currentTarget.src =
                  "https://res.cloudinary.com/duwddcqzi/image/upload/v1743104563/Basic_Ui__186_vbb7pk.jpg";
              }}
              className="rounded-2xl lg:h-52 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Name : {props.name}</h2>
            <p>Username : {props.username}</p>
            <p>Email : {props.email}</p>
            <p>Number : {props.num}</p>
            <p>Website : {props.website}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
