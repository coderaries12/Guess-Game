interface Props {
  message: string;
}

export default function Toast({ message }: Props) {
  return (
    <div className="toast">
      <div className="alert alert-info bg-red-500">
        <span>{message}</span>
      </div>
    </div>
  );
}
