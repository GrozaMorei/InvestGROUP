import './Header.css'; // Подключаем стили

// Разметка хедера
export default function Header() {
	return (
		<header className='header'>
			<h1 className='header-title'>Welcome to NEXT Js</h1>
			<nav className='nav-list'>
				<li><a href='/'>Главная</a></li>
				<li><a href='/about'>Информация</a></li>
				<li><a href='/contact'>Контакты</a></li>
			</nav>
		</header>
	)
}