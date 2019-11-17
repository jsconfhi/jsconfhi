import React from "react";
import styled from "styled-components";
import { FiUser } from "react-icons/fi";

const SpeakerTitle = styled.div`
  text-align: center;
  line-height: 22px;
  padding: 10px 20px 20px;
  margin-right: 1em;
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

const SVGContainer = styled.div`
  border-radius: 130px;
  height: 180px;
  width: 180px;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  svg {
    font-size: 180px;
    background: white;
    padding: 30px 40px 0 40px;
    border-radius: 50px;
    cursor: initial;
  }
`;

const SpeakerButtonContainer = styled.button`
  margin-bottom: 20px;
  background: white;
  border: white;
  font-size: 18px;
  width: 200px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

 const SpeakerContainer = styled.div`
  width: 200px;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    width: 100%;
  }
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
        <div>{speaker.name}</div>
        {speaker.handle && <a target="_blank" onClick={stopPropagation} href={`https://twitter.com/${speaker.handle}`}>@{speaker.handle}</a> }
      </SpeakerTitle>
    </SpeakerButtonContainer>
  ) : (
    <SpeakerContainer key={speaker.name}>
     { speaker.img ? <Image src={speaker.img} alt="" /> : <SVGContainer><FiUser /></SVGContainer> }
      <SpeakerTitle>
        <div>{speaker.name}</div>
        { speaker.handle && <a target="_blank" onClick={stopPropagation} href={`https://twitter.com/${speaker.handle}`}>@{speaker.handle}</a> }
      </SpeakerTitle>
    </SpeakerContainer>
  )
}

export default Speaker;