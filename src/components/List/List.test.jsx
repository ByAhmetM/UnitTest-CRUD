import { render, screen, within } from "@testing-library/react";
import List from ".";
import { testUsers } from "./../../constant/testData";

it("gönderilen her kullanıcı için ekrana satır basılır.", () => {
  render(<List users={testUsers} />);

  const body = screen.getByTestId("body");

  const rows = within(body).getAllByRole("row");
});
