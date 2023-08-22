import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchInput } from './SearchInput';

test('renders SearchInput with correct value and calls onChange when user types', () => {
  const handleChange = jest.fn();
  render(<SearchInput value="test" onChange={handleChange} />);

  const input = screen.getByDisplayValue('test');


  userEvent.type(input, 'a');
  expect(handleChange).toHaveBeenCalledTimes(1);
});