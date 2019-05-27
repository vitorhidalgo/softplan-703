import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CardsActions from '../../store/actions/cards';
import * as TagsActions from '../../store/actions/tags';

import './cards.css';

class Cards extends Component {
    PropTypes = {
        cards: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string,
                assunto: PropTypes.string,
                classe: PropTypes.string,
                numero: PropTypes.string,
                partes: PropTypes.arrayOf({
                    ativa: PropTypes.shape({
                        name: PropTypes.string,
                        plus: PropTypes.string
                    }),
                    passiva: PropTypes.shape({
                        name: PropTypes.string
                    })
                }),
                tarja: PropTypes.arrayOf(
                    PropTypes.shape({
                        id: PropTypes.string,
                        name: PropTypes.string,
                        color: PropTypes.string,
                        background: PropTypes.string
                    })
                ),
                tags: PropTypes.arrayOf(
                    PropTypes.shape({
                        id: PropTypes.string,
                        name: PropTypes.string,
                        background: PropTypes.string
                    })
                )
            })
        ).isRequired
    };

    render() {
        return (
            <div className="list-cards" id="cards">
                { this.props.cards.map(card => (
                    <div className="card" key={card.id}>
                        <div className="summary">
                            <ul className="parts">
                                <li className="active">
                                    <IconActive/>
                                    {card.partes.ativa.name}<strong>{card.partes.ativa.plus}</strong>
                                </li>
                                <li className="passive">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 0a16 16 0 1 0 16 16A16.047 16.047 0 0 0 16 0zm8 18H8v-4h16z"/></svg> 
                                    {card.partes.passiva.name}
                                </li>
                            </ul>
                            <h3>{card.assunto} - <strong>{card.classe}</strong></h3>
                            <ul className="stripe-number">
                                <li>{card.numero}</li>
                                { card.tarja.map((item, k) => (
                                    <li key={"tarja-"+k}><span style={{backgroundColor: item.background, color: item.color}}>{item.name}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="open-folder">
                            <a href="#">
                                <IconOpenFolder />
                                Abrir Pasta
                            </a>
                        </div>
                        <div className="tags">
                            <div className="container-list-tags">
                                <a href="#" className="btn-add-tags">
                                    <span>+</span>
                                </a>
                                <div className="select-tags">
                                    <h4>Etiquetar como:</h4>
                                    <ul>
                                    { this.props.tags.map(tag => (
                                        <li key={"tag-card-"+tag.id}><a href="#" style={{backgroundColor:tag.background}}>{tag.name}</a></li>
                                    ))}
                                    </ul>
                                </div>
                            </div>
                            <ul className="list-tags">
                                { card.tag.map(itemtag => (
                                    <li key={"tag-"+card.id+itemtag}><a href="#">{itemtag}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )) }
            </div>
        );
    }
};

function IconActive(props) {
    const fill = props.fill;
    
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill={fill} d="M16 0a16 16 0 1 0 16 16A16.047 16.047 0 0 0 16 0zm8 18h-6v6h-4v-6H8v-4h6V8h4v6h6z"/></svg> 
    )
}

function IconPassive(props) {
    const fill = props.fill;
    
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill={fill} d="M16 0a16 16 0 1 0 16 16A16.047 16.047 0 0 0 16 0zm8 18H8v-4h16z"/></svg>
    )
}

function IconOpenFolder(props) {
    const fill = props.fill;
    
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 25.4"><path fill={fill} d="M0 25.4h28.7l3.1-16.1h-3V2.9H14.3L11.4 0H0zm2.4-2l3.1-8.9h8l3.2-3.2h12.6L27 23.4zM13.5 4.9h13.4v4.4h-11l-3.2 3.2H4.1L2 18.6V2.1h8.6z"/></svg>
    )
}

const mapStateToProps = state => ({
    cards: state.cards,
    tags: state.tags
});

const mapDispatchToProps = dispatch => bindActionCreators([CardsActions, TagsActions], dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cards);