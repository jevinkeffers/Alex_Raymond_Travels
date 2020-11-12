import React from 'react';
import '../../App.css';
import { client } from '../../client';
import Posts from '../Posts';

class BlogList extends React.Component {
    state = {
        articles: []
    }

    componentDidMount() {
        console.log('component mounted')
        client.getEntries({ content_type: 'blog' })
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
                            {!!this.state.articles.length > 0 ?
                            <Posts posts={this.state.articles} />
                            :(<p>Loading ...</p>)}
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}


export default BlogList
