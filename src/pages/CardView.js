import React from 'react';
import icon from '$images/icon.png';
import {Card,WhiteSpace} from 'hehe-mobile';

const CardView = () => {
    return (
      <>
          <WhiteSpace/>
          <Card>
              <Card.Header
                title="This is title"
                thumb={icon}
                extra={<span>this is extra</span>}
              />
              <Card.Body>
                  <div>This is content of `Card`</div>
              </Card.Body>
              <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
          </Card>
          <WhiteSpace/>
          <Card full>
              <Card.Header
                title="This is title"
                thumb={icon}
                extra={<span>this is extra</span>}
              />
              <Card.Body>
                  <div>This is content of `Card`</div>
              </Card.Body>
              <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
          </Card>
      </>
    );
}
export default CardView;