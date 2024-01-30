import { COMPANIES_LIST_QUERY } from '@/graphql/queries';
import { CreateButton, FilterDropdown, List } from '@refinedev/antd'
import { getDefaultFilter, useGo } from '@refinedev/core';
import { useTable } from '@refinedev/antd';
import { Input, Space, Table } from 'antd';
import React from 'react'
import { SearchOutlined } from '@ant-design/icons';
import CustomAvatar from '@/components/custom-avatar';
import { Text } from '@/components/text';

export const CompanyList = () => {
  const go = useGo();
  const { tableProps, filters } = useTable({
    resource: 'companies',
    pagination: {
      pageSize: 12,
    },
    meta: {
      gqlQuery: COMPANIES_LIST_QUERY
    }
  })

  return (
    <List
      breadcrumb={ false }
      headerButtons={() => (
        <CreateButton
          onClick={() => {
            go({
              to: {
                resource: 'companies',
                action: 'create'
              },
              options: {
                keepQuery: true
              },
              type: 'replace'
            })
          }}
        />
      )}
    >
      <Table
        {...tableProps}
        pagination={{
          ...tableProps.pagination,
        }}
      >
        <Table.Column
          dataIndex="name"
          title="Company name"
          defaultFilteredValue={getDefaultFilter('id', filters)}
          filterIcon={<SearchOutlined />}
          filterDropdown={(props) => (
            <FilterDropdown {...props} >
              <Input placeholder='Search Company'/>
            </FilterDropdown>
          )}
          render={(value, record) => (
            <Space>
              <CustomAvatar
                shape='square'
                name={record.name}
                src={record.avatarUrl}
              />
              <Text style={{whiteSpace: 'nowrap'}}>
                {record.name}
              </Text>
            </Space>
          )}
        />
      </Table>
    </List>
  )
}

