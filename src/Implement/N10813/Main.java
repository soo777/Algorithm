package Implement.N10813;

// 백준
// 10813 공 바꾸기

import java.io.*;
import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringTokenizer st;

        st = new StringTokenizer(br.readLine());

        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());

        List list = new ArrayList();

        for (int i = 1; i <= N; i++) {
            list.add(i);
        }

        for (int i = 0; i < M; i++) {
            st = new StringTokenizer(br.readLine());

            int a = Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());

            int tmp = Integer.parseInt(list.get(a-1).toString());
            list.set(a-1, Integer.parseInt(list.get(b-1).toString()));
            list.set(b-1, tmp);
        }

        for (int i = 0; i < N; i++) {
            bw.write(list.get(i) + " ");
        }

        bw.flush();
        bw.close();
    }
}
