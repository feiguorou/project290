package com.whu.p290.impl;

import java.util.ArrayList;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.whu.p290.dao.IrrBRStadiaMapper;
import com.whu.p290.dao.IrrBTCanalDetailMapper;
import com.whu.p290.model.IrrBRStadia;
import com.whu.p290.model.IrrBTCanalDetail;
import com.whu.p290.service.TreeInitService;

@Service("treeInitService")
public class TreeInitServiceImpl implements TreeInitService{

	@Resource
	private IrrBTCanalDetailMapper irrBTCanalDetailMapper;
	@Resource
	private IrrBRStadiaMapper irrBRStadiaMapper;
	
	@Override
	public ArrayList<IrrBTCanalDetail> getParentCanalInfo() {
		// TODO Auto-generated method stub		
		return irrBTCanalDetailMapper.getParentCanal();
	}

	@Override
	public ArrayList<IrrBTCanalDetail> getSonCanalInfo(
			IrrBTCanalDetail irrBTCanalDetail) {
		// TODO Auto-generated method stub
		return irrBTCanalDetailMapper.getSonCanal(irrBTCanalDetail);
	}

	@Override
	public ArrayList<IrrBRStadia> getMultiStadiaByCanal(
			IrrBTCanalDetail irrBTCanalDetail) {
		// TODO Auto-generated method stub
		return irrBRStadiaMapper.getListByIrrBTCanalDetail(irrBTCanalDetail);
	}

	@Override
	public IrrBRStadia getStadiaByCanal(IrrBTCanalDetail irrBTCanalDetail) {
		// TODO Auto-generated method stub
		return irrBRStadiaMapper.getByIrrBTCanalDetail(irrBTCanalDetail);
	}

}
