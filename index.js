class Cliente{
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    _saldo = 0;

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0)
        {
            return;          
        }
        this.saldo += valor; 
    }
}

const cliente1 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 48402855865;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 1000285865;

const contaCorrenteRicardo = new ContaCorrente();

contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.depositar(100);

const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(valorSacado);

console.log(contaCorrenteRicardo);
