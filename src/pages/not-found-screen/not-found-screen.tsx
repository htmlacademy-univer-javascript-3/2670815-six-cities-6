export default function NotFoundScreen(): JSX.Element {
  return (
    <div className="page page--gray">
      <main className="page__main">
        <div className="container" style={{ padding: '40px 0' }}>
          <h1>404 Not Found</h1>
          <p>Страница не найдена. Возможно, адрес введён неверно.</p>
          <a href="/">Вернуться на главную</a>
        </div>
      </main>
    </div>
  );
}
