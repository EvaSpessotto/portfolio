import React, { Component, Fragment } from 'react';
import { Col } from 'reactstrap';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';
import { BounceDiv } from '../../data/styledComponents';



const TaskList = styled.div`
  display: flex;
  width: 100%;
`;

class Column extends Component {
  render() {
    return (
        <Droppable droppableId={this.props.column.id} direction="horizontal">
          {
            provided => (
              <TaskList
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {
                  this.props.tasks.map((task, index) => 
                      <Col className="m-0 p-0" md="1">
                        <BounceDiv>
                          <Task key={task.id} task={task} index={index} />
                        </BounceDiv>
                      </Col>
                  )
                
                }
                {provided.placeholder}
              </TaskList>
            )
          }
        </Droppable>
    );
  }
}

export default Column;