import React, { Component } from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import '../../style/notFound.scss';
import { BounceDiv } from '../../data/styledComponents';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  margin-right: 8px;
  border-radius: 100%;
  color: blue;
  height: 100%;
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
              <BounceDiv>
              {this.props.task.content[0]}
              </BounceDiv>
            </Container>
          )
        }
        
     </Draggable>
    );
  }
}

export default Task;