import React from 'react';
import {Grid} from 'hehe-mobile';

const data = Array.from(new Array(9)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `name${i}`,
}));

const data1 = Array.from(new Array(9)).map(() => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
}));

const GridView = () => {
    return (
      <div>
          <div className="sub-title">Always square grid item</div>
          <Grid data={data} activeStyle={false}/>

          <div className="sub-title">Grid item adjust accroiding to img size</div>
          <Grid data={data} square={false} className="not-square-grid"/>

          <div className="sub-title">ColumnNum=3</div>
          <Grid data={data} columnNum={3}/>

          <div className="sub-title">No border</div>
          <Grid data={data} hasLine={false}/>

          <div className="sub-title">Carousel</div>
          <Grid data={data} isCarousel onClick={_el => console.log(_el)}/>

      </div>
    );
}
export default GridView;