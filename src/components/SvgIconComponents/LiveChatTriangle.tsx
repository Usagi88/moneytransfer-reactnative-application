import React from 'react';
import Svg, {Path} from 'react-native-svg';

const LiveChatTriangle = (props: any) => {
  return (
    <Svg width={props.width} height={props.height} viewBox="0 0 38 22">
      <Path d="M38 0H0L16.5 21.5L38 0Z" fill={props.color} fillRule="evenodd" />
    </Svg>
  );
};

export default LiveChatTriangle;
