import styled from 'styled-components';
export const TopBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 36px;
    font-weight: 400;
    font-size: 1.4rem;
    color: #fff;
    & a {
        color: #fff;
    }
`;

export const TopLeft = styled.div`
    gap: 0 10px;
    span {
        gap: 0 8px;
    }
`;

export const TopRight = styled.div`
    gap: 0 10px;
    label {
        gap: 0 5px;
    }
`;

export const Header = styled.header`
    background-color: #fff;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    padding: 10px 0;
    & .container {
        display: flex;
        justify-content: space-between;
    }

    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    z-index: 100;
`;
export const Logo = styled.div`
    display: flex;
    align-items: center;
    & a {
        display: flex;
        align-items: center;
    }
    & p {
        color: var(--text-color);
        font-size: 2rem;
        font-weight: 700;
    }
`;

export const Searchbox = styled.section`
    width: 440px;
    max-width: 440px;
    height: 36px;
    border: 2px solid var(--gray-color);
    border-radius: 16px;
    margin-left: 20px;
    overflow: clip;
    &:focus-within {
        border-color: var(--primary-color);
    }
    form {
        display: flex;
        height: 100%;
    }
    input {
        flex: 1;
        padding: 8px 12px;
    }
    .search-icon {
        width: 40px;
        padding: 10px;
        background-color: var(--primary-color);
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.8rem;
    }
`;
export const UserContainer = styled.section`
    gap: 0 20px;
`;
export const Cart = styled.div`
    position: relative;
    & a {
        width: max-content;
        display: flex;
        gap: 0 5px;
        font-weight: 600;
    }
    color: var(--black-color);
`;
export const User = styled.label`
    padding: 5px;
    margin-right: 5px;
    cursor: pointer;
    display: flex;
    gap: 0 10px;
    & input {
        display: hidden;
    }
`;
export const CartQuantiy = styled.span`
    position: absolute;
    font-size: 1.2rem;
    color: #fff;
    background-color: #e74c3c;
    padding: 4px;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transform: translate(50%, -50%);
`;
export const CartReview = styled.div`
    width: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--white-color);
    border-radius: 6px;
    padding: 20px 0;
`;
export const CartReviewItem = styled.div`
    display: flex;
    gap: 0 10px;
    width: 100%;
    padding: 10px 20px;
    align-items: center;
    & .img img {
        width: 50px;
        aspect-ratio: 1/1;
        border-radius: 5px;
    }
    & .name {
        flex-shrink: 0;
        overflow-x: hidden;
        flex: 1;
    }
    & .price {
    }
    &:hover {
        background-color: var(--background-white);
    }
`;

export const AnoQuantity = styled.p`
    font-size: 1.4rem;
    background-color: var(--error-color);
    color: #fff;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
`;
