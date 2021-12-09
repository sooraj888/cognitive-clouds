import styles from "./List.module.css";
import { memo } from "react";

type ListProp = {
  STories: Stories;
  onRemove: (id: string) => void;
};

type Story = {
  title: string;
  url: string;
  objectID: string;
  author: string;
  num_comments: string;
};

export type Stories = Array<Story>;

type ItemProp = {
  item: Story;
  onDelete: (id: string) => void;
};

const List = memo(({ STories, onRemove }: ListProp) => {
  // console.log(STories);
  return (
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
});
const Item = ({ item, onDelete }: ItemProp) => {
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
