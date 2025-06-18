{
  pkgs,
  lib,
  config,
  inputs,
  ...
}:

{
  packages = [
    pkgs.colima
    pkgs.docker
  ];
  languages.javascript.enable = true;
  languages.javascript.pnpm.enable = true;
}
