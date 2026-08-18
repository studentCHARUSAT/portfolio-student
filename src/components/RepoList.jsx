function RepoList({ repos }) {
  return (
    <div>
      {repos.map((repo) => (
        <div className="repo-card" key={repo.id}>
          <h3>{repo.name}</h3>

          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Repository
          </a>

          <p>Stars: {repo.stargazers_count}</p>
        </div>
      ))}
    </div>
  );
}

export default RepoList;