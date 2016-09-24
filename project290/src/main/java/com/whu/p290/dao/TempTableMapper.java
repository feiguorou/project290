package com.whu.p290.dao;

import com.whu.p290.model.TempTable;
import com.whu.p290.model.TempTableKey;

public interface TempTableMapper {
    int deleteByPrimaryKey(TempTableKey key);

    int insert(TempTable record);

    int insertSelective(TempTable record);

    TempTable selectByPrimaryKey(TempTableKey key);

    int updateByPrimaryKeySelective(TempTable record);

    int updateByPrimaryKey(TempTable record);
}