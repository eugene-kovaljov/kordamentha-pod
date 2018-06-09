-- ClaimStatus
IF NOT EXISTS (SELECT TOP 1 1 from [dbo].[ClaimStatus])
BEGIN
	INSERT INTO [dbo].[ClaimStatus] (ClaimStatusId, Name, NormalizedName, Description) VALUES (1, 'Draft', 'Draft', 'POD Claim has been created');
	INSERT INTO [dbo].[ClaimStatus] (ClaimStatusId, Name, NormalizedName, Description) VALUES (2, 'UpdateRequired', 'Update Required', 'Reviewer asked for update(s) being made to POD by the Client');
	INSERT INTO [dbo].[ClaimStatus] (ClaimStatusId, Name, NormalizedName, Description) VALUES (3, 'Submitted', 'Submitted', 'POD Claim has been submitted');
	INSERT INTO [dbo].[ClaimStatus] (ClaimStatusId, Name, NormalizedName, Description) VALUES (4, 'UnderReview', 'Under Review', 'POD Claim is under review procedure by Reviewer Level 1 or Reviewer Level 2');
	INSERT INTO [dbo].[ClaimStatus] (ClaimStatusId, Name, NormalizedName, Description) VALUES (5, 'Reviewed', 'Reviewed', 'POD Claim has been reviewed successfully by the Reviewer Level 2');
	INSERT INTO [dbo].[ClaimStatus] (ClaimStatusId, Name, NormalizedName, Description) VALUES (6, 'Rejected', 'Rejected', 'POD Claim has been rejected by Approver');
	INSERT INTO [dbo].[ClaimStatus] (ClaimStatusId, Name, NormalizedName, Description) VALUES (7, 'PartiallyApproved', 'Partially Approved', 'POD Claim has been partially approved by Approver');
	INSERT INTO [dbo].[ClaimStatus] (ClaimStatusId, Name, NormalizedName, Description) VALUES (8, 'Approved', 'Approved', 'POD Claim has been fully approved by Approver');
END

GO

-- ApplicationRole
IF NOT EXISTS (SELECT TOP 1 1 from [dbo].[ApplicationRole])
BEGIN
	INSERT INTO [dbo].[ApplicationRole] (Id, Name, NormalizedName, Description) VALUES (1, 'Client', 'Client', 'Authorized web-site User (who has an account)');
	INSERT INTO [dbo].[ApplicationRole] (Id, Name, NormalizedName, Description) VALUES (2, 'SystemUser', 'System User', 'Authorized KordaMentha employee who has an access to the POD Claim System for viewing (who has an account)');
	INSERT INTO [dbo].[ApplicationRole] (Id, Name, NormalizedName, Description) VALUES (3, 'ReviewerLevel1', 'Reviewer Level 1', 'Authorized KordaMentha employee who creates and reviews POD Claim (who has an account)');
	INSERT INTO [dbo].[ApplicationRole] (Id, Name, NormalizedName, Description) VALUES (4, 'ReviewerLevel2', 'Reviewer Level 2', 'Authorized KordaMentha employee who reviews POD Claim (who has an account)');
	INSERT INTO [dbo].[ApplicationRole] (Id, Name, NormalizedName, Description) VALUES (5, 'Approver', 'Approver', 'Authorized KordaMentha employee who approves POD Claim (who has an account)');
	INSERT INTO [dbo].[ApplicationRole] (Id, Name, NormalizedName, Description) VALUES (6, 'SystemAdministrator', 'System Administrator', 'Person who is responsible for setting up and maintaining the POD Claim System');
END

GO