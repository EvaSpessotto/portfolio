import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Container, Row, Col } from 'reactstrap';
import initialData from '../data/initialData';
import Column from '../components/NotFound/Column'


class NotFoundContainer extends Component {
  state = initialData;
  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    };

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...this.state, 
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        },
      };
      this.setState(newState);
      return;
    }

    // Moving from one list to another
    const startTaskIds = Array.from (start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start, 
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
         [newStart.id]: newStart,
         [newFinish.id]: newFinish,
      },
    };
    this.setState(newState);
  };


  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Container id="not-found">
          <Row className="text-center mb-5">
            <Col>
              <h1>404</h1>
              <h2>Désolée, la page que vous cherchez n'existe pas !</h2>
              <h4>Néanmoins, vous pouvez vous amuser avec les cercles ci-dessous</h4>
            </Col>
          </Row>
          <Row style={{minHeight: '280px'}}>
            {this.state.columnOrder.map(columnId => {
              const column = this.state.columns[columnId];
              const tasks = column.taskIds.map(taskId => this.state.tasks[taskId])

              return <Column key={column.id} column={column} tasks={tasks} />;
            })}
          </Row>
         
        </Container>
      </DragDropContext>
    );
  }
}

export default NotFoundContainer;