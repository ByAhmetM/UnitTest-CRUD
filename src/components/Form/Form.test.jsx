import { render, screen } from "@testing-library/react";
import Form from ".";
import user from "@testing-library/user-event";
import { expect } from "vitest";

it("formu gönderince addUser fonksiyonu doğru parametrelerle çalışıyor mu ?", async () => {
  const mock = vi.fn();
  user.setup();

  render(<Form addUser={mock} />);

  const nameInp = screen.getByLabelText("İsim");
  const mailInp = screen.getByLabelText("Email");
  const ageInp = screen.getByPlaceholderText("ör: 18");
  const sendBtn = screen.getByRole("button");

  /* 1.yol */
  await user.click(nameInp);
  await user.keyboard("fırat");
  /* 2.yol */
  await user.type(mailInp, "firat@gmail.com");
  await user.type(ageInp, "30");

  await user.click(sendBtn);

  expect(mock).toHaveBeenCalledWith({
    name: "fırat",
    email: "firat@gmail.com",
    age: "30",
  });
});
