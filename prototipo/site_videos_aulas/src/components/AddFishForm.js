/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
import { render} from 'react-dom';


class AddFishForm extends React.Component {

    createFish(event) {
        // criação de objeto peixe
        console.log(event);

        event.preventDefault();
        const fish = {
            name: this.name.value,
            uname: this.uname.value,
            price: this.price.value,
            status: this.status.value,
            desc: this.desc.value,
            image: this.image.value,

        }
        this.props.addFishes(fish);
        console.log(fish);
        this.fishForm.reset();
    }

    render() {
        return(
                <form ref = {(input) => this.fishForm = input} className="fish-edit" onSubmit={(e) => this.createFish(e)}>
                    <input ref={(input) => this.name = input} type="text" placeholder="Nome do Peixe"/>                            
                    <input ref={(input) => this.price = input} type="text" placeholder="Preço do Peixe"/>
                    <select ref={(input) => this.status = input} type="text">
                        <option value="available">Fresco</option>
                        <option value="unavailable">Esgotado</option>
                    </select> 
                    <textarea ref={(input) => this.desc = input} placeholder="PeixeDesc"></textarea>
                    <input ref={(input) => this.image = input}type="text" placeholder="imagem do Peixe"/>
                    <button type="submit"> Adicionar mais itens</button>
                </form>



                )
    }
}

export default AddFishForm;