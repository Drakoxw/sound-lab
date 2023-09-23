import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WHATSAPP_LINK } from '@constants/common';

@Component({
  selector: 'app-chat-me-whatsapp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-me-whatsapp.component.html'
})
export class ChatMeWhatsappComponent {

  linkWhastapp = WHATSAPP_LINK;

}
