package com.roms.authentication.controller;

import com.roms.authentication.exception.TokenInvalidException;
import com.roms.authentication.payload.AuthResponse;
import com.roms.authentication.payload.LoginRequest;
import com.roms.authentication.security.JwtHandler;
import lombok.extern.slf4j.Slf4j;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

@RestController
@Slf4j
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthController {

	@Autowired
	private AuthenticationManager authManager;
	@Autowired
    private JwtHandler jwtHandler;


    @PostMapping("/login")
    public ResponseEntity<AuthResponse> authenticateUser(@RequestBody LoginRequest loginRequest) {

        Authentication authentication = authManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword())
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        AuthResponse authResponse = jwtHandler.generateJwtToken(authentication);
        return new ResponseEntity<>(authResponse, HttpStatus.OK);
    }

    @GetMapping("/validate")
    public boolean validateAndReturnUser(@RequestHeader("Authorization") String token) throws TokenInvalidException {
        return jwtHandler.validateJwtToken(parseToken(token));
    }
    private String parseToken(String token) {
        if (StringUtils.hasText(token) && token.startsWith("Bearer ")) {
            return token.substring(7);
        }
        return token;
    }

}
