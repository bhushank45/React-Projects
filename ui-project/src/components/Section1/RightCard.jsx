
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  console.log(props)
  return (
    <div className="h-full w-80 overflow-hidden shrink-0 rounded-4xl relative bg-red-600">
      <img className="h-full w-full object-cover" src={props.img} alt="" />
      <RightCardContent id={props.id} color={props.color} intro={props.intro} tag={props.tag} />
    </div>
  );
};

export default RightCard;
