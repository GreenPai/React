package kr.co.green.farmstoryapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<kr.co.green.farmstoryapi.entity.User, String> {


}
