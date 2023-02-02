import styled from "styled-components";

export const BoxStarShips = styled.div`
  background-color: #151515;
  border-radius: 0.2rem;
  margin: 2rem;
  display: flex;
  flexdirection: column;
  justify-content: left;
  padding-left: 1rem;
  align-items: left;
  height: 4.5rem;
  width: 700px;
  cursor: pointer;
`;

export const InfoShips = styled.div`
  background-color: #151515;
  border-radius: 0.2rem;
  margin: 2px;
  display: flex;
  justify-content: center;
  padding-left: 1rem;
  align-items: center;
  height: 700px;
  width: auto;
  flexdirection: column;
`;

export const TextPrimary = styled.div`
  display: flex;
  font-size: 12px;
  justify-content: center;
  flexdirection: column;
`;

export const TextSecondary = styled.div`
  display: flex;
  font-size: 10px;
  justify-content: center;
  flexdirection: column;
`;

export const CloseButton = styled.button`
  font-size: 10px;
  font-weight: bold;
  color: white;
  border-color: white;
  border-radius: 60px;
  background-color: #151515;
  margin: 8px;
`;

export const ImageShip = styled.img`
  width: 20%;
  top: 3.5rem;
  right: 5rem;
  display: flex;
  gap: 1.5rem;
`;
