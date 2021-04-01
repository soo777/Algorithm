package Implement.N10984;

// 백준
// 10984 내 학점을 구해줘

import java.io.*;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringTokenizer st;

        int T = Integer.parseInt(br.readLine());

        int grade, tempGrade;
        float sum, tempGpa, gpa;

        for (int i = 0; i < T; i++) {
            sum = 0;
            tempGpa = 0;
            grade = 0;
            tempGrade = 0;

            int K = Integer.parseInt(br.readLine());

            for (int j = 0; j < K; j++) {
                st = new StringTokenizer(br.readLine());

                tempGrade = Integer.parseInt(st.nextToken());

                grade += tempGrade;
                tempGpa = tempGrade * Float.parseFloat(st.nextToken());
                sum += tempGpa;
            }

            gpa = sum / grade;

            bw.write(grade + " " + String.format(String.format("%.1f", gpa)) + "\n");
        }

        bw.flush();
        bw.close();
    }
}
