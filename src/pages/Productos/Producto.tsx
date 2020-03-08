import React, { useEffect, useState } from 'react';
import {fetchApi} from '../../fetchApi/fetchApi';
import ModalInfo from './ModalInfo';
import ImageDemo from '../../assets/img/imagedemo.jpg'
import IconHeart1 from '../../assets/img/icons/icon-heart-01.png';
import IconHeart2 from '../../assets/img/icons/icon-heart-02.png';

const Producto = (props:any) => {
    const { producto, url, allProducts } = props;
    const [state, setState] = useState({
        items: [],
        producto: '',
        showModal: '',
        titleCard: '', 
        description: '',
    });
	useEffect(() => {
        fetchApi(`productos${url}`, 'GET')
			.then(response => {
				setState({ ...state, items: response });
            });
        }, []);
    const showInfoModal = (titleCard:string, description:string) => {
        setState({ ...state, titleCard, description, showModal: 'show-modal1' });
    };

    const closeModal = () => {
        setState({ ...state, showModal: '' });
    };

    const { items, showModal, titleCard, description } = state;
    return (
        <div className="container">
            <div className="row isotope-grid">
                {items.map((item,index) => {
                    const { title:titleCard, description, img_url, price } = item;
                    return (
                        <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women" style={{ cursor: 'pointer' }}>
                            <div className="block2">
                                <div className="block2-pic hov-img0">
                                    {/* <img src="images/product-01.jpg" alt="IMG-PRODUCT" /> */}
                                    <img src={ImageDemo} alt="IMG-PRODUCT" />
                                    <div onClick={() => showInfoModal(titleCard, description)} className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                        Ver Detalles
                                    </div>
                                </div>
                                <div className="block2-txt flex-w flex-t p-t-14">
                                    <div className="block2-txt-child1 flex-col-l ">
                                        <div className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                            {titleCard}
                                        </div>
                                        <span className="stext-105 cl3">
                                            {/* {titleCard} */}
                                            {price}
                                        </span>
                                    </div>
                                    <div className="block2-txt-child2 flex-r p-t-3">
                                        <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                            <img className="icon-heart1 dis-block trans-04" src={IconHeart1} alt="ICON" />
                                            <img className="icon-heart2 dis-block trans-04 ab-t-l" src={IconHeart2} alt="ICON" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <ModalInfo
                closeModal={closeModal}
                showModal={showModal}
                titleCard={titleCard}
                description={description}
            />
        </div>
    )
}

export default Producto;