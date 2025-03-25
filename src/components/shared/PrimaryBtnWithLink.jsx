import { Link } from "react-router-dom";

const PrimaryBtnWithLink = ({ title, link, textColor, background }) => {
  return (
    <Link
      to={link}
      style={{
        color: textColor,
        backgroundColor: background,
      }}
      className="px-4 py-1.5 rounded-md font-medium "
    >
      {title}
    </Link>
  );
};
export default PrimaryBtnWithLink;
