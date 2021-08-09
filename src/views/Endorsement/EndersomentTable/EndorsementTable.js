// ** React Imports
import { Fragment, useState, useEffect, memo } from 'react'
import TableData from './TableData'

// ** Table Columns
import { serverSideColumns } from '../EndersomentTable/TableData'

// ** Store & Actions
import { getData } from '../EndersomentTable/store/actions'
import { useSelector, useDispatch } from 'react-redux'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { ChevronDown } from 'react-feather'
import DataTable from 'react-data-table-component'
import { Card, CardHeader, CardTitle, Input, Label, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, CustomInput } from 'reactstrap'


const EndersomentTable = () => {
    // ** Store Vars
    const dispatch = useDispatch()
    const store = useSelector(state => state.dataTables)

    // ** States
    const [currentPage, setCurrentPage] = useState(1)
    const [rowsPerPage, setRowsPerPage] = useState(7)
    const [searchValue, setSearchValue] = useState('')

    // ** Get data on mount
    useEffect(() => {
        dispatch(
            getData({
                page: currentPage,
                perPage: rowsPerPage,
                q: searchValue
            })
        )
    }, [dispatch])

    // ** Function to handle filter
    const handleFilter = e => {
        setSearchValue(e.target.value)

        dispatch(
            getData({
                page: currentPage,
                perPage: rowsPerPage,
                q: e.target.value
            })
        )
    }

    // ** Function to handle Pagination and get data
    const handlePagination = page => {
        dispatch(
            getData({
                page: page.selected + 1,
                perPage: rowsPerPage,
                q: searchValue
            })
        )
        setCurrentPage(page.selected + 1)
    }

    // ** Function to handle per page
    const handlePerPage = e => {
        dispatch(
            getData({
                page: currentPage,
                perPage: parseInt(e.target.value),
                q: searchValue
            })
        )
        setRowsPerPage(parseInt(e.target.value))
    }

    const [showAddEndorsement, setShowAddEndorsement] = useState(false)

    // ** Custom Pagination
    const CustomPagination = () => {
        const count = Number((store.total / rowsPerPage).toFixed(0))

        return (
            <ReactPaginate
                previousLabel={''}
                nextLabel={''}
                breakLabel='...'
                pageCount={count || 1}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                activeClassName='active'
                forcePage={currentPage !== 0 ? currentPage - 1 : 0}
                onPageChange={page => handlePagination(page)}
                pageClassName={'page-item'}
                nextLinkClassName={'page-link'}
                nextClassName={'page-item next'}
                previousClassName={'page-item prev'}
                previousLinkClassName={'page-link'}
                pageLinkClassName={'page-link'}
                breakClassName='page-item'
                breakLinkClassName='page-link'
                containerClassName={
                    'pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1'
                }
            />
        )
    }

    // ** Table data to render
    const dataToRender = () => {
        const filters = {
            q: searchValue
        }

        const isFiltered = Object.keys(filters).some(function (k) {
            return filters[k].length > 0
        })

        if (store.data.length > 0) {
            return store.data
        } else if (store.data.length === 0 && isFiltered) {
            return []
        } else {
            return store.allData.slice(0, rowsPerPage)
        }
    }

    return (
        <>
            <Fragment>
                <Card>
                    <Row className='mx-0 mt-1 mb-1 ml-1 mr-1'>
                        <Col xl='6' lg='12'>
                            <div className='d-flex justify-content-star align-items-center'>
                                <Label className='pr-1' for='sort-select'>show</Label>
                                <Input
                                    className='dataTable-select'
                                    type='select'
                                    id='sort-select'
                                    value={rowsPerPage}
                                    onChange={e => handlePerPage(e)}
                                    style={{ width: 70 }}
                                >
                                    <option value={7}>7</option>
                                    <option value={10}>10</option>
                                    <option value={25}>25</option>
                                    <option value={50}>50</option>
                                    <option value={75}>75</option>
                                    <option value={100}>100</option>
                                </Input>
                                <Label className='pl-1' for='sort-select'>Entries</Label>
                            </div>
                        </Col>

                        <Col xl='3'>
                            <Input
                                className='dataTable-filter'
                                type='text'
                                bsSize='sm'
                                id='search-input'
                                placeHolder='Search'
                                value={searchValue}
                                onChange={handleFilter}
                                style={{ height: 40 }}
                            />
                        </Col>

                        <Col xl='3' lg='12'>
                            <Button.Ripple color='primary' onClick={() => setShowAddEndorsement(!showAddEndorsement)}>New Endersoment</Button.Ripple>
                        </Col>
                    </Row>

                    <TableData />
                </Card>
            </Fragment>

            <div >
                <Modal isOpen={showAddEndorsement} toggle={() => setShowAddEndorsement(!showAddEndorsement)} className='modal-dialog-centered'>
                    <ModalHeader toggle={() => setShowAddEndorsement(!showAddEndorsement)}>New Endorsement</ModalHeader>
                    <ModalBody>
                        <Row>
                            <Col md='12' sm='12'>
                                <Label for='selectEmployeeID'><h5>Select Employee ID</h5></Label>
                                <Input type='select' name='selcetEmployeeID' id='selectEmployeeID' />
                            </Col>
                        </Row>
                        <Row className='d-flex justify-content-space-between pt-2'>
                            <Col xl='9'>
                                <h5 >Unpaid Endorsement</h5>
                                <ul style={{ listStyle: 'none', marginLeft: -40, paddingTop: 10 }}>
                                    <li style={{ paddingBottom: 5 }}>Name</li>
                                    <li style={{ paddingBottom: 5 }}>Email</li>
                                    <li style={{ paddingBottom: 5 }}>Phone</li>
                                    <li>Address</li>
                                </ul>
                            </Col>
                            <Col className='justify-content-start'>
                                <CustomInput type='radio' id='unpaidEndorsement' name='unpaidEndorsement' />
                                <div style={{ paddingTop: 10 }}>
                                    <CustomInput
                                        type='checkbox'
                                        className='custom-control-Primary'
                                        id='a'
                                        name=''
                                        label=''
                                        inline
                                    />
                                </div>
                                <div>
                                    <CustomInput
                                        type='checkbox'
                                        className='custom-control-Primary'
                                        id='b'
                                        name=''
                                        label=''
                                        inline
                                    />
                                </div>
                                <div>
                                    <CustomInput
                                        type='checkbox'
                                        className='custom-control-Primary'
                                        id='c'
                                        name=''
                                        label=''
                                        inline
                                    />
                                </div>
                                <div>
                                    <CustomInput
                                        type='checkbox'
                                        className='custom-control-Primary'
                                        id='d'
                                        name=''
                                        label=''
                                        inline
                                    />
                                </div>
                            </Col>
                        </Row>

                        <Row className='d-flex justify-content-space-between pt-2'>
                            <Col xl='9'>
                                <h5 >Paid</h5>
                                <ul style={{ listStyle: 'none', marginLeft: -40, paddingTop: 10 }}>
                                    <li style={{ paddingBottom: 5 }}>Premium Amount</li>
                                    <li style={{ paddingBottom: 5 }}>Premium Monthwise</li>
                                    <li style={{ paddingBottom: 5 }}>Change In Nominee</li>
                                    <li>Family Members</li>
                                </ul>
                            </Col>
                            <Col className='justify-content-start'>
                                <CustomInput type='radio' id='paid' name='paid' />
                                <div style={{ paddingTop: 10 }}>
                                    <CustomInput
                                        type='checkbox'
                                        className='custom-control-Primary'
                                        id='e'
                                        name=''
                                        label=''
                                        inline
                                    />
                                </div>
                                <div>
                                    <CustomInput
                                        type='checkbox'
                                        className='custom-control-Primary'
                                        id='f'
                                        name=''
                                        label=''
                                        inline
                                    />
                                </div>
                                <div>
                                    <CustomInput
                                        type='checkbox'
                                        className='custom-control-Primary'
                                        id='g'
                                        name=''
                                        label=''
                                        inline
                                    />
                                </div>
                                <div>
                                    <CustomInput
                                        type='checkbox'
                                        className='custom-control-Primary'
                                        id='h'
                                        name=''
                                        label=''
                                        inline
                                    />
                                </div>
                            </Col>
                        </Row>
                    </ModalBody>
                    <ModalFooter>
                        <Button color='flat-primary' onClick={() => setShowAddEndorsement(!showAddEndorsement)}>
                            Cancel
                        </Button>{' '}
                        <Button color='flat-primary' outline onClick={() => setShowAddEndorsement(!showAddEndorsement)}>
                            Submit
                        </Button>{' '}
                    </ModalFooter>
                </Modal>
            </div>

        </>
    )
}

export default memo(EndersomentTable)