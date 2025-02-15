import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuBasic extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu>
                <Menu.Item
                    name='editorials'
                    active={activeItem === 'editorials'}
                    onClick={this.handleItemClick}
                >
                    Picture of the Day
        </Menu.Item>

                <Menu.Item name='reviews' active={activeItem === 'reviews'} onClick={this.handleItemClick}>
                    Asteroids </Menu.Item>
            </Menu>
        )
    }
}