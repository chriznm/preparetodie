
module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log(`${client.user.tag} ha iniciado sesion y esta en linea`);
    }
}