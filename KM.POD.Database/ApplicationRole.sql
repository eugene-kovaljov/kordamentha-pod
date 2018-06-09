CREATE TABLE [dbo].[ApplicationRole]
(
	  [Id] INT NOT NULL PRIMARY KEY,
    [Name] NVARCHAR(50) NOT NULL,
    [NormalizedName] NVARCHAR(50) NOT NULL, 
    [Description] NVARCHAR(256) NULL, 
    CONSTRAINT [UC_ApplicationRoleName] UNIQUE(Name)
)

GO

CREATE INDEX [IX_ApplicationRole_NormalizedName] ON [dbo].[ApplicationRole] ([NormalizedName])
