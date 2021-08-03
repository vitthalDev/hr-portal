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
                    {/* <CardHeader className='border-bottom'>
                    <CardTitle tag='h4'></CardTitle>
                </CardHeader> */}
                    <Row className='mx-0 mt-1 mb-50'>
                        <Col sm='2'>
                            <div className='d-flex align-items-center'>
                                <Label for='sort-select'>show</Label>
                                <Input
                                    className='dataTable-select'
                                    type='select'
                                    id='sort-select'
                                    value={rowsPerPage}
                                    onChange={e => handlePerPage(e)}
                                >
                                    <option value={7}>7</option>
                                    <option value={10}>10</option>
                                    <option value={25}>25</option>
                                    <option value={50}>50</option>
                                    <option value={75}>75</option>
                                    <option value={100}>100</option>
                                </Input>
                                <Label for='sort-select'>Entries</Label>
                            </div>
                        </Col>
                        <Col sm='4'>

                        </Col>
                        <Col className='d-flex align-items-center justify-content-sm-end mt-sm-0 mt-1' sm='3'>
                            {/* <Label className='mr-1' for='search-input'>
                            Search
                        </Label> */}
                            <Input
                                className='dataTable-filter'
                                type='text'
                                bsSize='sm'
                                id='search-input'
                                placeHolder='Search'
                                value={searchValue}
                                onChange={handleFilter}
                            />
                        </Col>
                        <Col sm='3'>
                            <Button.Ripple color='primary' onClick={() => setShowAddEndorsement(!showAddEndorsement)}>New Endersoment</Button.Ripple>
                        </Col>
                    </Row>
                    {/* <DataTable
                    noHeader
                    pagination
                    paginationServer
                    className='react-dataTable'
                    columns={serverSideColumns}
                    sortIcon={<ChevronDown size={10} />}
                    paginationComponent={CustomPagination}
                    data={dataToRender()}
                /> */}
                    <TableData />
                </Card>
            </Fragment>

            <div>
                <Modal isOpen={showAddEndorsement} toggle={() => setShowAddEndorsement(!showAddEndorsement)} className='modal-dialog-centered'>
                    <ModalHeader toggle={() => setShowAddEndorsement(!showAddEndorsement)}>New Endorsement</ModalHeader>
                    <ModalBody>
                        <Row>
                            <Col md='12' sm='12'>
                                <Label for='selectEmployeeID'>Select Employee ID</Label>
                                <Input type='select' name='selcetEmployeeID' id='selectEmployeeID' />
                            </Col>
                        </Row>
                        <Row className='pt-2'>
                            <Col md='10'>
                                <h5 style={{ padding: 10 }}>Unpaid Endorsement</h5>
                                <div style={{ paddingLeft: 10 }}>
                                    <small>Name</small><br />
                                    <small>Email</small><br />
                                    <small>Phone</small><br />
                                    <small>Address</small>
                                </div>
                            </Col>
                            <Col md='2'>
                                <CustomInput type='radio' id='unpaidEndorsement' name='unpaidEndorsement' />
                                <div style={{ paddingTop: 20 }}>
                                    <CustomInput
                                        type='checkbox'
                                        className='custom-control-Primary'
                                        id='Primary'
                                        label=''
                                        defaultChecked
                                        inline
                                    />
                                    <CustomInput
                                        type='checkbox'
                                        className='custom-control-Primary'
                                        id='Primary'
                                        label=''
                                        defaultChecked
                                        inline
                                    />
                                    <CustomInput
                                        type='checkbox'
                                        className='custom-control-Primary'
                                        id='Primary'
                                        label=''
                                        defaultChecked
                                        inline
                                    />
                                    <CustomInput
                                        type='checkbox'
                                        className='custom-control-Primary'
                                        id='Primary'
                                        label=''
                                        defaultChecked
                                        inline
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row className='pt-2'>
                            <Col md='10'>
                                <h5 style={{ padding: 10 }}>Paid</h5>
                                <div style={{ paddingLeft: 10 }}>
                                    <small>Premium Amount</small><br />
                                    <small>Premium Monthwise</small><br />
                                    <small>Change in Nominee</small><br />
                                    <small>Family Members</small>
                                </div>
                            </Col>
                            <Col md='2'>
                                <CustomInput type='radio' id='paid' name='paid' />
                                <div style={{ paddingTop: 20 }}>
                                    <CustomInput
                                        type='checkbox'
                                        className='custom-control-Primary'
                                        id='Primary'
                                        label=''
                                        inline
                                    />
                                    <CustomInput
                                        type='checkbox'
                                        className='custom-control-Primary'
                                        id='Primary'
                                        label=''
                                        inline
                                    />
                                    <CustomInput
                                        type='checkbox'
                                        className='custom-control-Primary'
                                        id='Primary'
                                        label=''
                                        inline
                                    />
                                    <CustomInput
                                        type='checkbox'
                                        className='custom-control-Primary'
                                        id='Primary'
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