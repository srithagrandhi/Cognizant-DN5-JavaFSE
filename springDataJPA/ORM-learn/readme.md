orm-learn — Spring Data JPA Quick Example
A Spring Boot project demonstrating Spring Data JPA + Hibernate with MySQL, using a Country entity as the example.

Prerequisites
MySQL Server 8.0
MySQL Workbench 8 (optional, for GUI access)
Java 8+ and Maven 3.6+
An IDE such as Eclipse or IntelliJ (import as an existing Maven project)
1. Set up the database
Open a MySQL client and run the statements in src/main/resources/schema-setup.sql:

mysql -u root -p
create schema ormlearn;
use ormlearn;
create table country(co_code varchar(2) primary key, co_name varchar(50));
insert into country values ('IN', 'India');
insert into country values ('US', 'United States of America');
2. Configure the datasource
src/main/resources/application.properties already points at:

spring.datasource.url=jdbc:mysql://localhost:3306/ormlearn
spring.datasource.username=root
spring.datasource.password=root
Update the username/password if your local MySQL differs.

3. Build the project
mvn clean package
(Drop the -Dhttp.proxyHost=... flags from the original notes unless you're actually behind that corporate proxy — most local setups won't need them.)

4. Run the application
mvn spring-boot:run
or run OrmLearnApplication.main() from your IDE.

On startup it will:

Log "Inside main" to confirm the app booted.
Fetch the CountryService bean from the Spring context.
Call testGetAllCountries(), which logs the list of countries retrieved via CountryRepository.findAll().
You should see Hibernate's generated SQL in the console (trace logging is enabled) followed by a debug log line listing both Country rows.

Project layout
src/main/java/com/cognizant/ormlearn/
├── OrmLearnApplication.java   # @SpringBootApplication entry point + demo test call
├── model/Country.java         # @Entity mapped to the `country` table
├── repository/CountryRepository.java  # extends JpaRepository<Country, String>
└── service/CountryService.java        # @Service wrapping the repository, @Transactional read
src/main/resources/
├── application.properties     # datasource + Hibernate + logging config
└── schema-setup.sql           # DDL/DML to create the schema and seed data
