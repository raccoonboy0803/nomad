import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const toDos = ['a', 'b', 'c', 'd', 'e', 'f'];

const App = () => {
  const onDragEng = () => {};
  return (
    <DragDropContext onDragEnd={onDragEng}>
      <WrapperDiv>
        <BoardsDiv>
          <Droppable droppableId="one">
            {provided => (
              <BoardDiv ref={provided.innerRef} {...provided.droppableProps}>
                {toDos.map((toDo, index) => (
                  <Draggable draggableId={toDo} index={index} key={toDo}>
                    {provided2 => (
                      <CardDiv
                        ref={provided2.innerRef}
                        {...provided2.draggableProps}
                        {...provided2.dragHandleProps}
                      >
                        {toDo}
                      </CardDiv>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </BoardDiv>
            )}
          </Droppable>
        </BoardsDiv>
      </WrapperDiv>
    </DragDropContext>
  );
};

export default App;

const WrapperDiv = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const BoardsDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
`;

const BoardDiv = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${props => props.theme.boardColor};
  border-radius: 5px;
  min-height: 200px;
`;

const CardDiv = styled.div`
  background-color: ${props => props.theme.cardColor};
  border-radius: 5px;
  padding: 10px 10px;
  font-weight: 700;
  margin-bottom: 5px;
`;
