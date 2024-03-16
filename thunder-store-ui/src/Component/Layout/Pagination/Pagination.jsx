import { Item, Wrap } from './Pagination.style';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import PropTypes from 'prop-types';

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func,
    onNavigateNext: PropTypes.func,
    onNavigatePrev: PropTypes.func,
};

function Pagination(props) {
    const { pagination, onNavigateNext, onNavigatePrev, onPageChange } = props;
    const total = Math.ceil(pagination.total / pagination.limit);
    const currentPage = pagination.page;

    const handleChangeCurrentPage = (page) => {
        onPageChange(page);
    };
    const renderPageNumbers = (pageNumbers) => {
        return pageNumbers.map((num, i) =>
            num !== '...' ? (
                <Item
                    onClick={() => handleChangeCurrentPage(num)}
                    key={i}
                    className={num === currentPage ? 'active' : ''}
                >
                    {num}
                </Item>
            ) : (
                <Item key={i}>...</Item>
            ),
        );
    };

    const RenderPage = () => {
        const visiblePages = 6;
        const displayRange = 2;
        let pageNumbers = Array.from({ length: visiblePages }, (_, index) => index + 1);

        if (total <= visiblePages) {
            pageNumbers = Array.from({ length: total }, (_, index) => index + 1);
            return renderPageNumbers(pageNumbers);
        }
        if (currentPage >= visiblePages) {
            let startPage = currentPage - displayRange;
            let endPage = currentPage + displayRange;

            if (endPage > total) endPage = total;
            pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);

            if (startPage > 2) {
                pageNumbers = [1, 2, '...', ...pageNumbers];
            }
            if (endPage !== total) pageNumbers.push('...');
        }
        return renderPageNumbers(pageNumbers);
    };

    const navigateNext = () => {
        console.log(currentPage, total);
        if (currentPage < total) onNavigateNext();
    };
    const navigatePrev = () => {
        if (currentPage !== 1) onNavigatePrev();
    };
    return (
        <>
            <div className="container flex-center">
                <Wrap>
                    <Item>
                        <button className="icon" onClick={navigatePrev}>
                            <HiChevronLeft size={25} />
                        </button>
                    </Item>
                    <RenderPage />
                    <Item>
                        <button className="icon" onClick={navigateNext}>
                            <HiChevronRight size={25} />
                        </button>
                    </Item>
                </Wrap>
            </div>
        </>
    );
}

export default Pagination;
