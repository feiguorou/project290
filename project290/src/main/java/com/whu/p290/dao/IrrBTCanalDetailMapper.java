package com.whu.p290.dao;

import java.util.ArrayList;

import com.whu.p290.model.IrrBTCanalDetail;

public interface IrrBTCanalDetailMapper {
    int deleteByPrimaryKey(String canalCode);

    int insert(IrrBTCanalDetail record);

    int insertSelective(IrrBTCanalDetail record);

    IrrBTCanalDetail selectByPrimaryKey(String canalCode);

    int updateByPrimaryKeySelective(IrrBTCanalDetail record);

    int updateByPrimaryKey(IrrBTCanalDetail record);
    
    ArrayList<IrrBTCanalDetail> getParentCanal();
    
    ArrayList<IrrBTCanalDetail> getSonCanal(IrrBTCanalDetail irrBTCanalDetail);
}