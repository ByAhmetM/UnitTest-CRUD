import { render } from "@testing-library/react";
import Form from ".";

it("formu gönderince addUser fonksiyonu doğru parametrelerle çalışıyor mu ?", () => {
  const mock = vi.fn();
  render(<Form addUser={mock} />);
});
