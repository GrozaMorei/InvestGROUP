import Button from '@/app/components/UI/Button/Button'
import './ButtonFilter.scss';

export default function ButtonFilter({ toggleUpdate, deleteUpdate }) {

	return (
		<div className='button-filter'>
			<Button onClick={toggleUpdate} className='button-filter__btn'>
				Показать
			</Button>
			<Button onClick={deleteUpdate}>
				<img src="/icons/delete.svg" alt="иконка корзины"/>
			</Button>
		</div>
	)
}