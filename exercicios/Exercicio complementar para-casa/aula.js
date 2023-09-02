//1.


class Product {

    constructor(nome,preco, unidadeDeMedida){
        this.nome = nome;
        this.unidadeDeMedida = unidadeDeMedida;
		this.preco = preco;
    }
   showDetails() {
        console.log(`Detalhes do produto: Nome ${this.nome} - Preço: ${this.preco}`);
		console.log(` Quantidade do produto ${this.unidadeDeMedida}`);
    }
}

class Carrinho {
	constructor(Product, quantidade){
	this.Product = Product;
	this.quantidade = quantidade;
}

 addToCart() {
		const total = this.Product.preco * this.quantidade ;
        console.log(`Adiciono ${this.quantidade} ${this.Product.unidadeDeMedida} ao carrinho. O valor total é de ${total}` );
    }
}