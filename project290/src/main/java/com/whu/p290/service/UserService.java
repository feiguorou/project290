package com.whu.p290.service;

import com.whu.p290.mapper.param.UserParam;
import com.whu.p290.mapper.result.TestUserResult;
import com.whu.p290.dto.UserDto;

public interface UserService {
	TestUserResult getCurrentLoginUser();
	Integer insertUser(UserDto userDto);
	Integer updateUser(UserParam userParam);
	
}
