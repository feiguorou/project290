package com.whu.p290.dao;

import java.util.List;

import com.whu.p290.mapper.param.UserParam;
import com.whu.p290.mapper.result.SimpleUserResult;
import com.whu.p290.mapper.result.TestUserResult;

public interface UserMapper {
	List<TestUserResult> getUsers(UserParam userParam);
	Integer insertUser(UserParam userParam);
	void deleteUser(String username);
	Integer updateUser(UserParam userParam);
	List<SimpleUserResult> getOtherUsers(String username);
}
