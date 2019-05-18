import React from 'react';
import {Tag} from 'hehe-mobile';

function onChange(selected) {
    console.log(`tag selected: ${selected}`);
}

const tagContainer = {
    display: 'flex',
    paddingTop: '9px',
    flexDirection: 'row',
    flexWrap: 'wrap'
};
const TagView = () => {
    return (
      <>
          <div className="tag-container" style={tagContainer}>
              <Tag data-seed="logId">Basic</Tag>
              <Tag selected>Selected</Tag>
              <Tag disabled>Disabled</Tag>
              <Tag onChange={onChange}>Callback</Tag>
              <Tag closable
                   onClose={() => {
                       console.log('onClose');
                   }}
                   afterClose={() => {
                       console.log('afterClose');
                   }}
              >
                  Closable
              </Tag>
              <Tag small>Small and Readonly</Tag>
          </div>
      </>
    );
}
export default TagView;