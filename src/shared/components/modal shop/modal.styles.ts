import { css } from '@emotion/css';

export const modalOverlay = css`

    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
    background: rgba(247, 246, 244, 1);
    z-index: 1000;
    hight: 400px;
`;

export const modalContent = css`
    position: fixed;
    top: 90px;
    left: 0;
    right: 0;
    display: flex;
    width: 100%;
    background: rgba(247, 246, 244, 1);
    padding: 50px 0;
    border-radius: 5px;
`;
