import { SearchIcon } from "@heroicons/react/outline";

type Props = {
  onPressEnter: () => void;
  value: string;
  onChangeValue: (value: string) => void;
};

const SearchInput = ({ onPressEnter, value, onChangeValue }: Props) => {
  return (
    <div className="flex-1 flex items-center relative">
      <SearchIcon className="w-4 h-4 text-gray-700 absolute" />
      <input
        className="w-full py-1 pl-5 pr-2 text-sm outline-none"
        placeholder="Search by username..."
        value={value}
        onChange={(e) => onChangeValue(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            onPressEnter();
          }
        }}
      />
    </div>
  );
};

export default SearchInput;

SearchInput.defaultProps = {
  onPressEnter: () => {},
};
