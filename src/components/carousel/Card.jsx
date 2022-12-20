import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { Heading3, Heading4, Body1, Button } from '../shared';

const CardMob = styled.div`
  ${tw`
    rounded-2xl
    p-3
    bg-gray-900
    flex
    flex-col
    gap-4
  `}
  height: 359px;
  width: 259px;
  sm:border: ${(props) => (props.focused ? '2px solid yellow' : '')};
`;

const FirstHalf = styled.div`
  ${tw`h-1/2 bg-white w-full rounded-md`}
`;

const SecondHalf = styled.div`
  ${tw`h-1/2  text-yellow-400 flex flex-col justify-between`}
`;

const Bottom = styled.div`
  ${tw`flex justify-between items-center`}
`;

export default function Card({ heading, name, designation, date, label, focused }) {
  return (
    <CardMob focused={focused}>
      <FirstHalf />
      <SecondHalf>
        <Heading3 semibold>{heading}</Heading3>
        <Body1>
          <span className='font-[590]'>{name}</span> : {designation}
        </Body1>
        <Bottom>
          <Heading4>{date}</Heading4>
          <Button filled text={label} />
        </Bottom>
      </SecondHalf>
    </CardMob>
  );
}