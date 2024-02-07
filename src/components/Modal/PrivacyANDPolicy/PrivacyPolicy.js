import React from 'react'
import {ModalContainer} from '../ModalContainer'
import PrivacyPolicyContent from './PrivacyPolicyContent'
import { GrClose } from 'react-icons/gr'

export default function PrivacyPolicy({isOpen, onRequestClose}) {
    return (
        <ModalContainer
            isOpen={isOpen}
            ariaHideApp={false}
            onRequestClose={onRequestClose}
            modalWidth="50vw">
            <div className='h-[80vh] overflow-y-hidden'>
                <div className='pt-[20px] pb-[10px] px-[20px] flex justify-between'>
                    <div>
                        <p className='text-2xl font-bold'>THE NEXTPERIENCE GROUP (TNG)</p>
                        <p className='text-gray-500'>PRIVACY NOTICE</p>
                    </div>
                    <div className='cursor-pointer px-3 py-1' onClick={onRequestClose}>
                        <GrClose/>
                    </div>
                </div>
                <hr/>
                <div className='max-h-full overflow-auto'>
                    <PrivacyPolicyContent/>
                </div>
            </div>
        </ModalContainer>
    )
}
