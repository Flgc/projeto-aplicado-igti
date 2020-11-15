import { Base } from './model';
import { connectOn, connectOFF } from './dao/mysql';
import { create, Whatsapp } from 'venom-bot';

function main(whots: Whatsapp) {
  whots.onMessage((message) => {
    whots.sendText(
      message.from,
      'Bom dia! / Boa tarde! / Boa noite! ' +
        'Sou uma atendente virtual. Com a sua autorização irei armazenar suas conversas.' +
        ' Digite "SIM" para autorizar ou "NÃO" para proceguir sem o armazenamento.'
    );
  });
}

try {
  (async () => {
    await connectOn({
      host: '127.0.0.1',
      user: 'root',
      password: '',
      database: 'whatsapp',
    });

    let venom = await create();

    main(venom);
  })();
} catch (error) {
  connectOFF();
}
