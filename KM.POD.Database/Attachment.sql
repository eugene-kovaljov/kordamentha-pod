CREATE TABLE [dbo].[Attachment]
(
	[AttachmentId] UNIQUEIDENTIFIER NOT NULL ,
	[UserId] UNIQUEIDENTIFIER NOT NULL ,
	[ClaimId] UNIQUEIDENTIFIER NOT NULL ,
    [Title] NVARCHAR(100) NOT NULL,
    [Uploaded] DATETIME NOT NULL, 
    [Size] BIGINT NOT NULL, 
    [Content] VARBINARY(MAX) NOT NULL, 
    CONSTRAINT [PK_Attachment] PRIMARY KEY ([AttachmentId], [ClaimId], [UserId]), 
    CONSTRAINT [FK_Attachment_ApplicationUser] FOREIGN KEY ([UserId]) REFERENCES [ApplicationUser]([Id]),
	CONSTRAINT [FK_Attachment_Claim] FOREIGN KEY ([ClaimId]) REFERENCES [Claim]([ClaimId])
)
GO

-- TODO: Indexes
GO
