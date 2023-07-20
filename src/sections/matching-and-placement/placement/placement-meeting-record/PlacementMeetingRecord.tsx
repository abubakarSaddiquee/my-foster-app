import { Box, Card } from '@mui/material'
import CustomTable from '@root/components/Table/CustomTable';
import TableAction from '@root/components/TableAction';
import TableHeader from '@root/components/TableHeader';
import React from 'react'
import { placementMeetingRecordData } from '.';
import { usePlacementMeetingRecord } from './usePlacementMeetingRecord';
import DeleteModel from '@root/components/modal/DeleteModel';

const PlacementMeetingRecord = () => {
    const { route, actionType, setActionType, handleAdd,IsDeleteModal, setIsDeleteModal } = usePlacementMeetingRecord()

    const columns = [
        {
            accessorFn: (row: any) => row.childName,
            id: "childName",
            cell: (info: any) => info.getValue(),
            header: () => <span>Child Name</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.carerName,
            id: "carerName",
            cell: (info: any) => info.getValue(),
            header: () => <span>Carer Name</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.meetingDate,
            id: "meetingDate",
            cell: (info: any) => info.getValue(),
            header: () => <span>Meeting Date</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.meetingAttendees,
            id: "meetingAttendees",
            cell: (info: any) => info.getValue(),
            header: () => <span>Meeting Attendees (Role)</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.meetingAgenda,
            id: "meetingAgenda",
            cell: (info: any) => info.getValue(),
            header: "Meeting Agenda",
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.agencySocialWorker,
            id: "agencySocialWorker",
            cell: (info: any) => info.getValue(),
            header: "Agency Social Worker (SSW)",
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.localAuthoritySW,
            id: "localAuthoritySW",
            cell: (info: any) => info.getValue(),
            header: "Local Authority SW",
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.voiceMemoRejection,
            id: "voiceMemoRejection",
            cell: (info: any) => info.getValue(),
            header: "Voice Memo on Rejection",
            isSortable: false,
        },
        {
            id: "actions",
            cell: (info: any) => (
                <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
                    <TableAction type={'edit'} onClicked={() => { setActionType("edit"); route.push({ pathname: "/placement/meeting-record/form", query: { action: actionType } }); }} />
                    <TableAction type={'delete'}    onClicked={() => setIsDeleteModal(true)}/>
                </Box>
            ),
            header: "Actions",
            isSortable: false,
        },
    ];

    return (
        <Card sx={{ p: 2 }}>
            <TableHeader
                title="Placement Meeting Record"
                searchKey="search"
                showSelectFilters
                selectFilters={[{ label: 'Foster Carer', key: 'Foster Carer', option: [{ value: 'Foster Carer', label: 'Foster Carer' }] }]}
                showAddBtn
                onAdd={handleAdd}
                onChanged={(data: any) => {
                    console.log("Updated params: ", data);
                }}
            />
              <DeleteModel open={IsDeleteModal} handleClose={() => setIsDeleteModal(false)} />
            <CustomTable
                data={placementMeetingRecordData}
                columns={columns}
                isLoading={false}
                isFetching={false}
                isError={false}
                isSuccess={true}
                currentPage={1}
                onPageChange={(data: any) => {
                    console.log("Current page data: ", data);
                }}
                onSortByChange={(data: any) => {
                    console.log("Sort by: ", data);
                }}
            />
        </Card>
    )
}

export default PlacementMeetingRecord