/* eslint-disable react/prop-types */
import styled from "styled-components";

const VisionBtn = ({ Icon }) => {
  return (
    <StyledWrapper>
      <a>
        <Icon size={32} />
      </a>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  a {
    color: rgba(255, 255, 255, 0.692);
    padding: 10px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.397);
    background: rgba(255, 255, 255, 0.068);
    overflow: hidden;
    font-size: 0.9rem;
    font-weight: 600;
    gap: 8px;
    border-radius: 5px;
    margin: 0 5px;
    transition: 0.2s;
    border: 1px solid transparent;
  }

  a:hover {
    border-color: rgba(255, 255, 255, 0.623);
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.144),
      rgba(255, 255, 255, 0.247),
      rgba(255, 255, 255, 0.39)
    );
    box-shadow: 0 6px rgba(255, 255, 255, 0.623);
    transform: translateY(-6px);
  }

  a:active {
    transform: translateY(2px);
    box-shadow: none;
  }
`;

export default VisionBtn;
