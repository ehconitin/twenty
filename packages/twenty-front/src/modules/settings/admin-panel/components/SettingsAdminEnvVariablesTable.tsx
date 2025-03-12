import { SettingsAdminEnvVariablesRow } from '@/settings/admin-panel/components/SettingsAdminEnvVariablesRow';
import { Table } from '@/ui/layout/table/components/Table';
import { TableBody } from '@/ui/layout/table/components/TableBody';
import { TableHeader } from '@/ui/layout/table/components/TableHeader';
import { TableRow } from '@/ui/layout/table/components/TableRow';
import styled from '@emotion/styled';

const StyledTableBody = styled(TableBody)`
  border-bottom: 1px solid ${({ theme }) => theme.border.color.light};
`;

type SettingsAdminEnvVariablesTableProps = {
  variables: Array<{
    name: string;
    description: string;
    value: string;
    sensitive: boolean;
  }>;
};

export const SettingsAdminEnvVariablesTable = ({
  variables,
}: SettingsAdminEnvVariablesTableProps) => (
  <Table>
    <TableRow gridAutoColumns="5fr 4fr 3fr 1fr">
      <TableHeader>Name</TableHeader>
      <TableHeader>Description</TableHeader>
      <TableHeader align="right">Value</TableHeader>
      <TableHeader align="right"></TableHeader>
    </TableRow>
    <StyledTableBody>
      {variables.map((variable) => (
        <SettingsAdminEnvVariablesRow key={variable.name} variable={variable} />
      ))}
    </StyledTableBody>
  </Table>
);
