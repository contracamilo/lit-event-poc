import { LitElement, html } from 'lit-element';

class ComponentA extends LitElement {
    emitIdEvent() {
        const event = new CustomEvent('id-event', {
            detail: { id: 'userid-123' },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(event);
    }

    render() {
        return html`
      <button @click="${this.emitIdEvent}">Emitir ID</button>
    `;
    }
}

customElements.define('component-a', ComponentA);
