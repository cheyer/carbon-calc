import { fireEvent, render, screen } from '@testing-library/react';
import Form from '../components/Form';
import { COUNTRIES } from '../utils/constants';

const onSubmitMock = jest.fn();

describe('Form', () => {
  beforeEach(() => {
    onSubmitMock.mockReset();
  });

  describe('no input value', () => {
    it('submit button should be disabled', () => {
      render(<Form countries={COUNTRIES} isDisabled={false} onSubmit={onSubmitMock} />);
      const submitButton = screen.getByText(/Submit/i);
      expect(submitButton).toBeDisabled();
    });
  });

  describe('positive input value', () => {
    it('submit button should be enabled', () => {
      render(<Form countries={COUNTRIES} isDisabled={false} onSubmit={onSubmitMock} />);
      const usageInput = screen.getByRole('spinbutton');

      fireEvent.change(usageInput, { target: { value: '100' } });

      const submitButton = screen.getByText(/Submit/i);
      expect(submitButton).not.toBeDisabled();
    });

    it('should call on submit function when submit button is clicked', () => {
      render(<Form countries={COUNTRIES} isDisabled={false} onSubmit={onSubmitMock} />);
      const usageInput = screen.getByRole('spinbutton');

      fireEvent.change(usageInput, { target: { value: '100' } });

      const submitButton = screen.getByText(/Submit/i);
      fireEvent.click(submitButton);

      expect(onSubmitMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('negative input value', () => {
    it('submit button should be disabled', () => {
      render(<Form countries={COUNTRIES} isDisabled={false} onSubmit={onSubmitMock} />);
      const usageInput = screen.getByRole('spinbutton');

      fireEvent.change(usageInput, { target: { value: '-100' } });

      const submitButton = screen.getByText(/Submit/i);
      expect(submitButton).toBeDisabled();
    });
  });
});
