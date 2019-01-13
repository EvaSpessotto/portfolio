import React, { Component } from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
  display: flex;
`;

class Column extends Component {
  render() {
    return (
      <Container style={{marginTop: '100px'}}>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id} direction="horizontal">
          {
            provided => (
              <TaskList
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {this.props.tasks.map((task, index) => 
                  <Task key={task.id} task={task} index={index} />
                )}
                {provided.placeholder}
              </TaskList>
            )
          }
        </Droppable>
      </Container>
      
    );
  }
}

export default Column;