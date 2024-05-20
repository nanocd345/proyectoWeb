import { LitElement, html, css } from "lit";
import { getDataAllData } from "../modules/getData";

export class allPage extends LitElement {
    constructor() {
        super()
        this.contador= 0; 
        this.categoriaSeleccionada = ''
        this.botonActivo = '';
        this.products = []
        this.total = 0; 
    }
    async connectedCallback() {
        super.connectedCallback();
        try {
        this.data = await getDataAllData();
        this.data['todos los productos'] = [
            ...this.data['abrigo'],
            ...this.data['camiseta'],
            ...this.data['pantalon']
        ];
          // Aquí puedes realizar otras acciones con los datos si es necesario
        } catch (error) {
        console.error('Error al obtener los datos:', error);
        }
    }
    static properties = {
        data: {typeof: Object},
        categoriaSeleccionada: {typeof: String},
        botonActivo: {typeof: String},
        products: {typeof: Array},
        total: {typeof: Number}
    }
    handleClickCategoria(categoria) {
        const carritoVacio = this.shadowRoot.querySelector(".carrito_vacio")
        const carritoComprado = this.shadowRoot.querySelector("#carrito-comprado")
        const carrito = this.shadowRoot.querySelector(".contenedor-carrito")
        const titulo = this.shadowRoot.querySelector(".titulo")
        const container = this.shadowRoot.querySelector(".container_product")
        const tituloCarrito = this.shadowRoot.querySelector(".titulo-carrito")
        const numerito = this.shadowRoot.querySelector(".numerito")
        const productos = this.shadowRoot.querySelector("#carrito-productos")
        carritoVacio.style.display = "flex"
        productos.style.display =  "flex"
        carritoComprado.style.display = "none"
        numerito.style.background = "var(--color-gold)"
        numerito.style.color = "var(--color-main)"
        tituloCarrito.style.display = "none"
        titulo.style.display = ""
        container.style.display = "grid"
        carrito.style.display = "none"
        if (categoria !== 'todos los productos') {
            this.categoriaSeleccionada = categoria; 
            this.botonActivo = categoria;
        } else {
            this.categoriaSeleccionada = 'todos los productos';
            this.botonActivo = categoria;
        }
        this.requestUpdate()
    }
    guardarProducto(event) {
        const nombreProducto = event.target.closest('.product').querySelector('.product-description').textContent;
        const precioProducto = parseFloat(event.target.closest('.product').querySelector('.product-price').textContent.replace('$', ''))
        const subprecioProducto = parseFloat(event.target.closest('.product').querySelector('.product-price').textContent.replace('$', ''))
        const img = event.target.closest('.product').querySelector('.img').src
        const productoExistente = this.products.find((p) => p.nombre === nombreProducto);
        if (productoExistente) {
            productoExistente.cantidad++;
            productoExistente.precio *= productoExistente.cantidad;
        } else {
            const nuevoProducto = {
                nombre: nombreProducto,
                precio: precioProducto,
                subPrecio: subprecioProducto,
                cantidad: 1,
                img: img
            };
            this.products.push(nuevoProducto);
        }
        console.log(this.products)
        if (!productoExistente) {
            this.contador++;
            this.shadowRoot.querySelector('.numerito').textContent = this.contador;
        }
        this.totalCompras()
        this.requestUpdate()
    } 
    eliminarProducto(event) {
        const nombreProducto = event.target.closest('.carrito-producto').querySelector('.product-title').textContent;
        const index = this.products.findIndex((p) => p.nombre === nombreProducto);
        const carritoVacio = this.shadowRoot.querySelector(".carrito_vacio")
        const acciones = this.shadowRoot.querySelector("#carrito-acciones")

        if (index > -1) {
            this.products.splice(index, 1);
            console.log('Producto eliminado:', nombreProducto);
        } else {
            console.log('Producto no encontrado:', nombreProducto);
        }
        if (this.products.length === 0) {
            carritoVacio.style.display = "flex"
            acciones.style.display = "none"
        }
        this.contador--;
        this.shadowRoot.querySelector('.numerito').textContent = this.contador;
        this.totalCompras()
        this.requestUpdate()
    }
    eliminarProductosDeLaVista() {
        const carrito = this.shadowRoot.querySelector(".contenedor-carrito")
        const container = this.shadowRoot.querySelector(".container_product")
        const titulo = this.shadowRoot.querySelector(".titulo")
        const tituloCarrito = this.shadowRoot.querySelector(".titulo-carrito")
        const numerito = this.shadowRoot.querySelector(".numerito")
        const acciones = this.shadowRoot.querySelector("#carrito-acciones")
        const carritoVacio = this.shadowRoot.querySelector(".carrito_vacio")
        numerito.style.background = "var(--color-main)"
        numerito.style.color = "var(--color-gray)"
        tituloCarrito.style.display = "flex"
        titulo.style.display =  "none"
        container.style.display = "none"
        carrito.style.display = "flex"
        this.botonActivo = 'carrito'
        if (this.products.length === 0) {
            acciones.style.display = "none"
        } else {
            acciones.style.display = "flex"
            carritoVacio.style.display = "none"

        }
        this.requestUpdate()
    }
    vaciarCarrito() {
        const carritoComprado = this.shadowRoot.querySelector("#carrito-comprado")
        const carritoVacio = this.shadowRoot.querySelector(".carrito_vacio")
        const productos = this.shadowRoot.querySelector("#carrito-productos")
        const acciones = this.shadowRoot.querySelector("#carrito-acciones")
        carritoComprado.style.display = "none"
        acciones.style.display = "none"
        this.shadowRoot.querySelector(".numerito").textContent = "0"
        this.products = [] 
        productos.style.display = "none"
        this.contador = 0
        carritoVacio.style.display = "flex"
        this.requestUpdate()
    }
    totalCompras() {
        this.total = this.products.reduce((acc, curr) => acc + curr.precio, 0);
        this.shadowRoot.querySelector("#total-compras").textContent = `$ ${this.total}`;
        this.requestUpdate();
    }
    graciasPorTuCompra() {
        const carritoVacio = this.shadowRoot.querySelector(".carrito_vacio")
        const acciones = this.shadowRoot.querySelector("#carrito-acciones")
        const carritoComprado = this.shadowRoot.querySelector("#carrito-comprado")
        carritoVacio.style.display =  "none"
        acciones.style.display =  "none"
        carritoComprado.style.display = "flex"
        this.contador = 0 
        this.shadowRoot.querySelector(".numerito").textContent = 0
        this.products = []
        this.requestUpdate()
    }
    render() {
        return html`
            <div class="container">
                <aside class="aside">
                    <header>
                        <h1 class="logo">CampusShop 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shop" viewBox="0 0 16 16">
                            <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z"/>
                            </svg>
                        </h1>
                    </header>
                    <nav>
                        <ul class="list">
                            <li>
                                <button class="boton_categoria ${this.botonActivo === 'todos los productos' ? 'boton-activo' : ''}" @click=${() => this.handleClickCategoria('todos los productos')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-handbag-fill" viewBox="0 0 16 16">
                                    <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2M5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0z"/>
                                    </svg>
                                    Todos los productos
                                </button>
                            </li>
                            <li>
                                <button class="boton_categoria ${this.botonActivo === 'abrigo' ? 'boton-activo' : ''}" @click=${() =>this.handleClickCategoria('abrigo')}> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-index-thumb" viewBox="0 0 16 16">
                                    <path d="M6.75 1a.75.75 0 0 1 .75.75V8a.5.5 0 0 0 1 0V5.467l.086-.004c.317-.012.637-.008.816.027.134.027.294.096.448.182.077.042.15.147.15.314V8a.5.5 0 0 0 1 0V6.435l.106-.01c.316-.024.584-.01.708.04.118.046.3.207.486.43.081.096.15.19.2.259V8.5a.5.5 0 1 0 1 0v-1h.342a1 1 0 0 1 .995 1.1l-.271 2.715a2.5 2.5 0 0 1-.317.991l-1.395 2.442a.5.5 0 0 1-.434.252H6.118a.5.5 0 0 1-.447-.276l-1.232-2.465-2.512-4.185a.517.517 0 0 1 .809-.631l2.41 2.41A.5.5 0 0 0 6 9.5V1.75A.75.75 0 0 1 6.75 1M8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v6.543L3.443 6.736A1.517 1.517 0 0 0 1.07 8.588l2.491 4.153 1.215 2.43A1.5 1.5 0 0 0 6.118 16h6.302a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5 5 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.6 2.6 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046zm2.094 2.025"/>
                                    </svg>
                                    Abrigos
                                </button>
                            </li>
                            <li><button class="boton_categoria ${this.botonActivo === 'camiseta' ? 'boton-activo' : ''}" @click=${() =>this.handleClickCategoria('camiseta')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-index-thumb" viewBox="0 0 16 16">
                                    <path d="M6.75 1a.75.75 0 0 1 .75.75V8a.5.5 0 0 0 1 0V5.467l.086-.004c.317-.012.637-.008.816.027.134.027.294.096.448.182.077.042.15.147.15.314V8a.5.5 0 0 0 1 0V6.435l.106-.01c.316-.024.584-.01.708.04.118.046.3.207.486.43.081.096.15.19.2.259V8.5a.5.5 0 1 0 1 0v-1h.342a1 1 0 0 1 .995 1.1l-.271 2.715a2.5 2.5 0 0 1-.317.991l-1.395 2.442a.5.5 0 0 1-.434.252H6.118a.5.5 0 0 1-.447-.276l-1.232-2.465-2.512-4.185a.517.517 0 0 1 .809-.631l2.41 2.41A.5.5 0 0 0 6 9.5V1.75A.75.75 0 0 1 6.75 1M8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v6.543L3.443 6.736A1.517 1.517 0 0 0 1.07 8.588l2.491 4.153 1.215 2.43A1.5 1.5 0 0 0 6.118 16h6.302a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5 5 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.6 2.6 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046zm2.094 2.025"/>
                                    </svg> 
                                    Camisetas
                                </button>
                            </li>
                            <li><button class="boton_categoria ${this.botonActivo === 'pantalon' ? 'boton-activo' : ''}" @click=${() =>this.handleClickCategoria('pantalon')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-index-thumb" viewBox="0 0 16 16">
                                    <path d="M6.75 1a.75.75 0 0 1 .75.75V8a.5.5 0 0 0 1 0V5.467l.086-.004c.317-.012.637-.008.816.027.134.027.294.096.448.182.077.042.15.147.15.314V8a.5.5 0 0 0 1 0V6.435l.106-.01c.316-.024.584-.01.708.04.118.046.3.207.486.43.081.096.15.19.2.259V8.5a.5.5 0 1 0 1 0v-1h.342a1 1 0 0 1 .995 1.1l-.271 2.715a2.5 2.5 0 0 1-.317.991l-1.395 2.442a.5.5 0 0 1-.434.252H6.118a.5.5 0 0 1-.447-.276l-1.232-2.465-2.512-4.185a.517.517 0 0 1 .809-.631l2.41 2.41A.5.5 0 0 0 6 9.5V1.75A.75.75 0 0 1 6.75 1M8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v6.543L3.443 6.736A1.517 1.517 0 0 0 1.07 8.588l2.491 4.153 1.215 2.43A1.5 1.5 0 0 0 6.118 16h6.302a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5 5 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.6 2.6 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046zm2.094 2.025"/>
                                    </svg>
                                    Pantalones
                                </button>
                            </li>
                            <li>
                                <button class="boton_categoria_cart-fill ${this.botonActivo === 'carrito' ? 'boton-activo' : ''}" @click=${() => this.eliminarProductosDeLaVista()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                                    </svg>
                                    Carrito
                                    <span class="numerito">0</span>
                                </button>
                            </li>
                        </ul>
                    </nav>
                <footer class="footer_text">©CampusLands</footer>
                </aside>    
                <main class="main">
                    <h2 class="titulo">${this.categoriaSeleccionada}</h2>
                    <div class="container_product">
                    ${Object.values(this.data[this.categoriaSeleccionada] || {}).map((element) =>    
                        html`
                            <div class="product">
                                <img src="${element.imagen}" class="img">
                                <div class="details">
                                    <h3 class="product-description">${element.nombre}</h3>
                                    <p class="product-price">$${element.precio}</p>
                                    <button class="product-button" @click=${this.guardarProducto}>Agregar</button>
                                </div>
                            </div>
                        `)}
                    </div>
                    <h2 class="titulo-carrito">Carrito de Compras</h2>
                    <div class="contenedor-carrito">
                        <p class="carrito_vacio">Tu carrito esta vacio            
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.5 3.5 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.5 4.5 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
                            </svg>
                        </p>
                        <div id="carrito-productos" class="carrito-productos disabled">
                            ${this.products.map((element) => html`
                                <div class="carrito-producto">
                                    <img src="${element.img}" class="carrito-producto-imagen">
                                    <div class="carrito-producto-titulo">
                                        <small>Titulo</small>
                                        <h3 class="product-title">${element.nombre}</h3>
                                    </div>
                                    <div class="carrito-producto-cantidad">
                                        <small>Cantidad</small>
                                        <h3>${element.cantidad}</h3>
                                    </div>
                                    <div class="carrito-producto-precio">   
                                        <small>Precio</small>
                                        <h3>$${element.subPrecio}</h3>
                                    </div>
                                    <div class="carrito-producto-subtotal">
                                        <small>Subtotal</small>
                                        <h3>$${element.precio}</h3>
                                    </div>
                                    <button class="carrito-producto-eliminar" @click=${this.eliminarProducto}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                                        </svg>
                                    </button>
                                </div>
                            ` )}
                        </div>
                        <div id="carrito-acciones" class="carrito-acciones disabled">
                            <div class="carrito-acciones-izquierda">
                                <button id="carrito-acciones-vaciar" class="carrito-acciones-vaciar" @click=${() => this.vaciarCarrito()}>Vaciar carrito</button>
                            </div>
                            <div class="carrito-acciones-derecha">
                                <div class="carrito-acciones-total">
                                    <p>Total:</p>
                                    <p id="total-compras">$</p>
                                </div>
                                <button id="carrito-acciones-comprar" class="carrito-acciones-comprar" @click=${() => this.graciasPorTuCompra()}>Comprar ahora</button>
                            </div>
                        </div>
                        <p id="carrito-comprado" class="carrito-comprado disabled"> Muchas gracias por tu compra. 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-laughing" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="M12.331 9.5a1 1 0 0 1 0 1A5 5 0 0 1 8 13a5 5 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5M7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5"/>
                            </svg>
                        </p>
                    </div>
                </main>
            </div>
        `
    }
    static styles = css`
        :root {
            --color-main: #4b33a8;
            --color-main-light: #785be9;
            --color-gold: #ececec;
            --color-gray: #e2e2e2;
            --color-red: #961818;
        }
        h1, h2, h3, h4, h5, h6, p, a, input, textarea, ul {
            margin: 0;
            padding: 0;
        }
        * {
            margin: 0;
            padding: 0; 
            box-sizing: border-box; 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
        }
        .container {
            display:grid;
            background: var(--color-main);
            grid-template-columns: 1.2fr 4fr;
            grid-template-rows: 1fr;
        }
        .aside {
            grid-area: 1 / 1 / 2 / 2;
            padding: 2rem;
            padding-right: 0; 
            color: var(--color-gold);
            height: 100vh;
            position: sticky;
            top: 0;
            display: flex; 
            flex-direction: column; 
            justify-content: space-between;
        }
        .logo {
            font-weight: 500;
            font-size: 1.4em;
            color: var(--color-gray); 
        }
        .list {
            list-style: none; 
            display:flex; 
            flex-direction: column; 
            gap: 1rem;
        }
        .footer_text {
            color: var(--color-gray); 
            font-size: 0.85rem;
        }
        .boton_categoria, .boton_categoria_cart-fill {
            display: flex; 
            align-items: center; 
            background: transparent; 
            color: var(--color-gray); 
            border: none; 
            font-size: 1.2rem;
            font-weight: 600; 
            gap: 1rem;
            padding: .75em;  
            cursor: pointer; 
        }
        .boton_categoria_cart-fill {
            margin-top: 4rem; 
        }
        .boton-activo {
            background-color: var(--color-gold);
            color: var(--color-gray); 
            width: 100%;
            border-top-left-radius: 1rem; 
            border-bottom-left-radius: 1rem;
        }
        .bi-hand-index-thumb {
            transform: rotateZ(90deg)
        }
        .main {
            grid-area: 1 / 2 / 2 / 3; 
            background-color: var(--color-gold);
            margin: 1rem;
            margin-left: 0;
            border-radius: 2rem;
            padding: 3rem;
        }
        .titulo, .titulo-carrito{
            text-transform: capitalize; 
            color: white; 
            margin-bottom: 2rem;
        }
        .container_product{
            display: grid; 
            grid-template-columns: repeat(4, 1fr);
            gap: 1rem;
            border-radius: 1rem;
        }
        .img {
            height: 250px; 
            width: 100%; 
            border-radius: 1rem; 
        }
        .numerito {
            background-color: var(--color-gold);
            color: var(--color-main);
            padding: .15rem .25rem;
            border-radius: .25rem;
        }
        .details {
            font-size: 0.8em;  
            background: var(--color-main);
            color: var(--color-gray); 
            padding: .5rem; 
            border-radius: 1rem;
            margin-top: -2rem; 
            position: relative; 
            display: flex;
            flex-direction: column; 
            gap: .25rem; 
            text-transform: capitalize
        }
        .product-description {
            font-size: 1em;
            max-height: 1.1em;
            overflow-y: scroll;
            color: var(--color-gray);   
        }
        .product-button {
            border: none;
            background-color: var(--color-gray);  
            color: var(--color-main); 
            padding: .25rem; 
            text-transform: uppercase;
            cursor: pointer; 
            border-radius: 2rem;    
            font-weight: 600; 
            transition: 0.5s
        }
        .product-button:hover {
            background-color: #00FF00; 
            color: var(--color-gold)
        }
        .boton_carrito {
            text-decoration: none;
            color: var(--color-gold)
        }
        /** CARRITO **/

        .contenedor-carrito {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }

        .carrito_vacio,
        .carrito-comprado {
            color: var(--color-gray);
            font-weight: 500; 
        }
        .carrito-comprado {
            display: none; 
        }
        .carrito-productos {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .carrito-producto {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: var(--color-gray);
            color: var(--color-main);
            padding: .5rem;
            padding-right: 1.5rem;
            border-radius: 1rem;
        }
        .carrito-producto-titulo{
            overflow-x: hidden;
            max-width: 20em;
            width: 20em;

        }

        .carrito-producto-imagen {
            width: 4rem;
            border-radius: 1rem;
        }

        .carrito-producto small {
            font-size: .75rem;
        }

        .carrito-producto-eliminar {
            border: 0;
            background-color: transparent;
            color: var(--color-red);
            cursor: pointer;
        }

        .carrito-acciones {
            display: none;
            justify-content: space-between;
        }

        .carrito-acciones-vaciar {
            border: 0;
            background-color: var(--color-gray);
            padding: 1rem;
            border-radius: 1rem;
            color: var(--clr-main);
            text-transform: uppercase;
            cursor: pointer;
            font-weight: 500; 
        }

        .carrito-acciones-derecha {
            display: flex;
        }

        .carrito-acciones-total {
            display: flex;
            background-color: var(--color-gray);
            padding: 1rem;
            color: var(--color-main);
            text-transform: uppercase;
            border-top-left-radius: 1rem;
            border-bottom-left-radius: 1rem;
            gap: 1rem;
            font-weight: 500; 
        }

        .carrito-acciones-comprar {
            border: 0;
            background-color: var(--color-main);
            padding: 1rem;
            color: var(--color-gold);
            text-transform: uppercase;
            cursor: pointer;
            border-top-right-radius: 1rem;
            border-bottom-right-radius: 1rem;
            font-weight: 500;
        }

        /*** MEDIA QUERIES ***/

        @media screen and (max-width: 850px) {
            .container_product {
                grid-template-columns: 1fr 1fr 1fr;
            }
        }

        @media screen and (max-width: 675px) {
            .container_product {
                grid-template-columns: 1fr 1fr;
            }
        }

        @media screen and (max-width: 600px) {

            .container {
                min-height: 100vh;
                display: flex;
                flex-direction: column;
            }

            .aside {
                position: fixed;
                z-index: 9;
                background-color: var(--color-main);
                left: 0;
                box-shadow: 0 0 0 100vmax rgba(0, 0, 0, .75);
                transform: translateX(-100%);
                opacity: 0;
                visibility: hidden;
                transition: .2s;
            }

            .aside-visible {
                transform: translateX(0);
                opacity: 1;
                visibility: visible;
            }

            .boton-menu.active::before,
            .boton-menu.active::after {
                display: none;
            }

            .main {
                margin: 1rem;
                margin-top: 0;
                padding: 2rem;
            }

            .container_product {
                grid-template-columns: 1fr 1fr;
            }

            .header-mobile {
                padding: 1rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .header-mobile .logo {
                color: var(--color-gray);
            }

            .open-menu, .close-menu {
                background-color: transparent;
                color: var(--color-gray);
                border: 0;
                font-size: 2rem;
                cursor: pointer;
            }

            .close-menu {
                display: block;
                position: absolute;
                top: 1rem;
                right: 1rem;
            }

            .carrito-producto {
                gap: 1rem;
                flex-wrap: wrap;
                justify-content: flex-start;
                padding: .5rem;
            }

            .carrito-producto-subtotal {
                display: none;
            }

            .carrito-acciones {
                flex-wrap: wrap;
                row-gap: 1rem;
            }
            
        }

        @media screen and (max-width: 400px) {
            .container_product {
                grid-template-columns: 1fr;
            }
        }

    `
}
customElements.define("all-page", allPage)