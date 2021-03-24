package Implement.N1110;

// 백준
// 1110 더하기 사이클

import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int input = Integer.parseInt(br.readLine());
        int tempInput = input;
        int count = 0;

        int a, b, c, d;

        while (true) {
            a = tempInput / 10;
            b = tempInput % 10;
            c = a + b;
            d = c % 10;
            String q = Integer.toString(b) + Integer.toString(d);

            count += 1;
            if (Integer.parseInt(q) == input) {
                break;
            } else {
                tempInput = Integer.parseInt(q);
            }
        }

        bw.write(count + "\n");
        bw.close();
    }
}
