import {
  render, screen, fireEvent, waitFor,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Rockets from '../components/Rockets/rockets';

describe('Rockets Component', () => {
  test('renders rocket names', async () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    await waitFor(() => {
      expect(screen.getByText('Falcon 1')).toBeInTheDocument();
    });
  });

  test('toggle reservation status', async () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    await waitFor(() => {
      const reserveButtons = screen.getAllByText('Reserve');

      fireEvent.click(reserveButtons[0]);
    });

    expect(screen.getByText('Cancel Reservation')).toBeInTheDocument();
  });
});
