import React from 'react'
import classnames from 'classnames'
import './PageControl.less'
import { number, string, func, node, oneOfType } from 'prop-types'
import leftImg from './img/scrollLeft.png';
import rightImg from './img/scrollRight.png';

function pageData (
    total,
    current,
    startText,
    endText,
    roundText,
    ){
        function pageLink(page) {
            const pageLinkVar = '?page'

            return `${pageLinkVar}=${page}`
        }
        const startNum = 1;
        const endNum = total;
        
        const data = []

        if (current > startNum) {
            data.push({
                text: startText,
                href: pageLink(current - 1)
            })
        }
        
        data.push({text: '' + startNum,href: pageLink(startNum)})
    
        if(total<7){
            for (let i = startNum+1; i <= total; i += 1) {
                data.push({ text: '' + i,href: pageLink(i)})
            }
        }else{
            if(current <= 2){
                for (let i = startNum+1; i <= startNum+4; i += 1) {
                    data.push({ text: '' + i,href: pageLink(i)})
                }
                data.push({ text: roundText })
                
            }else if(current > total-5){
                data.push({ text: roundText })
                for (let i = total-4; i < total; i += 1) {
                    data.push({ text: '' + i,href: pageLink(i)})
                }
            }else{
                data.push({ text: roundText })
                for (let i = current; i <= current+2; i += 1) {
                    data.push({ text: '' + i,href: pageLink(i)})
                }
                data.push({ text: roundText })
            }
            data.push({ text: '' + endNum,href: pageLink(endNum)})
        }
        

        
        if (current < endNum) {
            data.push({
                text: endText,
                href: pageLink(current+1)
        })
        
    }
    return data;
}

const Pagination = ({
    total,
    current,
    startText,
    endText,
    roundText,
    linkElement: A,
    ...rest
}) => {
    return (
        <ul className="pageControl clear">
            {pageData(
                total,
                current,
                startText,
                endText,
                roundText
            ).map(({text,href},index) => {
                const liClasses = classnames({
                    'active-page': +text === current,
                    'turn-one': text === startText || text === endText
                })
                if (href && +text !== current) {
                    return (
                        <li key={index} className={liClasses}>
                            <A href={href}>
                                {text}
                            </A>
                        </li>
                    )
                }
                
                return (
                    <li key={index} className={liClasses}>
                        {text}
                    </li>
                )
            })}
        </ul>
    )
}
Pagination.propTypes = {
    total: number,
    current: number,
    startText: node,
    endText: node,
    roundText: node,
    url: oneOfType([string, func]),
    linkElement: oneOfType([func, node]),
}
Pagination.defaultProps = {
    url: '',
    linkElement: 'a',
    roundText: '...',
    startText: <img src={leftImg} className="left-img" alt="" />,
    endText:  <img src={rightImg} className="right-img" alt="" />,
}

export default Pagination