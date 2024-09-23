import { Wrapper, AddButton, Calendar } from './calendarViewStyles';

export const CalendarView = () => {
  return (
    <Wrapper>
      {/* temporary calendar component */}
      <Calendar>calendar</Calendar>

      <AddButton variant="contained">+ Dodaj wydarzenie dla siebie</AddButton>
      <AddButton variant="contained">+ Dodaj wydarzenie dla grupy</AddButton>
    </Wrapper>
  );
};
