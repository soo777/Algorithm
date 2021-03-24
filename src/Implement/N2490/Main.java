package Implement.N2490;

// 백준
// 2490 윷놀이

import java.io.*;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringTokenizer st;
        int sum;

        for(int i=0; i<3; i++) {
            st = new StringTokenizer(br.readLine());
            sum = 0;

            for(int j=0; j<4; j++) {
                sum += Integer.parseInt(st.nextToken());
            }

            switch (sum) {
                case 0:
                    bw.write("D \n");
                    break;
                case 1:
                    bw.write("C \n");
                    break;
                case 2:
                    bw.write("B \n");
                    break;
                case 3:
                    bw.write("A \n");
                    break;
                case 4:
                    bw.write("E \n");
                    break;
            }
        }
        bw.close();
    }
}
