package com.whu.p290.controller;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.whu.p290.dto.UserDto;
import com.whu.p290.mapper.param.UserParam;
import com.whu.p290.mapper.result.SimpleUserResult;
import com.whu.p290.mapper.result.TestUserResult;
import com.whu.p290.mapper.result.UserResult;
import com.whu.p290.service.UserService;


@Controller
@RequestMapping("/sys")
public class SysController {
	@Resource
    private UserService userService;
		
	@ResponseBody
	@RequestMapping(value ="getCurrentUserCtrl" , method= {RequestMethod.GET,RequestMethod.POST })
	public TestUserResult getCurrentUser()
	{
		
		TestUserResult testUserResult = new TestUserResult();
		testUserResult = userService.getCurrentLoginUser();
		return testUserResult;
	}
	@ResponseBody
	@RequestMapping(value ="updateCurrentUserCtrl" , method= {RequestMethod.GET,RequestMethod.POST })
	public Map<String,String> updateCurrentUser(UserParam userParam)//UserDto user
	{
		System.out.println("************zjh**********");
		System.out.println("控制层更新用户信息 ： " + userParam.getUsername());
		Integer result = userService.updateUser(userParam);
		Map<String,String> map = new HashMap<>();
		if(result > 0)
		{
			map.put("status", "ok");
		}
		else
		{
			map.put("status", "err");
		}
		return map;
	}
	@ResponseBody
	@RequestMapping(value = "insertNewUserCtrl" , method = {RequestMethod.GET,RequestMethod.POST})
	public Map<String,String> insertNewUser(UserDto userDto)
	{
		System.out.println("*********控制层显示添加的用户信息*********");
		System.out.println(userDto.getUsername());
		System.out.println(userDto.getPassword());
		System.out.println(userDto.getRealname());
		System.out.println(userDto.getRole());
		System.out.println(userDto.getSex());
		System.out.println("************************");
		
		int isInsert = 0;
		String status = "";
		isInsert = userService.insertUser(userDto);
		System.out.println("是否添加成功的标志 ： " + isInsert);
		if(isInsert > 0)
		{
			status = "ok";
		}
		else
		{
			status = "err";
		}
		Map<String,String> map = new HashMap<>();
		map.put("status", status);
		return map;
	}
	@ResponseBody
	@RequestMapping(value = "getOtherUsersCtrl" , method = {RequestMethod.GET,RequestMethod.POST})
	public List<UserResult> getOtherUsers(String username)
	{
		List<UserResult> list = new ArrayList<>();
		list = userService.getOtherUsers(username);
		UserResult result = null;
		Iterator<UserResult> iterator = list.iterator();
		while(iterator.hasNext())
		{
			result = iterator.next();
			System.out.println("************jaco**********用户名 ：" + result.getUsername());
			
		}
		return list;
	}
	@ResponseBody
	@RequestMapping(value="deleteUsersCtrl", method={RequestMethod.GET,RequestMethod.POST})
	public Map<String,String> deleteUsers(String usernames)
	{
		int flag = userService.deleteUser(usernames);
		Map<String,String> map = new HashMap<>();
		if(flag > 0)
		{
			map.put("status", "ok");
		}
		else
		{
			map.put("status", "err");
		}
		return map;
	}
}
