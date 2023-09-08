import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import MissionList from '../components/Missions/spaceMissions';

describe('Rockets Component', () => {
  test('renders rocket names', async () => {
    render(
      <Provider store={store}>
        <MissionList />
      </Provider>,
    );

    await waitFor(() => {
      expect(screen.getByText('Thaicom')).toBeInTheDocument();
    });
  });

  test('toggle reservation status', async () => {
    render(
      <Provider store={store}>
        <MissionList />
      </Provider>,
    );

    await waitFor(() => {
      const reserveButtons = screen.getAllByText('Join Mission !');

      fireEvent.click(reserveButtons[0]);
    });

    expect(screen.getByText('Active Member')).toBeInTheDocument();
  });
});
