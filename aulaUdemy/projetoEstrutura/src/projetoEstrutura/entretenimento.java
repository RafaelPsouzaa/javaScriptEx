package projetoEstrutura;

import java.awt.datatransfer.SystemFlavorMap;
import java.util.Scanner;

public class entretenimento {
static int resposta =1;
static double comida[] = new double[20];
static double bebida[] = new double[20];
static double totalBebida;
static double valorComida;
static double valorBebida;
static double valordiversao;
static double total;
static String nomeComida;
static String nomeBebida;
static String nomeDiversao;


	public static void main(String[] args) {
	
		while(resposta == 1) {
			System.out.println("---WELCOME(YAKISSOBA KONOA)----");
			System.out.println("O que quer fazer? Responda com o codigo referente");
			System.out.println("Qual seu Pedido ");
			System.out.println("1 : Bebidas");
			System.out.println("2 : Comidas");
			System.out.println("3 : Diversao");
			System.out.println("--------");
			Scanner teclado = new Scanner(System.in);
			int desejo = teclado.nextInt();
			
			switch(desejo) {
			
			case 1:
				if(desejo == 1) {
					System.out.println("1 : coca");
					System.out.println("2 : Sague");
					System.out.println("3 : Agua");
					int bebidas = teclado.nextInt();
							if(bebidas == 1) {
					
								valorBebida = 10;
								bebida[0]= valorBebida;
								nomeBebida = "coca-cola";
								
								}
							if(bebidas == 2) {
								valorBebida = 80;
								bebida[1]= valorBebida;
								nomeBebida = "Sague";
								}
							if(bebidas == 3) {
								
								valorBebida = 5;
								bebida[2]= valorBebida;
								nomeBebida = "Agua";
								
								} if(bebidas <0 || bebidas>3) {
									System.out.println("Opcao Errada");
								}
								
							System.out.println("voce escolheu: "+nomeBebida+" no valor de: "+valorBebida);
				}
				break;
			case 2 :	
				System.out.println("1 : sushi");
				System.out.println("2 : yakisoba");
				System.out.println("3 : rolinho primavera");
				int comidas = teclado.nextInt();
				if(comidas == 1) {
					valorComida = 80;
					comida[0]=valorComida;
					nomeComida = "Sushi";
					}
				if(comidas == 2) {
					valorComida = 50;
					comida[1]=valorComida;
					nomeComida = "yakisoba";
					}
				if(comidas == 3) {
					
					valorComida = 25;
					comida[2]=valorComida;
					nomeComida = "rolinho primavera";
					
					}if(comidas <0 || comidas>3) {
						System.out.println("Opcao Errada");
					}

				
				break;
			case 3 :	
				System.out.println("1 : karaoke");
				System.out.println("2 : maquina de pinball ");
				System.out.println("3 : Quarto de jogos");
				int diversao = teclado.nextInt();
				if(diversao == 1) {
					
					valordiversao = 80.00;
					nomeDiversao = "karaoke";
					}
				if(diversao == 2) {
					valordiversao = 2.00;
					 nomeDiversao = " maquina de pinball";
					}
				if(diversao == 3) {
					
					valordiversao = 250.00;
					nomeDiversao = "quarto de jogos ";
					
					}if(diversao <0 || diversao>3) {
						System.out.println("Opcao Errada");
					}
				
				break;
			
				
				default:
					System.out.println("Opcao errada");
					break;
					}
			System.out.println("\n Deseja realizar outra operaçao 1-sim 2- nao");
			resposta = teclado.nextInt();
			if(resposta !=1) {
				System.out.println("BYE BYE \n\n");

			}
			
			
			System.out.println("\nvoce escolheu: "+nomeComida+" valor R$: "+valorComida+comida[0]);
			System.out.println("\nvoce escolheu: "+nomeBebida+" valor R$: "+valorBebida+" array"+bebida[0]);
			System.out.println("\nvoce escolheu: "+nomeDiversao+ " valor R$: "+valordiversao);
			total = valorBebida+valorComida+valordiversao;
			System.out.println("\nSua conta a pagar: "+total);
			

			
		}
		
	}
}
