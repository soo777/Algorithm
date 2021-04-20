package Simulation.N10804;

// 백준
// 10804 카드 역배치

import java.io.*;
import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringTokenizer st;

        List list = new ArrayList();

        for (int i = 1; i <= 20; i++) {
            list.add(i);
        }

        for (int i = 0; i < 10; i++) {
            st = new StringTokenizer(br.readLine());

            int start = Integer.parseInt(st.nextToken());
            int end = Integer.parseInt(st.nextToken());

            int tempEnd = end;
            List tempList = new ArrayList();
            tempList.addAll(list);

            for (int j = start - 1; j < end; j++) {
                list.set(j, tempList.get(tempEnd - 1));
                tempEnd--;
            }
        }

        for (int i = 0; i < list.size(); i++) {
            bw.write(list.get(i) + " ");
        }

        bw.flush();
        bw.close();
    }
}
