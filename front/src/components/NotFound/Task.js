import React, { Component } from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import '../../style/notFound.scss';

const Container = styled.div`
  display: flex;
  height: 80px;
  width: 80px;
  border-radius: 100%;
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
              className={`circle ${this.props.task.color}`}
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