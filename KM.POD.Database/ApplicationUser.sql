CREATE TABLE [dbo].[ApplicationUser]
(
	[Id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY,
    [UserName] NVARCHAR(50) NOT NULL,
    [NormalizedUserName] NVARCHAR(50) NOT NULL,
	[LastName] NVARCHAR(50) NOT NULL DEFAULT '', 
    [Email] NVARCHAR(50) NOT NULL,
    [NormalizedEmail] NVARCHAR(50) NULL,
    [EmailConfirmed] BIT NOT NULL,
    [PasswordHash] NVARCHAR(MAX) NULL,
    [PhoneNumber] NVARCHAR(12) NOT NULL,
    [PhoneNumberConfirmed] BIT NOT NULL,
    [TwoFactorEnabled] BIT NOT NULL, 
    [IsDeleted] BIT NOT NULL, 
    [SecurityStamp] NVARCHAR(50) NULL, 
    [ConcurrencyStamp] NVARCHAR(50) NULL,
    CONSTRAINT [UC_ApplicationUserEmail] UNIQUE(Email)
)

GO

CREATE INDEX [IX_ApplicationUser_NormalizedUserName] ON [dbo].[ApplicationUser] ([NormalizedUserName])

GO

CREATE INDEX [IX_ApplicationUser_NormalizedEmail] ON [dbo].[ApplicationUser] ([NormalizedEmail])
