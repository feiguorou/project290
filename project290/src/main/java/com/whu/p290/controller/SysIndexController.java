package com.whu.p290.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/sys")
public class SysIndexController {
	@RequestMapping(value ="indexCtrl" , method= {RequestMethod.GET,RequestMethod.POST })
	public String index()
	{
		return "sys/index";
	}
	
	@RequestMapping(value ="userinfoCtrl" , method= {RequestMethod.GET,RequestMethod.POST })
	public String userinfo()
	{
		return "sys/userinfo";
	}
	
	@RequestMapping(value ="insertuserCtrl" , method= {RequestMethod.GET,RequestMethod.POST })
	public String insertUser()
	{
		return "sys/insertuser";
	}
	
	@RequestMapping(value ="manuserCtrl" , method= {RequestMethod.GET,RequestMethod.POST })
	public String manuser()
	{
		return "sys/manuser";
	}
}     
