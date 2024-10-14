import { Wrapper, AddButton, Announcements } from './calendarViewStyles';

export const CalendarView = () => {
  return (
    <Wrapper>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,400,0,0&icon_names=keyboard_arrow_up"
      />

      <AddButton variant="contained">+ Dodaj wydarzenie dla siebie</AddButton>
      <AddButton variant="contained">+ Dodaj wydarzenie dla grupy</AddButton>
      <Announcements>
        <span className="material-symbols-outlined">keyboard_arrow_up</span>
        Ogłoszenia
      </Announcements>
    </Wrapper>
  );
};
