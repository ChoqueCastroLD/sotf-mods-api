# UpdatesChecker contract checker (WP-24): the UpdatesChecker DTO + Newtonsoft.Json on .NET 10.
#   docker build -t sotfv2-legacy-contract-dotnet:local tooling/legacy-contract/dotnet
#   docker run --rm --network none -v "$PWD/fixtures:/data:ro" sotfv2-legacy-contract-dotnet:local /data
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src
COPY UpdatesCheckerContract.csproj ./
RUN dotnet restore UpdatesCheckerContract.csproj
COPY Dto.cs Program.cs ./
RUN dotnet publish UpdatesCheckerContract.csproj --configuration Release --no-restore --output /app

FROM mcr.microsoft.com/dotnet/sdk:10.0
WORKDIR /app
COPY --from=build /app ./
ENV DOTNET_CLI_TELEMETRY_OPTOUT=1 DOTNET_NOLOGO=1
ENTRYPOINT ["dotnet", "/app/UpdatesCheckerContract.dll"]
