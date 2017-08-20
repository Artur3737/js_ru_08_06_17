import React, { Component } from 'react';
import Article from './Article';
import PropTypes from 'prop-types';
import Accordion from '../decorators/Accordion';

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    render() {
        const { articles, openItemId, toggleOpenItem } = this.props;
        const articleElements = articles.map(article => <li key={article.id}>
            <Article
              article={article}
              isOpen={article.id === openItemId}
              toggleOpen={toggleOpenItem(article.id)}
            />
        </li>);

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default Accordion(ArticleList)