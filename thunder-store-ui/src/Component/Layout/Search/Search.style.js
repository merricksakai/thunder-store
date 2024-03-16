import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
export const Wrap = styled.div`
    display: flex;
    gap: 0 5px;
    align-items: center;
    justify-content: center;
`;
export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    gap: 0 15px;
    margin: 20px 0;
    flex-wrap: wrap;
`;

export const Content = styled.section`
    background-color: var(--white-color);
    flex: 1;
    width: 100%;
    min-width: 600px;
    border-radius: 6px;
    padding: 10px 20px;
`;

export const SearchBar = styled.div`
    display: flex;
    width: 40%;
    height: 50px;
    gap: 0 5px;
    background-color: var(--background-white);
    padding: 5px 20px;
    position: relative;
    border-radius: 6px;
`;
export const SearchContent = styled.form`
    display: flex;
    gap: 0 5px;
    padding: 15px 20px;
    & button[type='submit'] {
        background-color: var(--primary-color);
        color: var(--white-color);
        padding: 10px;
        border-radius: 6px;
    }
`;
export const ContentHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
`;
export const Input = styled.div`
    position: relative;
    flex: 1;
    border: 1px solid #ccc;
    border-radius: 6px;
    & input {
        padding: 10px 20px;
        border-radius: 6px;
        font-size: 1.8rem;
        height: 100%;
        width: 100%;
    }
    & .icon {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translate(-50%, -50%);
    }
`;

export const SearchResult = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 300px;
    overflow-y: auto;
`;
export const Loading = styled.div`
    animation: rotation 2s infinite linear;
    @keyframes rotation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(359deg);
        }
    }
`;
export const ResultItem = styled(Link)`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 5px 20px;
    & .img img {
        width: 50px;
        aspect-ratio: 1/1;
        border-radius: 5px;
    }
    & .name {
        width: 100%;
        flex: 1;
        margin-left: 20px;
    }
    &:hover {
        background-color: var(--background-white);
    }
`;
export const MoreBtn = styled(Link)`
    border-radius: 40px;
    max-width: max-content;
    padding: 3px 10px;
    border: 2px solid var(--gray-color);
    font-size: 1.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0 20px 0;
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: var(--primary-color);
        color: var(--white-color);
        border-color: var(--primary-color);
    }
`;
