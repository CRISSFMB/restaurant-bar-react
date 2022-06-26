export const Button = ({ text, onClick, classbtn }) => {
  return (
    <button onClick={onClick} className={classbtn}>
      {text}
    </button>
  );
};
