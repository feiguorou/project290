package com.whu.p290.controller;

import javax.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
@Controller
public class IndexController {
	@RequestMapping(value ="indexCtrl" , method= {RequestMethod.GET,RequestMethod.POST })
	public String successLogin(HttpServletRequest request)
	{
		System.out.println("controller²ã£ºindex");
		return "index";
	}
	@RequestMapping(value ="index" , method= {RequestMethod.GET,RequestMethod.POST })
	public String successlogin2()
	{
		return "index";
	}
}
