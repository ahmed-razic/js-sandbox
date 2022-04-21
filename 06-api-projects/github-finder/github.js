class GitHub {
  constructor() {
    this.client_id = '102944c4ca3ff7496c5a';
    this.client_secret = '04127eae019b4f6b1b970b75884853130c710a0f';
    this.repos_count = 7;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const responseProfile = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const responseRepos = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await responseProfile.json();
    const repos = await responseRepos.json();

    return { profile: profile, repos: repos };
  }
}
