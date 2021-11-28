
const List= (prps:any)=>(
  <div>
    {
        prps.stories.map((element: any) => (
        <div >
            <span>{element.title}</span>
           <span>{element.url}</span>
           <span>{element.author}</span>
        </div>
    ))
    }
</div>);
export default List;