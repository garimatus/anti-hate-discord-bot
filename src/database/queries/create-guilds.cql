CREATE TABLE IF NOT EXISTS Anti_Hate_Discord_Bot.Guilds(
    Guild_Id BIGINT PRIMARY KEY
    ,Command_Prefix VARCHAR
    ,Warnings_Allowed INT
    ,Bans BIGINT
);