package com.whu.p290.service;

import java.util.ArrayList;

import com.whu.p290.model.IrrBRStadia;
import com.whu.p290.model.IrrBTCanalDetail;

public interface TreeInitService {

	public ArrayList<IrrBTCanalDetail> getParentCanalInfo();
	public ArrayList<IrrBTCanalDetail> getSonCanalInfo(IrrBTCanalDetail irrBTCanalDetail);
	public ArrayList<IrrBRStadia> getMultiStadiaByCanal(IrrBTCanalDetail irrBTCanalDetail);
	public IrrBRStadia getStadiaByCanal(IrrBTCanalDetail irrBTCanalDetail);
	
}
