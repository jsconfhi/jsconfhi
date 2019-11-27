import styled from "styled-components";

export const Link = styled.a`
  color: #d95b5b;
`;

export const modalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "800px",
    maxWidth: "80%",
    maxHeight: "80%"
  }
};

export const ModalButton = styled.button`
  cursor: pointer;
  color: #667;
  background: linear-gradient(45deg, transparent, transparent);
  border-color: transparent;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1em;
  right: 1em;
  cursor: pointer;
  padding: 0.5em;
  background: linear-gradient(45deg, white, white);
  border: transparent;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: top;
    align-items: center;
  }
`;

export const SectionHeading = styled.div`
  grid-column: 2 / span 4;
  color: #1a7173;
  @media (max-width: 800px) {
    grid-column: 1 / span 13;
    justify-self: center;
    text-align: center;
  }
`;

export const SectionContent = styled.div`
  grid-column 6/span 8;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 800px) {
    grid-column: 1/span 13;
    justify-self: center;
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  padding: 0 25px;
`;

export const Title = styled.h2`
  margin-right: 0.5em;
`;
