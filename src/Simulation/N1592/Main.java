package Simulation.N1592;

// 백준
// 1592 영식이와 친구들

import java.io.*;
import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());
        int L = Integer.parseInt(st.nextToken());

        List<Person> list = new ArrayList();
        Person person;

        for (int i = 1; i <= N; i++) {
            person = new Person(i);
            list.add(person);
        }

        int index = 1;
        int nextIndex = 0;
        int cnt = 0;

        list.get(0).setCatchCnt(1);

        while (true) {
            nextIndex = (index + L) % N;

            if (nextIndex != 0) {
                list.get(nextIndex - 1).setCatchCnt(list.get(nextIndex - 1).getCatchCnt() + 1);
                cnt++;
                if (list.get(nextIndex - 1).getCatchCnt() == M) break;
            } else {
                list.get(N - 1).setCatchCnt(list.get(N - 1).getCatchCnt() + 1);
                cnt++;
                if (list.get(N - 1).getCatchCnt() == M) break;
            }
            index = nextIndex;
        }

        bw.write(cnt + "\n");

        bw.flush();
        bw.close();
    }

    public static class Person {
        int index;
        int catchCnt;

        Person(int i) {
            index = i;
            catchCnt = 0;
        }

        public int getCatchCnt() {
            return catchCnt;
        }

        public void setCatchCnt(int catchCnt) {
            this.catchCnt = catchCnt;
        }
    }
}
