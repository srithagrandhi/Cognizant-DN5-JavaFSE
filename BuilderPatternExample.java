package week2;

public class BuilderPatternExample {

    public static void main(String[] args) {

        Computer gamingPC = new Computer.Builder()
                .setCPU("Intel i7")
                .setRAM("16GB")
                .setStorage("1TB SSD")
                .build();

        gamingPC.display();
    }
}