package com.whu.p290.dao;

import java.util.ArrayList;

import com.whu.p290.model.IrrBRStadia;
import com.whu.p290.model.IrrBTCanalDetail;

public interface IrrBRStadiaMapper {
    int deleteByPrimaryKey(String stadiacode);

    int insert(IrrBRStadia record);

    int insertSelective(IrrBRStadia record);

    IrrBRStadia selectByPrimaryKey(String stadiacode);

    int updateByPrimaryKeySelective(IrrBRStadia record);

    int updateByPrimaryKey(IrrBRStadia record);
    
    ArrayList<IrrBRStadia> getListByIrrBTCanalDetail(IrrBTCanalDetail irrBTCanalDetail);
    
    IrrBRStadia getByIrrBTCanalDetail(IrrBTCanalDetail irrBTCanalDetail);
}