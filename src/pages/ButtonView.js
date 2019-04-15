import React from 'react';
import {Button, WhiteSpace} from 'hehe-mobile';

const ButtonView = () => {
    return (
        <>
            <Button>default</Button>
            <WhiteSpace/>
            <Button disabled>diabled</Button>
            <WhiteSpace/>
            <Button variant="primary">primary</Button>
            <WhiteSpace/>
            <Button variant="primary" disabled>primary disabled</Button>
            <WhiteSpace/>
            <Button variant="warning">warning</Button>
            <WhiteSpace/>
            <Button variant="warning" disabled>warning disabled</Button>
            <WhiteSpace/>
            <Button variant="primary" inline>primary inline</Button>
            <Button variant="ghost" inline style={{marginLeft: '10px'}}>primary </Button>
            <WhiteSpace/>
            <Button variant="primary" size='small' inline>primary inline</Button>
            <Button variant="ghost" size='small' inline
                    style={{marginLeft: '10px'}}>primary </Button>
        </>
    );
}
export default ButtonView;