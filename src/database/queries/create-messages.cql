CREATE TABLE IF NOT EXISTS Anti_Hate_Discord_Bot.Messages(
    Message_Id BIGINT PRIMARY KEY
    ,Content TEXT
    ,Date TIMESTAMP
    ,Guild_Id BIGINT
    ,User_Id BIGINT
);