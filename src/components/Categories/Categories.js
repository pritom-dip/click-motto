
const Categories = ({ categories, handleFilteredItems }) => {
    return (
        <div className="d-flex">
            {
                categories.map(category => <h3 style={{ cursor: 'pointer' }} key={category?.id} onClick={() => handleFilteredItems(category?.name)} className="mx-2">{category?.name}</h3>)
            }
        </div>
    );
};

export default Categories;