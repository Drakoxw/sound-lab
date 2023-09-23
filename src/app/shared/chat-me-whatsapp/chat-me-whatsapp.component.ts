import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

const WHATSAPP_PHONE = 573008022500
const WHATSAPP_LINK = "https://wa.me/" + WHATSAPP_PHONE;

@Component({
  selector: 'app-chat-me-whatsapp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-me-whatsapp.component.html'
})
export class ChatMeWhatsappComponent {

  linkWhastapp = WHATSAPP_LINK;

}
