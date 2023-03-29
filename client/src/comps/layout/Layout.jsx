import { Outlet } from 'react-router-dom';
import Header from '../header/Header';

export default function Layout() {
  <main>
    <Header />
    <Outlet />
  </main>
}