interface Props {
  message: string;
}

export default function Toast({ message }: Props) {
  return (
    <div className="toast">
      <div className="alert alert-info bg-red-500 font-['Berkshire_Swash'] text-gray-50">
        <span>{message}</span>
      </div>
    </div>
  );
}
