import './List.css';

function List(props){
    return(
        <ul id="concepts">{props.children}</ul>
    );
}

export default List;