import "./Stats.css"

export default function Stats(props) {
    let itemsCount = 0
    props.todoList.forEach(element => {
        if (element.isComplete === false) {
            itemsCount++
        }
        return itemsCount
    });
    function showActive() {
        props.setCurrTab("active")
    }
    function showAll() {
      props.setCurrTab("all");
    }
    function showActive() {
      props.setCurrTab("active");
    }
    function showCompleted() {
      props.setCurrTab("completed");
    }
    function clearCompleted() {
        props.setTodoList(oldList => {
            const newArr = []
            oldList.forEach(item => {
                item.isComplete === false ? newArr.push(item) : item
            })
            return newArr
        })
    }
    
    return (
      <>
        <div
          className={
            props.darkMode
              ? "stats bg-gray text-gray"
              : "stats bg-light text-gray"
          }
        >
          <p>
            {itemsCount} {itemsCount > 1 ? "items left" : "item left"}
          </p>
          <p onClick={clearCompleted}>Clear completed</p>
        </div>
        <div
          className={
            props.darkMode
              ? "status bg-gray text-gray"
              : "status bg-light text-gray box-shadow"
          }
        >
          <p
            className={props.currTab == "all" ? "text-blue" : undefined}
            onClick={showAll}
          >
            All
          </p>
          <p
            className={props.currTab == "active" ? "text-blue" : undefined}
            onClick={showActive}
          >
            Active
          </p>
          <p
            className={props.currTab == "completed" ? "text-blue" : undefined}
            onClick={showCompleted}
          >
            Completed
          </p>
        </div>
      </>
    );
}