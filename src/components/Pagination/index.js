import Button from '../Button'

const Pagination = ({selectPage, totalNumberOfPages, currentPage}) => {

    const pageButtons = []
    for (let i = 1; i <= totalNumberOfPages; i++) {
        pageButtons.push(
            <option key={i} value={i}>{i}</option>
        )
    }   

    return (
        <div className="text-center pagination">
            <div>
                <label className="pagination-label">Select page:</label>
                <select onChange={e=>selectPage(e.target.value)} value={currentPage}>
                    {pageButtons}
                </select>
            </div>
            <div className="flex justify-center pagination-btns">
                {currentPage !== 1 && (
                    <div>
                        <Button classes={'pagination-btn'} fn={()=>selectPage(currentPage - 1)}>
                            Previous
                        </Button>
                    </div>
                )}
                {currentPage !== totalNumberOfPages && (
                    <div>
                        <Button classes={'pagination-btn'} fn={()=>selectPage(currentPage + 1)}>
                            Next
                        </Button>
                    </div>
                )}
            </div>

        </div>
    )
}

export default Pagination
