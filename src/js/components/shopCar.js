import { LitElement, html, css } from "lit";
import { getAllData } from "../modules/getData";

export class shopCar extends LitElement {
    constructor() {
        super()
        this.data = getAllData()
        this.categoriaSeleccionada = ''
        this.botonActivo = '';
    }
    static properties = {
        data: {typeof: Object},
        categoriaSeleccionada: {typeof: String},
        botonActivo: {typeof: String}
    }
    static styles = css`
        :root {
            --color-main: #4b33a8;
            --color-main-light: #785be9;
            --color-white: #ececec;
            --color-gray: #e2e2e2;
            --color-red: #961818;
        }
        * {
            margin: 0;
            padding: 0; 
            box-sizing: border-box; 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
        }
        .carrito_vacio {
            color: var(--color-main);
            font-size: 1.2rem;
            font-weight: 500; 
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
            color: var(--color-white);
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

        }
        .list {
            list-style: none; 
            display:flex; 
            flex-direction: column; 
            gap: 1rem;
        }
        .footer_text {
            color: #785be9;
            font-size: 0.85rem;
        }
        .boton_categoria, .boton_categoria_cart-fill, .boton-activo, .boton_volver {
            display: flex; 
            align-items: center; 
            background: transparent; 
            color: var(--color-white); 
            border: none; 
            font-size: 1.2rem;
            font-weight: 600; 
            gap: 1rem;
            padding: .75em;  
            cursor: pointer; 
            text-decoration: none;
        }
        .boton_categoria_cart-fill {
            margin-top: 4rem; 
        }
        .boton-activo {
            background-color: var(--color-white);
            color: var(--color-main); 
            width: 100%;
            border-top-left-radius: 1rem; 
            border-bottom-left-radius: 1rem;
        }
        .bi-hand-index-thumb {
            transform: rotateZ(90deg)
        }
        .main {
            grid-area: 1 / 2 / 2 / 3; 
            background-color: var(--color-white);
            margin: 1rem;
            margin-left: 0;
            border-radius: 2rem;
            padding: 3rem;
        }
        .titulo{
            text-transform: capitalize; 
            color: var(--color-main);
            margin-bottom: 2rem;
        }
        .container_product{
            display: grid; 
            grid-template-columns: repeat(4, 1fr);
            gap: 1rem;
            border-radius: 1rem;
        }
        .img {
            height: 200px; 
            width: 100%; 
            border-radius: 1rem; 
        }
        .details {
            font-size: 0.8em;  
            background: var(--color-main);
            color: var(--color-white);
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
        }
        .product-button {
            border: none;
            background-color: var(--color-white); 
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
            color: var(--color-white)
        }
        .boton_carrito {
            text-decoration: none;
            color: var(--color-white)
        }
        /** CARRITO **/

        .contenedor-carrito {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }

        .carrito-vacio,
        .carrito-comprado {
            color: var(--color-main);
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
            display: flex;
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
        }

        .carrito-acciones-comprar {
            border: 0;
            background-color: var(--color-main);
            padding: 1rem;
            color: var(--color-white);
            text-transform: uppercase;
            cursor: pointer;
            border-top-right-radius: 1rem;
            border-bottom-right-radius: 1rem;
        }
        /*** MEDIA QUERIES ***/
        @media screen and (max-width: 850px) {
            .contenedor-productos {
                grid-template-columns: 1fr 1fr 1fr;
            }
        }

        @media screen and (max-width: 675px) {
            .contenedor-productos {
                grid-template-columns: 1fr 1fr;
            }
        }

        @media screen and (max-width: 600px) {

            .wrapper {
                min-height: 100vh;
                display: flex;
                flex-direction: column;
            }

            aside {
                position: fixed;
                z-index: 9;
                background-color: var(--clr-main);
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

            main {
                margin: 1rem;
                margin-top: 0;
                padding: 2rem;
            }

            .contenedor-productos {
                grid-template-columns: 1fr 1fr;
            }

            .header-mobile {
                padding: 1rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .header-mobile .logo {
                color: var(--clr-gray);
            }

            .open-menu, .close-menu {
                background-color: transparent;
                color: var(--clr-gray);
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
            .contenedor-productos {
                grid-template-columns: 1fr;
            }
        }

    `
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
                            <button class="boton_categoria"><a class="boton_volver" href="../../index.html">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
                                </svg>
                                Volver
                                </a>
                            </button>
                        </li>
                        <li>
                        <button class="boton-activo">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                            </svg>
                            Carrito
                        </button>
                        </li>
                    </ul>
                </nav>
            <footer class="footer_text">© 2024 Joel Ramos</footer>
            </aside>    
            <main class="main">
                <h2 class="titulo">Carrito</h2>
                <div class="contenedor-carrito">
                    <p class="carrito_vacio">Tu carrito esta vacio 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.5 3.5 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.5 4.5 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
                        </svg>
                    </p>
                    <div id="carrito-productos" class="carrito-productos disabled">
                        <!-- Esto se va a completar con el JS -->
                    </div>
                    <div id="carrito-acciones" class="carrito-acciones disabled">
                        <div class="carrito-acciones-izquierda">
                            <button id="carrito-acciones-vaciar" class="carrito-acciones-vaciar">Vaciar carrito</button>
                        </div>
                        <div class="carrito-acciones-derecha">
                            <div class="carrito-acciones-total">
                                <p>Total:</p>
                                <p id="total">$3000</p>
                            </div>
                            <button id="carrito-acciones-comprar" class="carrito-acciones-comprar">Comprar ahora</button>
                        </div>
                    </div>
                    <p id="carrito-comprado" class="carrito-comprado disabled">Muchas gracias por tu compra. <i class="bi bi-emoji-laughing"></i></p>
                </div>
            </main>
        </div>
        ` 
    }
}
customElements.define("all-car", shopCar)