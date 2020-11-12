import React from 'react';
import '../../App.css';
import { client } from '../../client';
import Posts from './components/Posts';

class BlogList extends React.Component {
    state = {
        articles: []
    }

    componentDidMount() {
        client.getEntries({ content_type: 'recipes' })
            .then((response) => {
                console.log(response)
                this.setState({
                    articles: response.items
                })
            })
            .catch(console.error)
    }

    render() {
        return (
            <div className="BlogList">
                <div className='container'>
                    <header>
                        <div className='wrapper'>
                            <span className='pageTitle'>From The Newsletter</span>
                        </div>
                    </header>
                    <main>
                        <div className='wrapper'>
                            <Posts posts={this.state.articles} />
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}


export default BlogList
