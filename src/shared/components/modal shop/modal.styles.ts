import { css } from '@emotion/css';

export const modalOverlay = css`
    position: fixed;
    top: 98px;
    left: 0;
    right: 0;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
    background: rgba(247, 246, 244, 1);
    z-index: 1000;
    hight: 400px;
`;

export const modalContent = css`
    display: flex;
    width: 100%;

    justify-content: space-between;
    align-items: center;
    background: rgba(247, 246, 244, 1);
    padding: 50px;
    border-radius: 5px;
`;
