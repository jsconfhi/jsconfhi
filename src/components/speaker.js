import React from "react";
import styled from "styled-components";

const Container = styled.div`
  cursor: pointer;
`;

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
  margin-right: 20px;
`;

function Speaker(props) {
  const { speaker, setSpeaker, i } = this.props;
   const stopPropagation = (e) => {
    // Do not open modal
    e.stopPropagation();
    return false;
  };

  return (
     <Container key={i} onClick={setSpeaker}>
      <Image src={speaker.img} alt="" />
      <SpeakerTitle>
        {speaker.name}{' '}
        <a target="_blank" onClick={stopPropagation} href={`https://twitter.com/${speaker.handle}`}>@{speaker.handle}</a>
      </SpeakerTitle>
    </Container>
  );
}

export default Speaker;