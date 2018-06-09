CREATE TABLE [dbo].[ClaimStatus]
(
	  [ClaimStatusId] INT NOT NULL PRIMARY KEY,
    [Name] NVARCHAR(50) NOT NULL,
    [NormalizedName] NVARCHAR(50) NOT NULL, 
    [Description] NVARCHAR(256) NULL, 
    CONSTRAINT [UC_ClaimStatusName] UNIQUE(Name)
)

GO

CREATE INDEX [IX_ClaimStatus_NormalizedName] ON [dbo].[ApplicationRole] ([NormalizedName])
