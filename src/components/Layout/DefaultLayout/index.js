import Header from './Header';
import Sidebar from './Sidebar';

function defaultLayout({ children }) {
  return (
    <div className="flex gap-2 pt-2 pl-2 bg-[var(--black)]">
      <div className="flex flex-col gap-2">
        <Header />
        <Sidebar />
      </div>
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default defaultLayout;
