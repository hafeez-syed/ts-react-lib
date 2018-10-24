import * as React from 'react';

export class Recipe extends React.Component<{}, {food: any}> {
    constructor(props: any) {
        super(props);

        this.state = {
            food: props.food
        };

        this.updateRepo = this.updateRepo.bind(this);
    }

    updateRepo(food: any) {
        this.setState(() => {
            return {
                food: food
            }
        });
    }

    componentDidMount() {
        if (this.state.food) {
            this.updateRepo(this.state.food);
        }
    }

    render() {
        let food = this.state.food;
        return (
            <div>
                <a className='recipe-link' href="#">
                    <img src={food.image_url} alt={food.title} />
                    <br />
                    <span className="recipe-name">{food.title}</span>
                </a>
                <br />
                <span className="publisher">{food.publisher}</span>
                <span className="badge badge-important">{food.social_rank}</span>
            </div>
        )
    }
}
