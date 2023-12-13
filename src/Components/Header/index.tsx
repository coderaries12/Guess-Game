interface Props {
  title: string;
}
import { Link } from "wouter";

export default function Header({ title }: Props) {
  return (
    <header className="flex justify-center p-4 text-center font-['Berkshire_Swash'] text-7xl ">
      <Link to="/">{title}</Link>
    </header>
  );
}
