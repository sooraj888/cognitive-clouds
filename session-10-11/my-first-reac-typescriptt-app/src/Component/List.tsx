const List = ({ STories }: any) => (
  <>
    <div className="elementHedding">
      <span>Title</span>
      <span>URL</span>
      <span>Author</span>
    </div>

    {STories.map((item: any) => (
      <Item key={item.objectID} item={item} />
    ))}
  </>
);

const Item = ({ item }: any) => {
  return (
    <div>
      <span>{item.title}</span>
      <span>{item.url}</span>
      <span>{item.author}</span>
    </div>
  );
};

export default List;
