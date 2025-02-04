import './Undefine.scss';

export default function Undefine({ message, margin = '0 0 0 0' }) {
  return (
		<div className='product-undefine' style={{ margin }}>
			<div className="container">
				<div className="product-undefine__inner">
					<h1 className='product-undefine--title'>{ message }</h1>
				</div>
			</div>
		</div>
  );
}
