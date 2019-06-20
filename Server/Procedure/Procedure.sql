CREATE OR ALTER  PROCEDURE [dbo].[SP_GetProductById] 
	@ProductID INT
AS 
BEGIN 
SELECT  P.[ProductID]
       ,P.[Name]
	   ,S.SystemImageUrl
	   ,P.[Description]
	   ,P.[LastPrice]
	   ,P.[State]
	   ,P.[Tutorial]
	   ,P.Tax
	   ,P.SendingCost
FROM [dbo].[Product] AS P
INNER JOIN SystemImage AS S
ON (P.ProductID = S.SystemImageType)
WHERE P.[ProductID] = @ProductID
AND S.SystemImageTypeID= 1

END
GO


CREATE OR ALTER  PROCEDURE [dbo].[SP_GetProduct]  
   AS BEGIN  SELECT  P.[ProductID]
	        ,P.[Name]
	 	   ,P.[LastPrice] 	 
		   ,S.SystemImageUrl
		   FROM [dbo].[Product] AS P 
		   INNER JOIN [dbo].[SystemImage] AS S
		   ON (P.ProductID = S.SystemImageType)
		   WHERE S.SystemImageTypeID= 1;
 END
GO

CREATE OR ALTER  PROCEDURE [dbo].[SP_GetProductHomes]  
   AS BEGIN  SELECT  P.[ProductID]
	        ,P.[Name]
	 	   ,P.[LastPrice] 	 
		   ,S.SystemImageUrl
		   FROM [dbo].[Product] AS P 
		   INNER JOIN [dbo].[SystemImage] AS S
		   ON (P.ProductID = S.SystemImageType)
		   WHERE S.SystemImageTypeID= 1
		   ORDER BY  P.[ProductID] ASC     
       	OFFSET 0 ROWS FETCH NEXT 4 ROWS ONLY
 END
GO


CREATE OR ALTER  PROCEDURE [dbo].[SP_GetProducPictures]  
	@ProductID INT,
	@SystemImageTypeID INT
	AS 
	BEGIN  
	SELECT SystemImageUrl
		  ,SystemImageID
		   
	FROM [dbo].[SystemImage] AS S
	WHERE S.SystemImageTypeID= @SystemImageTypeID AND S.SystemImageType = @ProductID
 END
GO
