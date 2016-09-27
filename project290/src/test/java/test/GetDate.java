package test;

import java.text.MessageFormat;
import java.util.Date;

public class GetDate {

	public static void main(String args[])
	{
		Date day = new Date();
		System.out.println(day);
		String       dateTime = MessageFormat.format("{0,date,yyyy-MM-dd 00:00:00}" ,
                new Object[]       {
                    new java.sql.Date(System.currentTimeMillis())
                });
		System.out.println(dateTime);
	}
	
}
