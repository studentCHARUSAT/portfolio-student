function RepoList({ repos }) {
  return (
    <div className="repo-grid">
      {repos.map((repo) => (
        <article className="repo-card" key={repo.id}>
          <div className="repo-card-top">
            <h3>{repo.name}</h3>

            <span className="repo-star">
              ★ {repo.stargazers_count}
            </span>
          </div>

          <p className="repo-description">
            {repo.description ||
              "A project developed as part of my web development work."}
          </p>

          {repo.language && (
            <span className="tech-badge">
              {repo.language}
            </span>
          )}

          <div className="repo-footer">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="repo-button"
            >
              View Repository
              <span>↗</span>
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

export default RepoList;