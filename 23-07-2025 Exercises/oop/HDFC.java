package com.wipro.oop;

public class HDFC implements BankOps {

	@Override
	public void deposit(double amount, String accNumber) {
		// TODO Auto-generated method stub
		System.out.println("HDFC Deposit Amount = " + amount + "  AccNum =" + accNumber);
	}

	@Override
	public double withdraw(double amount, String accNumber) {
		// TODO Auto-generated method stub
		System.out.println("HDFC Withdraw Amount = " + amount + "  AccNum =" + accNumber);
		return 0;
	}

}
