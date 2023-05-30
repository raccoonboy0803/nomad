import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const App = () => {
  const onDragEng = () => {};
  return (
    <DragDropContext onDragEnd={onDragEng}>
      <div>
        <Droppable droppableId="one">
          {provided => (
            <ul ref={provided.innerRef} {...provided.droppableProps}>
              <Draggable draggableId="first" index={0}>
                {provided2 => (
                  <li ref={provided2.innerRef} {...provided2.draggableProps}>
                    <span {...provided2.dragHandleProps}>🍎</span>
                    one
                  </li>
                )}
              </Draggable>
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default App;
