import { FC } from "react";

export interface HeaderProps {
  id?: string;
}

export const Header: FC<HeaderProps> = (props) => {
  const { id } = props;

  return (
    <header {...{id}}>
      <div>flex</div>
    </header>
  );
};

Header.defaultProps = {
  id: "app-root-header"
};
