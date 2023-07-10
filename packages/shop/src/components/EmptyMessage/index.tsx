import { memo } from "react";
import "./styles.scss";

interface Props {
  message: string;
}
const EmptyMessage = memo(({ message }: Props) => {
  return (
    <div className="empty-msg text-danger">
      <h4 className="text-center">{message}</h4>
    </div>
  );
});

export default EmptyMessage;
