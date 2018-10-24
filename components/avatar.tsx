import * as React from 'react';

export class Avatar extends React.Component<{}, {githubRepo: any}> {
    constructor(props: any) {
        super(props);

        this.state = {
            githubRepo: props.githubRepo
        };

        this.updateRepo = this.updateRepo.bind(this);
    }

    updateRepo(repo: any) {
        this.setState(() => {
            return {
                githubRepo: repo
            }
        });
    }

    componentDidMount() {
        if (this.state.githubRepo) {
            this.updateRepo(this.state.githubRepo);
        }
    }

    render() {
        let githubRepo = this.state.githubRepo;
        return (
            <div>
                <div className='popular-rank'>#</div>
                <ul className="space-list-items">
                    <li>
                        <img className="avatar" src={githubRepo.owner.avatar_url} alt={`Avatar from ${githubRepo.owner.login}`} />
                    </li>
                    <li><a href={githubRepo.html_url}>{githubRepo.name}</a></li>
                    <li>@{githubRepo.owner.login}</li>
                    <li>{githubRepo.stargazers_count} stars</li>
                </ul>
            </div>
        )
    }
}
