function ProjectsList({ children }) {
  return (
    <ul className="grid gap-y-10 sm:grid-cols-12 sm:gap-x-2.5 sm:gap-y-[3.75rem] lg:gap-x-[1.875rem] lg:gap-y-[4.375rem]">
      {children}
    </ul>
  );
}

export default ProjectsList;
