import './Undefine.scss';

export default function Undefine({ message }) {
  return (
		<section className='product-undefine'>
			<div className="container">
				<div className="product-undefine__inner">
					<h1 className='product-undefine--title'>Упс, { message } :с</h1>
				</div>
			</div>
		</section>
  );
}