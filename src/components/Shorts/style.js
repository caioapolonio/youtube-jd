import styled from "styled-components";

export const Container = styled.div`
  min-width: 320px;
  max-width: 100%;
  padding: 16px 0px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 16px;
  gap: 6px;
`;
export const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: var(--font-color-dark);
`;
export const ShortsScroll = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  flex-wrap: nowrap;
  flex-shrink: 0;
  padding: 0px 16px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
