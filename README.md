# Hora Extra JS

## Introdução

Neste pequeno exercício vamos criar uma Slot Machine simples que recebe um valor inicial de aposta e nos dá uma pontuação.

Disclaimer: Não incentivamos o jogo a dinheiro na vida real. Nas palavras de Mark Twain:
> Há duas ocasiões em que o homem não deve jogar: quando não tem dinheiro e quando tem.

## Enunciado

1. Ao clicar no botão "Jogar" deve esconder o elemento "intro" e mostrar o elemento "jogo".
2. Devem ser gerados 3 números aleatórios que serão introduzidos nos elementos "slot1/2/3" com um delay de 300ms entre si.
3. Após todos os números serem inseridos deverá ser feita a conta da pontuação que será inserida no elemento "score".
    - No caso de não haver nenhum número igual a outro a fórmula para a pontuação será a seguinte `-(2*aposta*5)`.
    - No caso de haver números iguais será utilizada a seguinte fórmula: `aposta*(5^nºs iguais)`
4. Após isto os botões "Jogar Novamente" e "Mudar Aposta" ficarão disponíveis.
    - O botão "Jogar Novamente" deverá bloquear os botões e correr o jogo mais uma vez.
    - O botão "Mudar Aposta" irá esconder o elemento "jogo" e deverá mostrar novamente o elemento "intro" para que o jogador possa mudar a sua aposta.
    
### Exercício completo
O exercício completo pode ser consultado no link abaixo.

[Link para o completo](https://josueaosilverio.github.io/horaExtraJsSlots/)

### Ficheiros para o exercício
Os ficheiros para o exercício podem ser descarregados no link abaixo

[Link para os ficheiros](https://drive.google.com/open?id=121p-xa__6T4wiGLFGMHAlvxPzJZmNl9K)

### Slides da aula
Os slides utilizados podem ser consultados no link abaixo

[Link para os slides](https://slides.com/josuesilverio/hora-extra-js)

