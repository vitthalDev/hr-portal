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
import { ChevronDown, ChevronLeft, ChevronRight } from 'react-feather'
import DataTable from 'react-data-table-component'
import { Card, CardHeader, CardTitle, Input, Label, Row, Col, Button, ButtonGroup, Modal, ModalHeader, ModalBody, ModalFooter, CustomInput, Pagination, PaginationItem, PaginationLink } from 'reactstrap'
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
                    <Row className='mx-0 mt-1 mb-0 ml-1'>
                        <Col sm='2'>
                            <h5>No. of Policies</h5>
                        </Col>
                        <Col sm='1' style={{ marginLeft: -40 }} >
                            <img src={awsomefilter} style={{ cursor: 'pointer', marginRight: 10 }} onClick={() => setShowFilterPolicy(!showFilterPolicy)} />
                            <img src={awsomeplus} style={{ cursor: 'pointer' }} onClick={() => setShowAddPolicy(!showAddPolicy)} />
                        </Col>
                    </Row>
                    <Row className='mx-0 mt-0 mb-0 ml-1 mr-1'>
                        <Col xl='3' lg='12'>
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

                        <Col xl='5' />

                        <Col xl='4' lg='12'>
                            <Pagination className='d-flex justify-content-end  align-items-center'>
                                <PaginationItem>
                                    <PaginationLink href='#' first>
                                        <ChevronLeft size={15} />
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem active >
                                    <PaginationLink href='#'>1</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href='#'>2</PaginationLink>
                                </PaginationItem>
                                <PaginationItem >
                                    <PaginationLink href='#'>3</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href='#'>4</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href='#'>5</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href='#' last>
                                        <ChevronRight size={15} />
                                    </PaginationLink>
                                </PaginationItem>
                            </Pagination>
                        </Col>
                    </Row>

                    <CardBody style={{ marginTop: -20 }}>
                        <TableData />
                    </CardBody>
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
                                <Input type='radio' name='plan' id='showAll' />
                            </Col>
                        </Row>
                        <Row>
                            <Col md='10' sm='12'>
                                <Label for='healthCover'>Health Cover</Label>
                            </Col>
                            <Col md='2' sm='12'>
                                <Input type='radio' name='plan' id='healthCover' />
                            </Col>
                        </Row>
                        <Row>
                            <Col md='10' sm='12'>
                                <Label for='lifeCover'>Life Cover</Label>
                            </Col>
                            <Col md='2' sm='12'>
                                <Input type='radio' name='plan' id='lifeCover' />
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
                            <Col md='6' sm='12'>
                                <h5 style={{ marginTop: 10 }}>Company Name</h5>
                            </Col>
                            <Col md='6' sm='12'>
                                <ButtonGroup>
                                    <Button style={{ width: 170, marginLeft: -15 }} color='primary'>Select</Button>
                                    <Button color='primary'><ChevronDown size={15} /></Button>
                                </ButtonGroup>
                            </Col>
                        </Row><br />
                        <Row>
                            <Col md='6'>
                                <h5 style={{ paddingTop: 10 }}>Policy</h5>
                            </Col>
                            <Col md='6'>
                                <Input style={{ width: 230, marginLeft: -15 }} type='text' id='policy' placeholder='Rs' />
                            </Col>
                        </Row>
                        <Row className='d-flex justify-content-space-between pt-2'>
                            <Col xl='9'>
                                <h5 >Health Cover</h5>
                                <ul style={{ listStyle: 'none', marginLeft: -40, paddingTop: 10 }}>
                                    <li style={{ paddingBottom: 5 }}>OPD</li>
                                    <li style={{ paddingBottom: 5 }}>Cashless</li>
                                    <li style={{ paddingBottom: 5 }}>HomeServices</li>
                                    <li>Medicine claim</li>
                                </ul>
                            </Col>
                            <Col className='justify-content-start'>
                                <CustomInput type='radio' id='healthCoverage' name='healthCoverage' />
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
                                <h5 >Life Cover</h5>
                                <ul style={{ listStyle: 'none', marginLeft: -40, paddingTop: 10 }}>
                                    <li style={{ paddingBottom: 5 }}>Accident</li>
                                    <li style={{ paddingBottom: 5 }}>Cashless</li>
                                    <li style={{ paddingBottom: 5 }}>HomeServices</li>
                                    <li>Medicine claim</li>
                                </ul>
                            </Col>
                            <Col className='justify-content-start'>
                                <CustomInput type='radio' id='lifeCoverage' name='lifeCoverage' />
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
                        <Row className='mt-2'>
                            <Col md='6'>
                                <h5 style={{ paddingTop: 10 }}>Approximate Members</h5>
                            </Col>
                            <Col md='6'>
                                <Input style={{ width: 230, marginLeft: -15 }} type='text' id='policy' placeholder='' />
                            </Col>
                        </Row>
                        <Row className='mt-2'>
                            <Col md='5'>
                                <h5 style={{ paddingTop: 10 }}>Additional Family Members</h5>
                            </Col>
                            <Col md='7'>
                                <div className='d-flex justify-content-end'>
                                    <ButtonGroup style={{ marginRight: 5 }}>
                                        <Button style={{ height: 45, width: 70 }} color='relief-primary' ><small style={{ fontSize: 8 }}>Adults</small></Button>
                                        <Button style={{ width: 5 }} color='relief-primary'><ChevronDown size={10} /></Button>
                                    </ButtonGroup>
                                    <ButtonGroup>
                                        <Button style={{ height: 45, width: 70 }} color='relief-primary' ><small style={{ fontSize: 8 }}>Children</small></Button>
                                        <Button style={{ width: 5 }} color='relief-primary'><ChevronDown size={10} /></Button>
                                    </ButtonGroup>
                                </div>
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