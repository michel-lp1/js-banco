class Cliente{
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    saldo;
}

const cliente1 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 48402855865;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 1000285865;


console.log(cliente1);
console.log(cliente2);