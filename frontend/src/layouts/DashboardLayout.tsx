
import { Link, Outlet } from 'react-router-dom'

export default function DashboardLayout() {
  return (
    <div>
      <header>
        <h1>ADAG-CYBSEC</h1>
        <nav>
          <Link to="/">Dashboard</Link>{' | '}
          <Link to="/events">Events</Link>{' | '}
          <Link to="/sessions">Sessions</Link>{' | '}
          <Link to="/login">Login</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}
