import React, { useState, useEffect } from 'react';
import Modal from 'react-responsive-modal';

const Pos: React.FC = () => {
    let pIni = [
        {product: 'iPhone 6', area: ['badge yellow', 'Pruebas'], status: 'yellow', price: 22},
        {product: 'iPhone 7', area: ['badge green', 'Producción'], status: 'green', price: 22},
        {product: 'iPhone 8', area: ['badge red', 'Revisión'], status: 'grey', price: 22},
        {product: 'iPhone 9', area: ['badge blue', 'Lanzamiento'], status: 'blue', price: 22},
    ];

    const [modAdd, setModAdd] = useState(false);
    const [modConf, setModConf] = useState(false);

    const [name, setName] = useState("");
    // const [area, setArea] = useState("");
    // const [status, setStatus] = useState("");
    const [price, setPrice] = useState(0);
    const [products, setProducts] = useState(pIni)
    const [borrar, setBorrar] = useState();


    useEffect(()=> {
        console.log(products.length);
        // code
    },[products.length])

    const AddProduct = () => {
        let newProducts = products;
        newProducts.push({
            product: name,
            area: ['badge yellow', 'Pruebas'],
            status: 'yellow',
            price: price
        });

        setProducts(newProducts);
        console.log(products);
        setName("");
        setPrice(0);
        setModAdd(false);
        console.log("Added");
    }

    const onCloseAdd = () => {
        setName("");
        setPrice(0);
        setModAdd(false);
    } 
    const onCloseConf = () => {
        setBorrar('');
        setModConf(false);
    }

    const openDelete = (item: any) => {
        setModConf(true);
        setBorrar(item);
    }

    const DeleteProduct = (item: any) => {
        console.log('Deleted', borrar);
        let newProducts = products;
        newProducts.splice( newProducts.indexOf(borrar), 1 );
        setProducts(newProducts);
        setModConf(false);
    }
  return (
    <div className="content">
        <div className="panel">
            <div className="content-header no-mg-top">
                <i className="fa fa-newspaper-o"></i>
                <div className="content-header-title">Punto de Ventas</div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="content-box">
                        <div className="content-box-header">
                            <div className="row">
                                <div className="col-md-6 sm-max sm-text-center">
                                    <button className="btn btn-primary sm-max pos-btn" onClick={e => setModAdd(true)}><i className="fa fa-plus-circle"></i> Agregar Punto de Venta</button>
                                    <button className="btn btn-primary sm-max sm-mgtop-5 pos-btn"><i className="fa fa-file-excel-o"></i> Importar de Excel</button>
                                </div>
                                <div className="col-md-6 sm-max sm-text-center form-inline justify-content-end">
                                    <select className="form-control mb-1 mr-sm-1 mb-sm-0 sm-max sm-mgtop-5">
                                        <option>Staff Name</option>
                                        <option>Position</option>
                                        <option>Status</option>
                                        <option>Working Hour</option>
                                    </select>
                                    <input className="form-control sm-max sm-mgtop-5" placeholder="Search" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th className="text-center"><input type="checkbox" /></th>
                                        <th>Producto</th>
                                        <th className="text-center">Area</th>
                                        <th className="text-center">Estado</th>
                                        <th className="text-right">Precio</th>
                                        <th className="text-center">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {products.map((item, index) => {
                                    return(
                                        <tr key={index}>
                                            <th className="text-center"><input type="checkbox" /></th>
                                            <td className="nowrap">{item.product}</td>
                                            <td className="text-center">
                                                <span className={`badge ${item.area[0]}`}>{item.area[1]}</span>
                                            </td>
                                            <td className="text-center">
                                                <div className={`status-pill ${item.status}`}></div>
                                            </td>
                                            <td className="text-right">${item.price}</td>
                                            <td className="text-center"><i className="fa fa-pencil"></i>
                                            <i className="fa fa-trash" onClick={e => openDelete(item)}></i></td>
                                        </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </table>
                        </div>
                        <div className="content-box-footer">
                            <div className="row">
                                <div className="col-md-3 form-inline sm-max sm-text-center">
                                    <select className="form-control sm-max">
                                        <option>5</option>
                                        <option>10</option>
                                        <option>20</option>
                                        <option>25</option>
                                        <option>50</option>
                                        <option>100</option>
                                    </select>
                                </div>
                                <div className="col-md-3 form-inline sm-max sm-mgtop-5 sm-text-center">Mostrar 10 de 100</div>
                                <div className="col-md-6 sm-max">
                                    <ul className="pagination pull-right sm-mgtop-5">
                                        <li><a href="">Inicio</a></li>
                                        <li><a href="">Anterior</a></li>
                                        <li><a href="">1</a></li>
                                        <li className="active"><a href="">2</a></li>
                                        <li><a href="">3</a></li>
                                        <li><a href="">Siguiente</a></li>
                                        <li><a href="">Último</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Modal open={modAdd} onClose={onCloseAdd} center>
                        <div className="col-md-12">
                            <div className="content-box">
                                <div className="content-box-header">
                                    <div className="box-title">Agregar Producto</div>
                                    <div className="box-description">Nuevo producto</div>
                                </div>
                                <div className="form-inline">
                                    <input className="form-control mb-1 mr-sm-1 mb-sm-0" placeholder="Nombre" type="text"  onChange={e => setName(e.target.value)}/>
                                    <div className="input-group mb-1 mr-sm-1 mb-sm-0">
                                        <div className="input-group-addon">$</div>
                                        <input className="form-control" placeholder="Precio" type="text" onChange={e => setPrice(parseFloat(e.target.value))}/>
                                    </div>
                                    <button className="btn btn-primary" onClick={AddProduct}> Agregar</button>
                                </div>
                            </div>
                        </div>
                    </Modal>
                    <Modal open={modConf} onClose={onCloseConf} center>
                        <div className="col-md-12">
                            <div className="content-box">
                                <div className="content-box-header">
                                    <div className="box-title">Borrar Producto</div>
                                    <div className="box-description"><pre>{`${JSON.stringify(borrar, undefined, 2)}`}</pre></div>
                                </div>
                                <div className="form-inline">
                                    <button className="btn btn-primary" onClick={DeleteProduct}> Borrar</button>
                                </div>
                            </div>
                        </div>
                    </Modal>
                </div>
            {/*
                <div className="col-md-12">
                    <div className="content-box">
                        Punto de Ventas
                    </div>
                </div>
            */}
            </div>
        </div>
    </div>
  );
};

export default Pos;

