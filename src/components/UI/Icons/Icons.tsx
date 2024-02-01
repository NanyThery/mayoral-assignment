function PlusIcon(): JSX.Element {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z" />
    </svg>
  );
}

function MinusIcon(): JSX.Element {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 9h24v6h-24z" />
    </svg>
  );
}

function SortIcon(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M6 21l6-8h-4v-10h-4v10h-4l6 8zm16-12h-8v-2h8v2zm2-6h-10v2h10v-2zm-4 8h-6v2h6v-2zm-2 4h-4v2h4v-2zm-2 4h-2v2h2v-2z" />
    </svg>
  );
}
function SearchIcon(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" />
    </svg>
  );
}

export { PlusIcon, MinusIcon, SearchIcon, SortIcon };
