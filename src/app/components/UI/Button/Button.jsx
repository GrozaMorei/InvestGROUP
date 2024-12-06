import Link from 'next/link';
import './Button.scss';

export default function Button({ 
  onClick, 
  href, 
  type = 'button', 
  children, 
  className = '' 
}) {
  if (href) {
    return (
      <Link href={href} className={`button ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={`button ${className}`}
    >
      {children}
    </button>
  );
}
