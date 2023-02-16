import { fireEvent, render, screen } from '@testing-library/react';
import Form from '../pages/AddDataPage/AddDataPage';

describe('Form', () => {
  describe('no input value', () => {
    it('submit button should be disabled', () => {
      render(<Form />);
      const submitButton = screen.getByText(/Submit/i);
      expect(submitButton).toBeDisabled();
    });
  });

  describe('positive input value', () => {
    it('submit button should be enabled', () => {
      render(<Form />);
      const usageInput = screen.getByRole('spinbutton');

      fireEvent.change(usageInput, { target: { value: '100' } });

      const submitButton = screen.getByText(/Submit/i);
      expect(submitButton).not.toBeDisabled();
    });
  });

  describe('negative input value', () => {
    it('submit button should be disabled', () => {
      render(<Form />);
      const usageInput = screen.getByRole('spinbutton');

      fireEvent.change(usageInput, { target: { value: '-100' } });

      const submitButton = screen.getByText(/Submit/i);
      expect(submitButton).toBeDisabled();
    });
  });
});
