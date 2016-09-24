package com.whu.p290.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("datainfo")
public class DatainfoIndexController {

	@RequestMapping(value ="indexCtrl" , method= {RequestMethod.GET,RequestMethod.POST })
	public String index()
	{
		System.out.println("**************跳转到数据录入界面");
		return "datainfo/index";
	}
}
