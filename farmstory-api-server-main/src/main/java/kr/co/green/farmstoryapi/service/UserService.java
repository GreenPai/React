package kr.co.green.farmstoryapi.service;

import kr.co.green.farmstoryapi.dto.TermsDTO;
import kr.co.green.farmstoryapi.dto.UserDTO;

public interface UserService {

    public String register(UserDTO userDTO);

    public TermsDTO terms();
}
