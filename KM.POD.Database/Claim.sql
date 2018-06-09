CREATE TABLE [dbo].[Claim]
(
	[ClaimId] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY,
    [Title] NVARCHAR(50) NOT NULL,
    [Description] NVARCHAR(256) NULL,
	[Version] FLOAT NOT NULL, 
    [IsDeleted] BIT NOT NULL, 
    [Status] INT NOT NULL, 
	[Created] DATETIME NOT NULL, 
    [CreatedBy] UNIQUEIDENTIFIER NOT NULL,     
    [Updated] DATETIME NULL, 
    [UpdatedBy] UNIQUEIDENTIFIER NULL, 
	[NextSystemUser] UNIQUEIDENTIFIER NULL, 
    CONSTRAINT [FK_Claim_ClaimStatus] FOREIGN KEY ([Status]) REFERENCES [ClaimStatus]([ClaimStatusId]), 
    CONSTRAINT [FK_Claim_ApplicationUser_CreatedBy] FOREIGN KEY ([CreatedBy]) REFERENCES [ApplicationUser]([Id]),
	CONSTRAINT [FK_Claim_ApplicationUser_NextSystemUser] FOREIGN KEY ([NextSystemUser]) REFERENCES [ApplicationUser]([Id])
)
