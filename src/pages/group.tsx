import { Datagrid, List, TextField, Edit, SimpleForm, TextInput, Create, useRecordContext, EditButton, ShowButton } from 'react-admin';

const GroupTitle = () => {
    const record = useRecordContext();
    return <span>Group {record ? `"${record.descr}"` : ''}</span>
}

const groupFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    // <ReferenceInput source="id" label="Group" reference="users" />,
];

export const GroupList = () => (
    <List filters={groupFilters}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="descr" />
            <ShowButton />
            <EditButton />
        </Datagrid>
    </List>
);

export const GroupEdit = () => (
    <Edit title={<GroupTitle />}>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="descr" />
        </SimpleForm>
    </Edit>
);

export const GroupCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="descr" />
        </SimpleForm>
    </Create>
);
