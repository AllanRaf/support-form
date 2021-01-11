import styled from "styled-components";

const InfoBlock = styled.div`
  align-items: flex-start;
  flex-direction: column;
  display: flex;
  border-radius: 2px;
  width: 80%;
  border: 1px solid #898f97;
  margin-bottom: 1rem;
  padding: 0.5rem 0.5rem 0.5rem;
`;

const InfoTitle = styled.span`
  padding: 2px 2px 2pc;
  display: inline-block;
  font-size: 1.8rem;
`;

const InfoSection = styled.span`
  display: inline-block;
  padding: 1px 2px 1px;
  font-size: 1.5rem;
`;

export { InfoBlock, InfoTitle, InfoSection };
