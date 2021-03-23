package Implement.N5565;

// 백준
// 5565 영수증

import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int sum = Integer.parseInt(br.readLine());

        for(int i=0; i<9; i++) {
            sum -= Integer.parseInt(br.readLine());
        }

        bw.write(sum + "\n");

        bw.close();
    }
}
