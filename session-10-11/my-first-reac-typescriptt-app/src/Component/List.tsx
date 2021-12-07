import styles from "./List.module.css";
const List = ({ STories, onRemove }: any) => (
  <>
    <div className={styles.elementHedding}>
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
    <div className={styles.ietmBackground}>
      <span className={styles.itemTitle}>{item.title}</span>
      <span className={styles.url}>
        <a href={item.url}>{item.url}</a>
      </span>
      <span className={styles.author}>{item.author}</span>
      <span className={styles.buttonHolder}>
        <button
          className={styles.remBtn}
          onClick={() => onDelete(item.objectID)}
        >
          Remove
        </button>
      </span>
    </div>
  );
};

export default List;
