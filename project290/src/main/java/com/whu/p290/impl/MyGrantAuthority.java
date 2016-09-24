package com.whu.p290.impl;

import org.springframework.security.core.GrantedAuthority;

public class MyGrantAuthority implements GrantedAuthority{
	
	private int role;
	public MyGrantAuthority(Integer role)
	{
		this.role=role;
	}

	@Override
	public String getAuthority() {
		// TODO Auto-generated method stub
		return String.valueOf(role);
	}
      
}
