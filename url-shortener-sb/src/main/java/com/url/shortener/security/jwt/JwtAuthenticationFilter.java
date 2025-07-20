package com.url.shortener.security.jwt;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    @Autowired
    private JwtUtils jwtTokenProvider;

    @Autowired
    private UserDetailsService userDetailsService;

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {

            try{
                //Get JWT From Header
                String jwt = jwtTokenProvider.getJwtFromHeader(request);
                if(jwt != null && jwtTokenProvider.validateToken(jwt)){
                    String username = jwtTokenProvider.getUserNameFromJwtToken(jwt);
                    UserDetails userDetails = userDetailsService.loadUserByUsername(username);

                    if(userDetails != null){
                        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                        authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                        SecurityContextHolder.getContext().setAuthentication(authentication);
                      }
                }
                //Validate Token
                //If Valid Get User Details
                // -- get user name -> load user -> set the auth context
            }catch (Exception e){
              e.printStackTrace();
            }

            filterChain.doFilter(request, response);
    }
}


//package com.url.shortener.security.jwt;
//
//import jakarta.servlet.FilterChain;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
//import org.springframework.stereotype.Component;
//import org.springframework.web.filter.OncePerRequestFilter;
//
//import io.jsonwebtoken.ExpiredJwtException;
//
//import java.io.IOException;
//
//@Component
//public class JwtAuthenticationFilter extends OncePerRequestFilter {
//
//    @Autowired
//    private JwtUtils jwtTokenProvider;
//
//    @Autowired
//    private UserDetailsService userDetailsService;
//
//    @Override
//    protected void doFilterInternal(HttpServletRequest request,
//                                    HttpServletResponse response,
//                                    FilterChain filterChain) throws ServletException, IOException {
//        try {
//            // Get JWT from Authorization header
//            String jwt = jwtTokenProvider.getJwtFromHeader(request);
//
//            if (jwt != null && jwtTokenProvider.validateToken(jwt)) {
//                // Extract username and load user details
//                String username = jwtTokenProvider.getUserNameFromJwtToken(jwt);
//                UserDetails userDetails = userDetailsService.loadUserByUsername(username);
//
//                if (userDetails != null) {
//                    UsernamePasswordAuthenticationToken authentication =
//                            new UsernamePasswordAuthenticationToken(
//                                    userDetails, null, userDetails.getAuthorities());
//                    authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
//
//                    // Set the authentication in the security context
//                    SecurityContextHolder.getContext().setAuthentication(authentication);
//                }
//            }
//
//            // Continue filter chain
//            filterChain.doFilter(request, response);
//
//        } catch (ExpiredJwtException ex) {
//            System.out.println("JWT expired: " + ex.getMessage());
//
//            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED); // 401
//            response.setContentType("application/json");
//            response.getWriter().write("{\"error\": \"JWT Token Expired\"}");
//
//        } catch (Exception ex) {
//            ex.printStackTrace();
//
//            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR); // 500
//            response.setContentType("application/json");
//            response.getWriter().write("{\"error\": \"Authentication Failed\"}");
//        }
//    }
//}
