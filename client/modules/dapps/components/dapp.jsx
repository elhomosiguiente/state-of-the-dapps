import React from 'react';
import PropTypes from 'prop-types';
import {dappHelper} from '/client/helpers/dappHelpers';
class Dapp extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let {dapp, isFeatured, customClass, isRelated, trackLink} = this.props;
    return (
      <div className={(customClass) ? customClass : 'col ms12 m4 l3 xl2 xxl1'}>
        <a href={`/dapp/${dapp.slug}`}>
          <div
            className={`card hoverable dapp-card ${dappHelper.getStatusColor(dapp.status)} ${(isFeatured) ? 'featured' : ''} ${(isRelated) ? 'related' : ''}`}>
            <div className='card-content'>
              <div className='main-section center-align'>
                <div className='card-title truncate'>
                  {dapp.name}
                </div>
                <div className='card-subtitle trunchate'>
                  {dapp.contact}
                </div>
                <div className='card-description'>
                  <p>{dapp.description}</p>
                </div>
              </div>
              <div className='section status-section'>
                <p className='icon-row center-align'>
                  { dapp.url &&
                  <a target='_blank' href={dapp.url} onClick={trackLink.bind(this)} data-type='site'>
                    <i className='icon-link fa fa-fw fa-globe'></i>
                  </a>
                  }
                  { dapp.github &&
                  <a target='_blank' href={dapp.github} onClick={trackLink.bind(this)} data-type='github'>
                    <i className='icon-link fa fa-fw fa-github'></i>
                  </a>
                  }
                  { dapp.blog &&
                  <a target='_blank' href={dapp.blog} onClick={trackLink.bind(this)} data-type='blog'>
                    <i className='icon-link fa fa-fw fa-book'></i>
                  </a>
                  }
                  { dapp.wiki &&
                  <a target='_blank' href={dapp.wiki} onClick={trackLink.bind(this)} data-type='wiki'>
                    <i className='icon-link fa fa-fw fa-wikipedia-w'></i>
                  </a>
                  }
                  {dapp.reddit &&
                  <a target='_blank' href={dapp.reddit} onClick={trackLink.bind(this)} data-type='reddit'>
                    <i className='icon-link fa fa-fw fa-reddit'></i>
                  </a>
                  }
                  {dapp.slack &&
                  <a target='_blank' href={dapp.slack} onClick={trackLink.bind(this)} data-type='slack'>
                    <i className='icon-link fa fa-fw fa-slack'></i>
                  </a>
                  }
                  {dapp.gitter &&
                  <a target='_blank' href={dapp.gitter} onClick={trackLink.bind(this)} data-type='gitter'>
                    <i className='icon-link fa fa-fw fa-comments'></i>
                  </a>
                  }
                  {dapp.the_etherian &&
                  <a target='_blank' href={dapp.the_etherian} onClick={trackLink.bind(this)} data-type='the_etherian'>
                    <i className='icon-link fa fa-fw fa-newspaper-o'></i>
                  </a>
                  }
                  {dapp.twitter &&
                  <a target='_blank' href={dapp.twitter} onClick={trackLink.bind(this)} data-type='twitter'>
                    <i className='icon-link fa fa-fw fa-twitter'></i>
                  </a>
                  }
                  {dapp.facebook &&
                  <a target='_blank' href={dapp.facebook} onClick={trackLink.bind(this)} data-type='facebook'>
                    <i className='icon-link fa fa-fw fa-facebook'></i>
                  </a>
                  }
                  { dapp.contract_address_mainnet &&
                  <a target='_blank' onClick={trackLink.bind(this)}
                     href={'https://etherscan.io/address/' + dapp.contract_address_mainnet}
                     data-type='contract_address_mainnet'>
                    <i className='icon-link fa fa-fw fa-cogs'></i>
                  </a>
                  }
                  { dapp.contract_address_ropsten &&
                  <a target='_blank' onClick={trackLink.bind(this)}
                     href={'https://ropsten.io/address/' + dapp.contract_address_ropsten}
                     data-type='contract_address_ropsten'>
                    <i className='icon-link fa fa-fw fa-bug'></i>
                  </a>

                  }
                </p>
                <p className='pull-right'>
                  {dapp.last_update}
                </p>
                <p className='status truncate'>
                  {dapp.status.substring(3)}
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  }
}
Dapp.propTypes = {
  dapp: PropTypes.object.isRequired
};
Dapp.defaultProps = {
  dapp: {
    name: 'sample dapp',
    description: 'description',
    url: 'url',
    github: 'github',
    status: '6. Demo',
    last_update: '2012',
    reddit: 'reddit',
    contact: '',
    blog: '',
    wiki: '',
    slack: '',
    gitter: '',
    the_etherian: '',
    twitter: '',
    facebook: '',
    contract_address_mainnet: '',
    contract_address_ropsten: ''
  }
};
export default Dapp;
