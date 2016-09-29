package com.whu.p290.impl;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.whu.p290.mapper.result.TestUserResult;

public class MyUserDetails implements UserDetails {
	
	private TestUserResult userResult;
	public MyUserDetails(TestUserResult userResult)
	{
		this.userResult=userResult;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		Set<MyGrantAuthority> sets = new HashSet<MyGrantAuthority>();
		MyGrantAuthority myGrantAuthority = new MyGrantAuthority(userResult.getRole());
		sets.add(myGrantAuthority);
		return sets;
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return userResult.getPassword();
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return userResult.getUser_name();
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}

}
