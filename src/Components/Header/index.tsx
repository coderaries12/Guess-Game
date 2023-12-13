interface Props {
  title: string;
}
import { Link } from "wouter";

export default function Header({ title }: Props) {
  return (
    <header className="flex justify-center p-4 font-['Berkshire_Swash'] text-7xl text-trueGray-700">
      <Link to="/">{title}</Link>
    </header>
  );
}
