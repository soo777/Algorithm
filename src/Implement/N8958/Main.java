package Implement.N8958;

// 백준
// 8958 OX퀴즈

import java.io.*;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringTokenizer st;

        int T = Integer.parseInt(br.readLine());

        int sum, temp;

        for (int i = 0; i < T; i++) {
            sum = 0;
            temp = 0;

            String str = br.readLine();
            String[] arr = str.split("");

            for (int j = 0; j < arr.length; j++) {
                if (j == 0) {
                    if (arr[j].equals("O")) {
                        sum += 1;
                        temp += 1;
                    }
                } else {
                    if ( arr[j].equals("O")) {
                        if(arr[j].equals(arr[j - 1])){
                            temp += 1;
                            sum += temp;
                        } else {
                            temp += 1;
                            sum += 1;
                        }
                    } else {
                        temp = 0;
                    }
                }
            }
            bw.write(sum + "\n");
        }

        bw.flush();
        bw.close();
    }
}
