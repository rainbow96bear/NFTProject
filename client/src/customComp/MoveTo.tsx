import { useNavigate } from "react-router-dom";

interface Props {
  where: string;
  InnerText: string;
}

export const MoveTo: React.FC<Props> = ({ where, InnerText }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(where);
      }}>
      {InnerText}
    </div>
  );
};
