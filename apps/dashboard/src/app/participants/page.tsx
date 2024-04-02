import { Search, MoreHorizontal } from 'lucide-react';

import { Checkbox } from '../../components/atoms/Checkbox';
import { Table } from '../../components/atoms/Table';

export default function Participants() {
  const participants = Array.from({ length: 6 }).map((_, index) => ({
    code: '123456',
    name: 'John Doe',
    email: 'example@email.com',
    registrationDate: '2021-01-01',
    checkInDate: '2021-01-01',
  }));

  return (
    <main className="flex h-full w-full gap-4 flex-col">
      <header className="flex w-full gap-3 items-center">
        <h1 className="text-2xl font-bold">Participants</h1>

        <span className="px-3 py-1.5 min-w-72 border border-white/10 rounded-lg text-sm flex items-center gap-3">
          <Search className="size-4 text-emerald-300" />
          <input
            type="text"
            placeholder="Search participants..."
            className="flex-1 bg-transparent"
          />
        </span>
      </header>

      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.Head>
              <Checkbox />
            </Table.Head>
            <Table.Head>Code</Table.Head>
            <Table.Head>Participant</Table.Head>
            <Table.Head>Registration date</Table.Head>
            <Table.Head>Check-in date</Table.Head>
            <Table.Head />
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {participants.map((participant, index) => (
            <Table.Row key={participant.email + index}>
              <Table.Cell>
                <Checkbox />
              </Table.Cell>

              <Table.Cell>{participant.code}</Table.Cell>

              <Table.Cell>
                <span className="flex flex-col">
                  {participant.name}
                  <small>{participant.email}</small>
                </span>
              </Table.Cell>
              <Table.Cell>{participant.registrationDate}</Table.Cell>
              <Table.Cell>{participant.checkInDate}</Table.Cell>
              <Table.Cell>
                <button className="bg-black/20 border border-white/10 rounded-md p-1.5">
                  <MoreHorizontal className="size-4" />
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </main>
  );
}
