import React, { Component } from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  border: 1px solid lightgrey;
  padding: 8px;
  margin-right: 8px;
  border-radius: 50%;
  width: 150px;
  height: 150px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

class Task extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {
          provided => (
            <Container 
            ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              {this.props.task.content[0]}
            </Container>
          )
        }
        
     </Draggable>
    );
  }
}

export default Task;