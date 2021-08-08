// ** React Imports
import { Fragment, useState, useEffect, memo } from 'react'
import TableData from './TableData'

// ** Table Columns
import { serverSideColumns } from '../PoliciesTable/TableData'

// ** Store & Actions
import { getData } from './store/actions'
import { useSelector, useDispatch } from 'react-redux'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { ChevronDown } from 'react-feather'
import DataTable from 'react-data-table-component'
import { Card, CardHeader, CardTitle, Input, Label, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, CustomInput } from 'reactstrap'
import awsomefilter from '@src/assets/images/icons/awsomefilter.png'
import awsomeplus from '@src/assets/images/icons/awsomeplus.png'
import CardBody from 'reactstrap/lib/CardBody'

const PoliciesTable = () => {
    // ** Store Vars
    const dispatch = useDispatch()
    const store = useSelector(state => state.dataTables)

    // ** States
    const [currentPage, setCurrentPage] = useState(1)
    const [rowsPerPage, setRowsPerPage] = useState(7)
    const [searchValue, setSearchValue] = useState('')
    const [showAddPolicy, setShowAddPolicy] = useState(false)
    const [showFilterPolicy, setShowFilterPolicy] = useState(false)

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
                            <div>
                                <h5>No. of Policies</h5>
                            </div>
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
                        <Col sm='2' style={{ marginLeft: -50 }}>
                            <img src={awsomefilter} style={{ cursor: 'pointer', marginRight: 10 }} onClick={() => setShowFilterPolicy(!showFilterPolicy)} />
                            <img src={awsomeplus} style={{ cursor: 'pointer' }} onClick={() => setShowAddPolicy(!showAddPolicy)} />
                        </Col>
                        <Col className='d-flex align-items-center justify-content-sm-end mt-sm-0 mt-1' sm='3'>
                            {/* <Label className='mr-1' for='search-input'>
                            Search
                        </Label> */}
                            {/* <Input
                            className='dataTable-filter'
                            type='text'
                            bsSize='sm'
                            id='search-input'
                            placeHolder='Search'
                            value={searchValue}
                            onChange={handleFilter}
                        /> */}
                        </Col>
                        <Col sm='3'>
                            {/* <Button.Ripple color='primary'>New Endersoment</Button.Ripple> */}
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

            {/* filter policy */}
            <div>
                <Modal isOpen={showFilterPolicy} toggle={() => setShowFilterPolicy(!showFilterPolicy)} className='modal-dialog-centered'>
                    <ModalHeader toggle={() => setShowFilterPolicy(!showFilterPolicy)}>Select Plan</ModalHeader>
                    <ModalBody>
                        <Row>
                            <Col md='10' sm='12'>
                                <Label for='all'>All</Label>
                            </Col>
                            <Col md='2' sm='12'>
                                <Input type='radio' name='all' id='showAll' />
                            </Col>
                        </Row>
                        <Row>
                            <Col md='10' sm='12'>
                                <Label for='healthCover'>Health Cover</Label>
                            </Col>
                            <Col md='2' sm='12'>
                                <Input type='radio' name='healthCover' id='healthCover' />
                            </Col>
                        </Row>
                        <Row>
                            <Col md='10' sm='12'>
                                <Label for='lifeCover'>Life Cover</Label>
                            </Col>
                            <Col md='2' sm='12'>
                                <Input type='radio' name='lifeCover' id='lifeCover' />
                            </Col>
                        </Row>
                    </ModalBody>
                    <ModalFooter>
                        <Button color='flat-primary' onClick={() => setShowFilterPolicy(!showFilterPolicy)}>
                            Apply
                        </Button>{' '}
                    </ModalFooter>
                </Modal>
            </div>

            {/* add policy */}
            <div>
                <Modal isOpen={showAddPolicy} toggle={() => setShowAddPolicy(!showAddPolicy)} className='modal-dialog-centered'>
                    <ModalHeader toggle={() => setShowAddPolicy(!showAddPolicy)}>Add New Policy (Other than eOxegen)</ModalHeader>
                    <ModalBody>
                        <Row>
                            <Col md='8' sm='12'>
                                <h5 style={{ marginTop: 10 }}>Company Name</h5>
                            </Col>
                            <Col md='4' sm='12'>
                                <Button color='primary'>Select<ChevronDown size={12} /></Button>
                            </Col>
                        </Row><br />
                        <Row>
                            <Col md='8' sm='12'>
                                <h5 style={{ marginTop: 10 }}>Policy</h5>
                            </Col>
                            <Col md='4' sm='12'>
                                <Input type='text' name='policyPrice' id='policyPrice' />
                            </Col>
                        </Row><br />
                        <Row>
                            <Col md='10'>
                                <h5 style={{ padding: 10 }}>Health Cover</h5>
                                <div style={{ paddingLeft: 10 }}>
                                    <small>OPD</small><br />
                                    <small>Cashless</small><br />
                                    <small>Home Service</small><br />
                                    <small>Medicene Claim</small>
                                </div>
                            </Col>
                            <Col md='2'>
                                <CustomInput type='radio' id='healthCoverage' name='healthCoverage' />
                                <div style={{ paddingTop: 20 }}>
                                    <CustomInput
                                        type='checkbox'
                                        className='custom-control-Primary'
                                        id='P'
                                        label=''
                                        defaultChecked
                                        inline
                                    />
                                    <CustomInput
                                        type='checkbox'
                                        className='custom-control-Primary'
                                        id='Pr'
                                        label=''
                                        defaultChecked
                                        inline
                                    />
                                    <CustomInput
                                        type='checkbox'
                                        className='custom-control-Primary'
                                        id='Pri'
                                        label=''
                                        defaultChecked
                                        inline
                                    />
                                    <CustomInput
                                        type='checkbox'
                                        className='custom-control-Primary'
                                        id='Prim'
                                        label=''
                                        defaultChecked
                                        inline
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md='10'>
                                <h5 style={{ padding: 10, marginTop: 10 }}>Life Cover</h5>
                                <div style={{ padding: 10 }}>
                                    <span>OPD</span><br />
                                    <span>Cashless</span><br />
                                    <span>Home Service</span><br />
                                    <span>Medicene Claim</span>
                                </div>
                            </Col>
                            <Col md='2'>
                                <div style={{ marginTop: 20 }}>
                                    <CustomInput type='radio' id='0' name='' />
                                </div>
                                <div style={{ paddingTop: 10 }}>
                                    <CustomInput inline type='checkbox' id='1' />
                                    <CustomInput inline type='checkbox' id='2' />
                                    <CustomInput inline type='checkbox' id='3' />
                                    <CustomInput inline type='checkbox' id='4' />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md='8' sm='12'>
                                <h5 style={{ marginTop: 10 }}>Approximate Members</h5>
                            </Col>
                            <Col md='4' sm='12'>
                                <Input type='text' name='policyPrice' id='policyPrice' />
                            </Col>
                        </Row><br />
                        <Row>
                            <Col md='6' sm='12' >
                                <h5 style={{ marginTop: 20 }}>Additional Family Members</h5>
                            </Col>
                            <Col md='6' sm='12' className='mt-1'>
                                <Button color='primary' style={{ fontSize: 10, width: 90 }}><span>Adults</span><ChevronDown size={12} /></Button>
                                <Button color='primary' style={{ fontSize: 10, width: 100, marginLeft: 5 }}>Children<ChevronDown size={12} /></Button>
                            </Col>
                        </Row>
                    </ModalBody>
                    <ModalFooter>
                        <Button color='flat-primary' onClick={() => setShowAddPolicy(!showAddPolicy)}>
                            Cancel
                        </Button>{' '}
                        <Button color='flat-primary' onClick={() => setShowAddPolicy(!showAddPolicy)}>
                            Download
                        </Button>{' '}
                    </ModalFooter>
                </Modal>
            </div>
        </>
    )
}

export default memo(PoliciesTable)