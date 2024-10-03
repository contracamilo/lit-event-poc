import { LitElement, html } from 'lit-element';

class ComponentB extends LitElement {
    static get properties() {
        return {
            receivedId: { type: String }
        };
    }

    constructor() {
        super();
        this.receivedId = '';
        this.handleIdEvent = this.handleIdEvent.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    connectedCallback() {
        super.connectedCallback();
        document.addEventListener('id-event', this.handleIdEvent);
    }

    disconnectedCallback() {
        document.removeEventListener('id-event', this.handleIdEvent);
        super.disconnectedCallback();
    }

    handleIdEvent(event) {
        this.receivedId = event.detail.id;
        console.log('Componente B recibió ID:', this.receivedId);
    }

    handleButtonClick() {
        if (this.receivedId) {
            fetch(`https://api.example.com/data/${this.receivedId}`)
                .then(response => response.json())
                .then(data => {
                    console.log('Datos obtenidos:', data);
                })
                .catch(error => {
                    console.error('Error al obtener datos:', error);
                });
        } else {
            console.warn('No se ha recibido ningún ID todavía.');
        }
    }

    render() {
        return html`
      <button @click="${this.handleButtonClick}">Obtener Datos</button>
    `;
    }
}

customElements.define('component-b', ComponentB);
