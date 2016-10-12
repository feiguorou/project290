package com.whu.p290.service;

import java.util.ArrayList;

import com.whu.p290.mapper.param.UserParam;
import com.whu.p290.mapper.result.TestUserResult;
import com.whu.p290.mapper.result.UserResult;
import com.whu.p290.dto.UserDto;

public interface UserService {
	TestUserResult getCurrentLoginUser();
	Integer insertUser(UserDto userDto);
	Integer updateUser(UserParam userParam);
	ArrayList<UserResult> getOtherUsers(String username);
	Integer deleteUser(String usernames);
	
}
