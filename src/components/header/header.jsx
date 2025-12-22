import './header.scss'

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

export default function Header() {
    const listItem = products.map(product => 
        <li 
        key={product.id}
        style={{
            color: product.isFruit ? "red" : "green"
        }}
        >
            {product.title}
        </li>
    )
    return (
        <>
            <header className='header'>
                <ul>{listItem}</ul>
                <h1>{user.name}</h1>
                <img 
                src={user.imageUrl} 
                style={{
                    width: user.imageSize,
                    height: user.imageSize,
                    borderRadius: 100
                }} />
            </header>
        </>
    )
}