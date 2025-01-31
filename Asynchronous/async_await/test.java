public class test{
    public static void main(String[] args){
        int[] arr = {4,2,1,5,3};
        for(int i = 0; i<arr.length-1; i++){
            if(arr[i] < arr[i+1]){
                arr[i] = -1;
            }
            else if(arr[i] > arr[i+1]){
                arr[i] = arr[i+1];
            }
        }
        arr[arr.length-1] = -1;
    }
}