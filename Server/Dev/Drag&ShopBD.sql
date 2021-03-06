USE [master]
GO
/****** Object:  Database [DragShop]    Script Date: 6/19/2019 13:27:25 ******/
CREATE DATABASE [DragShop]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'DragShop', FILENAME =N'D:\Programs Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER2017\MSSQL\DATA\DragShop.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'DragShop_log', FILENAME =N'D:\Programs Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER2017\MSSQL\DATA\DragShop_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [DragShop] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [DragShop].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [DragShop] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [DragShop] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [DragShop] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [DragShop] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [DragShop] SET ARITHABORT OFF 
GO
ALTER DATABASE [DragShop] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [DragShop] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [DragShop] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [DragShop] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [DragShop] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [DragShop] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [DragShop] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [DragShop] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [DragShop] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [DragShop] SET  DISABLE_BROKER 
GO
ALTER DATABASE [DragShop] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [DragShop] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [DragShop] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [DragShop] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [DragShop] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [DragShop] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [DragShop] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [DragShop] SET RECOVERY FULL 
GO
ALTER DATABASE [DragShop] SET  MULTI_USER 
GO
ALTER DATABASE [DragShop] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [DragShop] SET DB_CHAINING OFF 
GO
ALTER DATABASE [DragShop] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [DragShop] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [DragShop] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'DragShop', N'ON'
GO
ALTER DATABASE [DragShop] SET QUERY_STORE = OFF
GO
USE [DragShop]
GO
ALTER DATABASE SCOPED CONFIGURATION SET IDENTITY_CACHE = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET LEGACY_CARDINALITY_ESTIMATION = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET MAXDOP = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET PARAMETER_SNIFFING = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET QUERY_OPTIMIZER_HOTFIXES = PRIMARY;
GO
USE [DragShop]
GO
/****** Object:  Table [dbo].[CompanyInformation]    Script Date: 6/19/2019 13:27:26 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CompanyInformation](
	[CompanyInformarionID] [int] NOT NULL,
	[CompanyInformationDescription] [nvarchar](1000) NOT NULL,
	[TypeCompanyInformationID] [int] NOT NULL,
 CONSTRAINT [PK_CompanyInformation] PRIMARY KEY CLUSTERED 
(
	[CompanyInformarionID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[GeneralInformation]    Script Date: 6/19/2019 13:27:26 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GeneralInformation](
	[GeneralInformationID] [int] NOT NULL,
	[GeneralInformationDescription] [nvarchar](100) NULL,
	[TypeGeneralInformationID] [int] NULL,
 CONSTRAINT [PK_GeneralInformation] PRIMARY KEY CLUSTERED 
(
	[GeneralInformationID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PartyContactMechanism]    Script Date: 6/19/2019 13:27:26 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PartyContactMechanism](
	[PartyContactMechanismID] [int] NOT NULL,
	[MechanismValue] [nvarchar](50) NOT NULL,
	[StartDate] [datetime2](7) NOT NULL,
	[EndDate] [datetime2](7) NULL,
	[CoutryCode] [int] NULL,
	[AreaCode] [int] NULL,
	[ExtensionPhone] [nvarchar](10) NULL,
	[ExpiretionDate] [datetime2](7) NULL,
	[Priority] [int] NULL,
	[PartyContactMechanismTypeID] [int] NOT NULL,
 CONSTRAINT [PK_Party_Contact_Mechanism] PRIMARY KEY CLUSTERED 
(
	[PartyContactMechanismID] ASC,
	[PartyContactMechanismTypeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PartyContactMechanismType]    Script Date: 6/19/2019 13:27:26 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PartyContactMechanismType](
	[PartyContactMechanismTypeID] [int] NOT NULL,
	[PartyContactMechanismTypeValue] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_Party_Contact_Mechanism_Type] PRIMARY KEY CLUSTERED 
(
	[PartyContactMechanismTypeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Product]    Script Date: 6/19/2019 13:27:26 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Product](
	[ProductID] [int] NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Description] [nvarchar](100) NOT NULL,
	[LastPrice] [int] NOT NULL,
	[DiscontinuationDate] [datetime] NULL,
	[State] [nvarchar](50) NOT NULL,
	[Tutorial] [nvarchar](100) NULL,
	[Tax] [decimal] (3,2) NULL,
	[SendingCost] [int]  NULL

 CONSTRAINT [PK_Product] PRIMARY KEY CLUSTERED 
(
	[ProductID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SystemImage]    Script Date: 6/19/2019 13:27:26 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SystemImage](
	[SystemImageID] [int] NOT NULL,
	[SystemImageName] [nvarchar](50) NULL,
	[SystemImageUrl] [nvarchar](150) NOT NULL,
	[SystemImageTypeID] [int] NOT NULL,
	[SystemImageType] [int] NOT NULL,
 CONSTRAINT [PK_SystemImage] PRIMARY KEY CLUSTERED 
(
	[SystemImageID] ASC,
	[SystemImageTypeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SystemImageType]    Script Date: 6/19/2019 13:27:26 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SystemImageType](
	[SystemImageTypeID] [int] NOT NULL,
	[SystemImageTypeValue] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_System_Image_Type] PRIMARY KEY CLUSTERED 
(
	[SystemImageTypeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TypeCompanyInformation]    Script Date: 6/19/2019 13:27:26 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TypeCompanyInformation](
	[TypeCompanyInformationID] [int] NOT NULL,
	[TypeCompanyInformationName] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_TypeCompanyInformation] PRIMARY KEY CLUSTERED 
(
	[TypeCompanyInformationID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TypeGeneralInformation]    Script Date: 6/19/2019 13:27:26 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TypeGeneralInformation](
	[TypeGeneralInformationID] [int] NOT NULL,
	[TypeGeneralInformationName] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_TypeGeneralInformation] PRIMARY KEY CLUSTERED 
(
	[TypeGeneralInformationID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SystemImage]  WITH CHECK ADD  CONSTRAINT [FK_System_Image_System_Image_Type] FOREIGN KEY([SystemImageTypeID])
REFERENCES [dbo].[SystemImageType] ([SystemImageTypeID])
GO
ALTER TABLE [dbo].[SystemImage] CHECK CONSTRAINT [FK_System_Image_System_Image_Type]
GO
ALTER TABLE [dbo].[SystemImage]  WITH CHECK ADD  CONSTRAINT [FK_SystemImage_Product] FOREIGN KEY([SystemImageType])
REFERENCES [dbo].[Product] ([ProductID])
GO
ALTER TABLE [dbo].[SystemImage] CHECK CONSTRAINT [FK_SystemImage_Product]
GO
/****** Object:  StoredProcedure [dbo].[SP_GetProduct]    Script Date: 6/19/2019 13:27:27 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

