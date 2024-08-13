package crud.crud.repository;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import crud.crud.model.user;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface userRepository extends JpaRepository<user,Long> {
    @Modifying
    @Transactional
    @Query(value = "ALTER TABLE register AUTO_INCREMENT = 1", nativeQuery = true)
    void resetAutoIncrement();
}
