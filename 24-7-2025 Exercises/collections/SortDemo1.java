//package com.wipro.collections;
//
//import java.util.ArrayList;
//import java.util.Arrays;
//import java.util.Collections;
//import java.util.Comparator;
//import java.util.List;
//
//public class SortDemo1 {
//
//	public static void main(String[] args) {
//	 
////		List<Integer> list= Arrays.asList(1,2,45,9,0,5,6);
////		Collections.sort(list);
////		System.out.println(list);
//		
//		Movie m1= new Movie("Titanic","English","Romantic",8);
//		Movie m2= new Movie("Jurasic Park","English","Adventure",7.5);
//		Movie m3= new Movie("Sholay","Hindi","Action",8.5);
//		Movie m4= new Movie("Drishyam","Malayalam","Thriller",8.1);
//		
//		List<Movie> movieList= new ArrayList<>();
//		movieList.add(m1);
//		movieList.add(m2);
//		movieList.add(m3);
//		movieList.add(m4);
//		Collections.sort(movieList);
//		System.out.println(movieList);
//		Collections.sort(movieList,new SortMovieByLanguage());
//		System.out.println(movieList);
//		Collections.sort(movieList,new SortByMovieName());
//		System.out.println(movieList);
//		Collections.sort(movieList,new SortByImdbRating());
//		System.out.println(movieList);
//		
//	}
//
//}