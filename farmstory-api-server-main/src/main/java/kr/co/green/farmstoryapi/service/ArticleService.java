package kr.co.green.farmstoryapi.service;


import kr.co.green.farmstoryapi.dto.ArticleDTO;
import kr.co.green.farmstoryapi.dto.PageRequestDTO;
import kr.co.green.farmstoryapi.dto.PageResponseDTO;

import java.util.List;

public interface ArticleService {

    public int register(ArticleDTO articleDTO);

    public PageResponseDTO<ArticleDTO> list(PageRequestDTO pageRequestDTO);
    public ArticleDTO get(int no);
    public void modify(ArticleDTO articleDTO);
    public void remove(int no);

}
