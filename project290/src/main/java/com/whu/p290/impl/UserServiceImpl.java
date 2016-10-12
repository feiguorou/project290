package com.whu.p290.impl;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
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
import com.whu.p290.mapper.result.SimpleUserResult;
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
		System.out.println("**********jaco:实现层*********");
		System.out.println("用户名：" + userDto.getUsername());
		System.out.println("密码：" + userDto.getPassword());
		System.out.println("真实姓名：" + userDto.getRealname());
		System.out.println("性别：" + userDto.getSex());
		System.out.println("角色：" + userDto.getRole());
		System.out.println("*****************************");
		UserParam userParam = new UserParam();
		userParam.setUsername(userDto.getUsername());
		userParam.setPassword(userDto.getPassword());
		userParam.setRealname(userDto.getRealname());
		userParam.setSex(userDto.getSex());
		userParam.setRole(userDto.getRole());
		System.out.println("***********jaco:userParam参数：");
		System.out.println("用户名：" + userParam.getUsername());
		System.out.println("密码：" + userParam.getPassword());
		System.out.println("真实姓名：" + userParam.getRealname());
		System.out.println("性别：" + userParam.getSex());
		System.out.println("角色：" + userParam.getRole());
		System.out.println("*****************************");
		
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
	        TestUserResult result = list.get(0);
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

	@Override
	public Integer updateUser(UserParam userParam) {
		// TODO Auto-generated method stub
		Integer flag = userMapper.updateUser(userParam);
		return flag;
	}

	@Override
	public ArrayList<UserResult> getOtherUsers(String username) {
		// TODO Auto-generated method stub
		ArrayList<UserResult> list = new ArrayList<>();
		list = userMapper.getOtherUsers(username);
		Iterator<UserResult> iterator = list.iterator();
		while(iterator.hasNext())
		{
			UserResult result = new UserResult();
			result = iterator.next();
			result.setSextext((result.getSex()==0)?"男" : "女");
			result.setRoletext((result.getRole()==0)?"超级管理员" : "普通管理员");
		}
		return list;
	}

	@Override
	public Integer deleteUser(String usernames) {
		// TODO Auto-generated method stub
		int flag = 1;
		String[] names = usernames.split(",");
		try 
		{
			for(String username:names)
			{
				userMapper.deleteUser(username);
			}
		} catch (Exception e) 
		{
			// TODO: handle exception
			flag = -1;
		}
		return flag;
	}

	
}
