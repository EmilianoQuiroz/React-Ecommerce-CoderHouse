import React from "react"
import Card from "../images/img1.jpg"

export const Carrito = () => {
    return (
        <div>
            <div className="carritos">
                <div className="carrito">
                <br/><br/><br/><br/><br/>
                    <box-icon name="X">

                    </box-icon>
                    <h2>Su carrito</h2>
                    <div className="carrito_center">
                        <div className="carrito_item">
                            <img src={Card} alt="" />
                            <div>
                                <h3>title</h3>
                                <p className="price">$345</p>
                            </div>
                            <div>
                                <box-icon name="up-arrow" type="solid"></box-icon>
                                <p className="cantiadad"> 1 </p>
                                <box-icon name="down-arrow" type="solid"></box-icon>
                            </div>
                            <div ClassName="remove__item">
                                <box-icon name="trash"></box-icon>
                            </div>
                        </div>
                    </div>
                    <div className="carrito__footer">
                        <h3>Total: $2334</h3>
                        <button className="btn">payment</button>
                    </div>
                </div>
            </div>
        </div>
    )
}