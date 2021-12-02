const List = ({ STories, onRemove }: any) => (
  <>
    <div className="elementHedding">
      <span>Title</span>
      <span>URL</span>
      <span>Author</span>
    </div>

    {STories.map((item: any) => (
      <Item key={item.objectID} item={item} onDelete={onRemove} />
    ))}
  </>
);

const Item = ({ item, onDelete }: any) => {
  return (
    <div>
      <span>{item.title}</span>
      <span>{item.url}</span>
      <span>{item.author}</span>

      <button onClick={() => onDelete(item.objectID)}>Remove</button>
    </div>
  );
};

export default List;
