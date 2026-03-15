{
  description = "Development shell for the Design Delight docs app";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-24.11";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;
        };
      in
      {
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            nodejs_22
            bun
            git
            python3
            pkg-config
            gcc
          ];

          shellHook = ''
            echo "Design Delight dev shell"
            echo "Run: npm install && npm run dev"
          '';
        };
      }
    );
}
