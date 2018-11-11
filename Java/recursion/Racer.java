public class Racer {

	public static void main(String[] args) {
		Racer.callMeMaybe(1000);
	}

	private static int callMeMaybe(int i) {
		if(i == 0) return i;
		return Racer.callMeMaybe(--i);
	}
}
