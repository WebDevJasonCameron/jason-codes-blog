import Header from '../header/Header';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  <main>
    <Header />
    <Outlet />
  </main>
}