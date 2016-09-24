package com.whu.p290.impl;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Random;

import javax.annotation.Resource;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.whu.p290.dao.UserMapper;
import com.whu.p290.dto.UserDto;
import com.whu.p290.mapper.param.UserParam;
import com.whu.p290.mapper.result.TestUserResult;
import com.whu.p290.mapper.result.UserResult;
import com.whu.p290.service.UserService;

@Service("userService")
public class UserServiceImpl implements UserService{

	@Resource
	private UserMapper userMapper;
	
	@Override
	public Integer insertUser(UserDto userDto) {
		// TODO Auto-generated method stub
		int s;
		UserParam userParam = new UserParam();
		userParam.setUsername(userDto.getUsername());
		userParam.setPassword(userDto.getPassword());
		userParam.setRealname(userDto.getRealname());
		userParam.setSex(userDto.getSex());
		userParam.setRole(userDto.getRole());
		
		try {
			s = userMapper.insertUser(userParam);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			s = -1;
		}
		return s;
	}

	@Override
	public TestUserResult getCurrentLoginUser() {
		// TODO Auto-generated method stub
		Authentication authentication = SecurityContextHolder.getContext()
				.getAuthentication();
		if (authentication.getPrincipal() instanceof UserDetails) {
			UserDetails userDetails = (UserDetails) authentication
					.getPrincipal();
		
		    UserParam param = new UserParam();
		    param.setUsername(userDetails.getUsername());
		    TestUserResult testUserResult = null;
	        List<TestUserResult> list = userMapper.getUsers(param);
	        if(list==null||list.size()==0)
	        {
	        	
	        }
	        else
	        {
	        	testUserResult = list.get(0);
	        }
			return testUserResult;
		
		}
		return null;
	}

	
}
