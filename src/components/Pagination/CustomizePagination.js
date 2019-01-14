import React, { PureComponent } from 'react'
import Pagination from './Pagination'


class CustomizePagination extends PureComponent{
    handleClick = currentPage => e => {
        e.preventDefault()
        this.props.handleClick(currentPage)
      }
    
      renderPaginationLinkElement = props => {
        const currentPage = parseInt(props.href.split('=')[1], 10)
        
        return <a onClick={this.handleClick(currentPage)}>{props.children}</a>
      }
    render(){
        const { total,pageNumber } = this.props
        return (<Pagination total={total} current={pageNumber} linkElement={this.renderPaginationLinkElement}/>)
    }
}

export default CustomizePagination