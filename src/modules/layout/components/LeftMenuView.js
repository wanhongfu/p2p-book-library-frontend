import React, { Component, PropTypes } from 'react';

import { LeftNav, List, ListItem, Divider, Subheader } from 'material-ui';
import {ActionAccountBox, MapsLocalLibrary, ActionOpenInBrowser, ActionOpenInNew, FileCloudDone } from 'material-ui/lib/svg-icons';
import { Colors, Spacing, Typography } from 'material-ui/lib/styles';

import './layout.css';

import { browserHistory } from 'react-router';

class LeftMenuView extends Component {

    static propTypes = {
        style   : PropTypes.object,
        open    : PropTypes.bool.isRequired,
        onLeftMenuVisibleAction: PropTypes.func
    }

    static contextTypes = {
        router: PropTypes.object.isRequired
    }

    getStyles() {
        return {
            logo: {
                cursor      : 'pointer',
                fontSize    : 24,
                color       : Typography.textFullWhite,
                lineHeight  : `${Spacing.desktopKeylineIncrement}px`,

                backgroundColor : Colors.cyan500,
                paddingLeft     : Spacing.desktopGutter,
                marginBottom    : 8
            },
        };
    }

    dispatchNewRoute(route) {
        this.context.router.push(route);
    }

    render() {

        const styles = this.getStyles();

        return(
            <LeftNav style={this.props.style}
                     docked={true}
                     open={this.props.open}
                      >
                <div className="app-title" onClick={this.props.onLeftMenuVisibleAction}>
                    P2PLib
                </div>

                <List>
                    <Subheader>图书馆</Subheader>

                    <ListItem
                        leftIcon    = { <MapsLocalLibrary /> }
                        value       = "books"
                        primaryText = "所有图书"
                        onClick     = {() => this.dispatchNewRoute('/books')}
                    />

                    <ListItem
                        leftIcon    = {<FileCloudDone />}
                        value       = "books"
                        primaryText = "我借到的图书"
                        onClick     = {() => this.dispatchNewRoute('/my-borrows')}
                    />
                </List>

                <Divider />

                <List>
                    <Subheader>系统设置</Subheader>

                    <ListItem
                        leftIcon    = {<ActionAccountBox />}
                        value       = "users"
                        primaryText = "我的信息"
                        onClick     = {() => this.dispatchNewRoute('/profile')}
                    />

                    <ListItem
                        leftIcon    = {<ActionOpenInBrowser />}
                        value       = "users"
                        primaryText = "借阅请求"
                        onClick     = {() => this.dispatchNewRoute('/borrow-req')}
                    />

                    <ListItem
                        leftIcon    = {<ActionOpenInNew />}
                        value       = "users"
                        primaryText = "还书请求"
                        onClick     = {() => this.dispatchNewRoute('/return-req')}
                    />
                </List>

            </LeftNav>
        );

    }

}

export default LeftMenuView;