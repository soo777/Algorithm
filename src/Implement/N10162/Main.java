package Implement.N10162;

// 백준
// 10162 전자레인지

import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int a = 0, b = 0, c = 0;
        int tmp;

        int T = Integer.parseInt(br.readLine());

        if (T / 300 > 0) {
            a = T / 300;
            tmp = T % 300;
        } else {
            tmp = T;
        }

        if (tmp / 60 > 0) {
            b = tmp / 60;
            tmp = tmp % 60;
        }

        if (tmp / 10 > 0) {
            c = tmp / 10;
            tmp = tmp % 10;
        }

        if (tmp == 0) {
            bw.write(a + " " + b + " " + c + "\n");
        } else {
            bw.write("-1" + "\n");
        }

        bw.close();
    }
}
