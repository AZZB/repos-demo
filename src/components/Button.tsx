import classNames from "classnames";

type Props = {
  text: String;
  loading?: boolean;
  Icon?: any;
  onClick: () => void;
  effect?: boolean;
  style?: object;
};

export default function Button(props: Props) {
  const { text, Icon, onClick, effect, style } = props;

  return (
    <button
      className={classNames(
        "bg-black text-white text-xs font-bold py-2 px-6 outline-none tracking-widest",
        {
          " button-effect": !!effect,
        }
      )}
      onClick={onClick}
      style={style}
    >
      {Icon && <Icon />}
      {text}
    </button>
  );
}

Button.defaultProps = {
  onClick: () => {},
};
