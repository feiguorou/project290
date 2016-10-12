package com.whu.p290.dao;

import java.util.ArrayList;
import java.util.List;

import com.whu.p290.mapper.param.UserParam;
import com.whu.p290.mapper.result.TestUserResult;
import com.whu.p290.mapper.result.UserResult;

public interface UserMapper {
	List<TestUserResult> getUsers(UserParam userParam);
	Integer insertUser(UserParam userParam);
	Integer deleteUser(String username);
	Integer updateUser(UserParam userParam);
	ArrayList<UserResult> getOtherUsers(String username);
}
