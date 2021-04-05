package Implement.N10818;

// 백준
// 10818 최소, 최대

import java.io.*;
import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringTokenizer st;

        int T = Integer.parseInt(br.readLine());

        List<Integer> arr = new ArrayList<Integer>();

        st = new StringTokenizer(br.readLine());

        for (int i = 0; i < T; i++) {
            arr.add(Integer.parseInt(st.nextToken()));
        }

        arr.sort(null);

        bw.write(arr.get(0) + " " + arr.get(arr.size()-1) + "\n");

        bw.flush();
        bw.close();
    }
}
