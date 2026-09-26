import LeftContent from "./LeftContent"
import RightContent from "./RightContent"

const Page1Content = (props) => {
  return (
    <div className="pb-20 pt-6 px-18 h-[90vh] bg-white flex items-center gap-10 ">
        <LeftContent/>
        <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Content