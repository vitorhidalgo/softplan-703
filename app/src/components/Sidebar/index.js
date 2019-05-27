import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TagsActions from '../../store/actions/tags';

import './sidebar.css';

class Sidebar extends Component {
    PropTypes = {
        addTag: PropTypes.func.isRequired,
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string,
                name: PropTypes.string,
                background: PropTypes.string
            })
        ).isRequired,
        cards: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string
            })
        ).isRequired,
        countCards: PropTypes.number,
        filterTag: PropTypes.func.isRequired
    };

    state = {
        tagInput: '',
        showInput: false
    };

    handleAddTag = (e) => {
        e.preventDefault();

        this.props.addTag(this.state.tagInput);
        this.setState({
            tagInput: '',
            showInput: false
        })
    };

    showInputTag = (e) => {
        e.preventDefault();

        this.setState({ showInput: true });
    };

    handleFilterTag = (id) => {
        this.props.filterTag(id);
    }

    render() {
        return (
            <aside id="sidebar">
                <h2>Processos</h2>
                <nav className="menu">
                    <ul>
                        <li>
                            <a href="#" className="active">
                                <i><IconTag /></i>
                                Todos Processos
                                <span className="badget">{this.props.countCards}</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <h2>Etiquetas</h2>
                <nav className="tags">
                    <ul>
                        { this.props.tags.map(tag => (
                            <li key={tag.id}>
                                <a href="#" onClick={() => this.handleFilterTag(tag.id)}>
                                    <span className="color" style={{backgroundColor: tag.background}}></span> 
                                    {tag.name}
                                    <span className="count">0</span>
                                </a>
                            </li>
                        )) }
                    </ul>
                    <div className="add-tag">
                        <a href="#" className={this.state.showInput ? 'btn-new-tag hide' : 'btn-new-tag'} onClick={this.showInputTag}>
                            <span>+</span>
                            Criar Etiqueta
                        </a>
                        <form onSubmit={this.handleAddTag} className={this.state.showInput ? 'show' : ''}>
                            <input 
                                type="text"
                                value={this.state.tagInput} 
                                onChange={e => this.setState({ tagInput: e.target.value })}
                                required />
                            <button type="submit">
                                <IconSuccess />
                            </button>
                        </form>
                    </div>
                </nav>
                <a href="#" className="btn-done">Feitos</a>
            </aside>
        );
    }
};

function IconTag(props) {
    const fill = props.fill;
    
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path fill={fill} d="M24.3 0v27.949l-4.051-2.025V32l-10.122-5.063L0 32V4.051h4.051V0zm-6.072 28.759V6.076H2.025v22.683l8.1-4.051zm4.051-4.051V2.025H6.076v2.026h14.177V23.7z"/></svg>
    )
}

function IconSuccess(props) {
    const fill = props.fill;
    
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 23.6"><path fill={fill} d="M0 13.7l1.4-1.4 8.5 8.5L30.6 0 32 1.5 9.9 23.6z"/></svg>
    )
}

const mapStateToProps = state => ({
    tags: state.tags,
    cards: state.cards,
    countCards: state.cards.length
});

const mapDispatchToProps = dispatch => bindActionCreators(TagsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);