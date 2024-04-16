import { FABLocation } from "./FABs/Location";
import { FABSearch } from "./FABs/Search";

export const FloatingActionButtons = () => {
  // Render
  return (
    <>
      {/* Floating Action Button for Search Page Navigation */}
      <FABSearch />
      {/* Floating Action Button for Location Button */}
      <FABLocation />
    </>
  );
};
