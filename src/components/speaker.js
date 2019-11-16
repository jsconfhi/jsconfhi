import React from "react";
import styled from "styled-components";
import { FiUser } from "react-icons/fi";

const SpeakerTitle = styled.div`
  text-align: center;
  width: 180px;
  line-height: 22px;
  padding: 10px 20px 20px;
  a {
    color: #D95B5B;
    font-weight: bold;
  }
`;

const Image = styled.img`
  border-radius: 130px;
  height: 180px;
  width: 180px;
  margin: 0 auto;
  padding: 10px;
  display: flex;
`;

const SpeakerButtonContainer = styled.button`
  margin-bottom: 20px;
  background: white;
  border: white;
  font-size: 18px;
`;

 const SpeakerContainer = styled.div`
  margin-bottom: 20px;
 `;

function Speaker(props) {
  const { speaker, onClick } = props;
   const stopPropagation = (e) => {
    // Do not open modal
    e.stopPropagation();
    return false;
  };

  const isClickable = !!onClick;

  return isClickable ? (
    <SpeakerButtonContainer className='isClickable' key={speaker.name} onClick={onClick}>
    <Image src={speaker.img} alt="" />
    <SpeakerTitle>
      {speaker.name}{' '}
      {speaker.handle && <a target="_blank" onClick={stopPropagation} href={`https://twitter.com/${speaker.handle}`}>@{speaker.handle}</a> }
    </SpeakerTitle>
  </SpeakerButtonContainer>
  ) : (
    <SpeakerContainer key={speaker.name}>
     { speaker.img ? <Image src={speaker.img} alt="" /> : <FiUser /> }
      <SpeakerTitle>
        { speaker.name} {' '}
        { speaker.handle && <a target="_blank" onClick={stopPropagation} href={`https://twitter.com/${speaker.handle}`}>@{speaker.handle}</a> }
      </SpeakerTitle>
    </SpeakerContainer>
  )
}

export default Speaker;