package com.wipro.fileio;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class FileIOEx5 {

	public static void main(String[] args) {
		String inputFileName = "d://Javalogo_input.png";
		String outputFileName = "d://Javalogo_output.png";
		
		try (FileInputStream fi = new FileInputStream(inputFileName);
				FileOutputStream fo = new FileOutputStream(outputFileName)) {
			byte[] buffer = new byte[2024];
			int byteRead=0;
			
			try {
				while((byteRead=fi.read(buffer))!=-1) {
					fo.write(buffer,0, byteRead);
				}
			}catch(IOException e){
				e.printStackTrace();
			};
			
		}catch(IOException e){
			e.printStackTrace();
		}
	}

}
