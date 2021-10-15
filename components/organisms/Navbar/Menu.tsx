// Install dulu classnamesnya dengan npm install classnames https://www.npmjs.com/package/classnames
import cx from 'classnames';
import Link from 'next/link';

interface MenuProps{
  title: string;
  // Kalo ada tanda active? artinya itu gak wajib
  active?: boolean;
  href: string;
}
export default function Menu(props:Partial<MenuProps>) {
  // Mode Partial kita bisa menentukan mana yang active mana yang enggak
  const { title, active, href = '/' } = props;
  const classTitle = cx({
    'nav-link': true,
    active,
  });
  return (
    <li className="nav-item my-auto">
      <Link href={href}>
        <a className={classTitle} aria-current="page">{title}</a>
      </Link>
    </li>
  );
}
