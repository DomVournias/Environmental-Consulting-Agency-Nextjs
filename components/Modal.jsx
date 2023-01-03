import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import {GrClose} from 'react-icons/gr'

const Overlay = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.8);
    z-index: 9999999;
`

const Wrapper = styled.div`
    position: relative;
`

const CloseButton = styled.button`
    position: absolute;
    right: 10px;
    top: 10px;
    opacity: 0.9;
    cursor: pointer;

    svg {
        font-size: 1.2rem;
    }

    :hover {
        opacity: 0.8;
    }
`


export default function Modal ({show, onClose, children}) {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
      setIsBrowser(true)
    }, [])
    

    const handleClose = (e) => {
        e.preventDefault();
        onClose();
    }

    const modalContent = show ? (
        <Overlay>
            <Wrapper>
                <CloseButton onClick={handleClose}>
                     <GrClose/>
                 </CloseButton>
            {children}  
            </Wrapper>
            
        </Overlay>
    ) : null;

    if(isBrowser) {
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById('modal-root')
        )

    } else { 
        return null;
    }

}



