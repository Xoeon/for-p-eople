import UNCHECKED from "../../assets/unchecked.svg";

const TodoList = () => {
  return (
    <ul className="flex flex-col gap-4">
      <div className="flex flex-row items-center gap-2">
        <img src={UNCHECKED} className="w-[25px]" />
        <li>영풍문고</li>
        <hr className="h-4" />
      </div>
      <div className="flex flex-row items-center gap-2">
        <img src={UNCHECKED} className="w-[25px]" />
        <li>영풍문고</li>
      </div>
    </ul>
  );
};

export default TodoList;
