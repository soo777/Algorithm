package Implement.N10817;

// 백준
// 10817

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int inputA;
        inputA = scanner.nextInt();

        int inputB;
        inputB = scanner.nextInt();

        int inputC;
        inputC = scanner.nextInt();

        if(inputA > inputB) {
            if (inputB > inputC) {
                System.out.println(inputB);
            } else {
                if(inputC > inputA) {
                    System.out.println(inputA);
                } else {
                    System.out.println(inputC);
                }
            }
        } else {
            if (inputA > inputC) {
                System.out.println(inputA);
            } else {
                if(inputC > inputB) {
                    System.out.println(inputB);
                } else {
                    System.out.println(inputC);
                }
            }
        }
    }
}
