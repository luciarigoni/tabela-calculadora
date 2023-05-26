import { Component } from '@angular/core';
import { People } from './people';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {

  public manyPeople: People[] = [
  ]

  count: number = this.manyPeople.length
  
  public person: People = {
    nome: '',
    sobrenome: ''
  }

  enviarPessoa() {
    if (this.person.nome == '' || this.person.sobrenome == '') {
      alert('Insira um valor válido')
    } else {
      this.manyPeople.push(this.person)
    }

    this.count = this.manyPeople.length

    this.limparNome()
  }
  limparNome() {
    this.person = {
      nome: '',
      sobrenome: ''
    }
  }
}