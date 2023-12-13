interface Props {
  title: string;
}
import { Link } from "wouter";

export default function Header({ title }: Props) {
  return (
    <header className="flex justify-center p-4 font-[Plaster] text-4xl">
      <Link to="/">{title}</Link>
    </header>
  );
}
