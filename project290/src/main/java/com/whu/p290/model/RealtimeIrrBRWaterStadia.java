package com.whu.p290.model;

import java.math.BigDecimal;

public class RealtimeIrrBRWaterStadia extends RealtimeIrrBRWaterStadiaKey {
    private BigDecimal heightup;

	private BigDecimal heightdown;

	private BigDecimal fluxgate;

	private BigDecimal opendegree1;

	private BigDecimal opendegree2;

	private BigDecimal opendegree3;

	private BigDecimal opendegree4;

	private BigDecimal opendegree5;

	private String gatestate;

	public BigDecimal getHeightup() {
		return heightup;
	}

	public void setHeightup(BigDecimal heightup) {
		this.heightup = heightup;
	}

	public BigDecimal getHeightdown() {
		return heightdown;
	}

	public void setHeightdown(BigDecimal heightdown) {
		this.heightdown = heightdown;
	}

	public BigDecimal getFluxgate() {
		return fluxgate;
	}

	public void setFluxgate(BigDecimal fluxgate) {
		this.fluxgate = fluxgate;
	}

	public BigDecimal getOpendegree1() {
		return opendegree1;
	}

	public void setOpendegree1(BigDecimal opendegree1) {
		this.opendegree1 = opendegree1;
	}

	public BigDecimal getOpendegree2() {
		return opendegree2;
	}

	public void setOpendegree2(BigDecimal opendegree2) {
		this.opendegree2 = opendegree2;
	}

	public BigDecimal getOpendegree3() {
		return opendegree3;
	}

	public void setOpendegree3(BigDecimal opendegree3) {
		this.opendegree3 = opendegree3;
	}

	public BigDecimal getOpendegree4() {
		return opendegree4;
	}

	public void setOpendegree4(BigDecimal opendegree4) {
		this.opendegree4 = opendegree4;
	}

	public BigDecimal getOpendegree5() {
		return opendegree5;
	}

	public void setOpendegree5(BigDecimal opendegree5) {
		this.opendegree5 = opendegree5;
	}

	public String getGatestate() {
		return gatestate;
	}

	public void setGatestate(String gatestate) {
		this.gatestate = gatestate == null ? null : gatestate.trim();
	}

	
}