package Implement.N2438;

// 백준
// 2438

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int input;
        input = scanner.nextInt();

        for(int i=1; i<input+1; i++){
            for(int j=0; j<i; j++) {
                System.out.print('*');
            }
            System.out.println();
        }
    }
}
