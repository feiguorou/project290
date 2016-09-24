package com.whu.p290.controller;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.HashMap;
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
		System.out.println("当前用户  ：  " + testUserResult.getUsername());
		System.out.println("密码 ：" + testUserResult.getPassword());
		System.out.println("真是姓名 ：  " + testUserResult.getRealname());
		return testUserResult;
//		UserResult userResult = new UserResult();
//		System.out.println("获取当前用户");
//		userResult.setUsername("Jaco");
//		userResult.setPassword("123");
//		userResult.setEmail("jaco12138@gmail.com");
//		userResult.setLoginip("127.0.0.1");
//		userResult.setLogintime( new Timestamp(System.currentTimeMillis()) );
//		userResult.setPasswordtime( new Timestamp(System.currentTimeMillis()));
//		userResult.setRandom("random");
//		userResult.setSex(0);
//		userResult.setRealname("张家浩");
//		userResult.setRole(0);
//		userResult.setSextext("男");
//		userResult.setRoletext("管理员");
//		return userResult;
	}
	@ResponseBody
	@RequestMapping(value ="updateCurrentUserCtrl" , method= {RequestMethod.GET,RequestMethod.POST })
	public Map<String,String> updateCurrentUser()//UserDto user
	{
		Map<String,String> map = new HashMap<>();
		map.put("status", "ok");
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
	public List<SimpleUserResult> getOtherUsers()
	{
		List<SimpleUserResult> list = new ArrayList<>();
		SimpleUserResult result = null;
		 for(int i = 0; i < 10; i++)
		 {
			 result = new SimpleUserResult();
			 result.setUsername(i+"");
			 result.setPassword(i+"");
			 result.setRealname(i+""+i);
			 result.setRoletext(""+i);
			 result.setSextext(""+i);
			 list.add(result);
		 }
		return list;
	}
}
