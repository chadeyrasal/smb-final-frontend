import React from 'react';
import { Link } from 'react-router-dom';
import { Card, List, Label, Icon } from 'semantic-ui-react';

const BicyclesCard = ({ user }) => {
  return (
    <Card>
      <Card.Content>
        <List divided relaxed>
          {user.bicycles.map(bicycle =>
            <List.Item key={bicycle.id}>
              <List.Content>
                <Card.Description>{bicycle.title}</Card.Description>
                <List bulleted horizontal link>
                  <List.Item><Label><Icon name='tag' /> £{bicycle.price}</Label></List.Item>
                  <List.Item as={Link} to={`/bicycles/${bicycle.id}`}>See details</List.Item>
                </List>
              </List.Content>
            </List.Item>
          )}
        </List>
      </Card.Content>
    </Card>
  )
}

export default BicyclesCard;
