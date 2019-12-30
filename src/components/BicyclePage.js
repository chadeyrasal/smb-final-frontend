import React from 'react';
import { Container, Card } from 'semantic-ui-react';

const BicyclePage = (props) => {
  let bicycle = props.bicycles.filter(bicycle => bicycle.id === parseInt(props.match.params.id))[0]

  if (bicycle) {
    return (
      <div>
        <Container>
          <Card.Group>
            <Card>
              <Card.Content>
                <Card.Header>{bicycle.title}</Card.Header>
              </Card.Content>
            </Card>
          </Card.Group>
        </Container>
      </div>
    )
  } else {
    return null
  }
}

export default BicyclePage;
