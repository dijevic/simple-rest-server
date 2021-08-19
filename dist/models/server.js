"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var routes_1 = __importDefault(require("../routes/routes"));
var conection_1 = __importDefault(require("../db/conection"));
var Server = /** @class */ (function () {
    function Server() {
        this.apiPaths = {
            usuarios: '/api/usuarios'
        };
        this.app = express_1.default();
        this.port = process.env.PORT || '8000';
        this.conectionDB();
        this.middlewares();
        this.routes();
    }
    Server.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log("servidor corriendo en el puerto  " + _this.port);
        });
    };
    // conectar base de datos
    Server.prototype.middlewares = function () {
        // cors
        this.app.use(cors_1.default());
        // parseo del body
        this.app.use(express_1.default.json());
        // public
        this.app.use(express_1.default.static('public'));
    };
    Server.prototype.routes = function () {
        this.app.use(this.apiPaths.usuarios, routes_1.default);
    };
    Server.prototype.conectionDB = function () {
        try {
            conection_1.default.authenticate();
            console.log('db online');
        }
        catch (e) {
            throw new Error(e);
        }
    };
    return Server;
}());
exports.default = Server;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbW9kZWxzL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG9EQUE2QztBQUM3Qyw4Q0FBd0I7QUFDeEIsNERBQThDO0FBQzlDLDhEQUFpQztBQUlqQztJQVdJO1FBSlEsYUFBUSxHQUFHO1lBQ2YsUUFBUSxFQUFHLGVBQWU7U0FDN0IsQ0FBQTtRQUdHLElBQUksQ0FBQyxHQUFHLEdBQUcsaUJBQU8sRUFBRSxDQUFBO1FBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFBO1FBQ3RDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUNsQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDbEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO0lBQ2pCLENBQUM7SUFFRCx1QkFBTSxHQUFOO1FBQUEsaUJBSUM7UUFIRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFHO1lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0NBQW9DLEtBQUksQ0FBQyxJQUFNLENBQUMsQ0FBQTtRQUNoRSxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCx5QkFBeUI7SUFFekIsNEJBQVcsR0FBWDtRQUNJLE9BQU87UUFDUCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFJLEVBQUUsQ0FBQyxDQUFBO1FBRXBCLGtCQUFrQjtRQUVsQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7UUFFNUIsU0FBUztRQUNULElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7SUFFMUMsQ0FBQztJQUdELHVCQUFNLEdBQU47UUFFSSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRyxnQkFBYyxDQUFFLENBQUE7SUFFMUQsQ0FBQztJQUVELDRCQUFXLEdBQVg7UUFHSSxJQUFHO1lBRUMsbUJBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQTtZQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1NBRTNCO1FBQUEsT0FBTSxDQUFDLEVBQUM7WUFDTCxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO1NBQ3JCO0lBQ0wsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQUFDLEFBM0RELElBMkRDO0FBR0Qsa0JBQWdCLE1BQU0sQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzICwge0FwcGxpY2F0aW9ufSBmcm9tICdleHByZXNzJ1xyXG5pbXBvcnQgY29ycyBmcm9tICdjb3JzJztcclxuaW1wb3J0IHVzdWFyaW9zUm91dGVyIGZyb20gJy4uL3JvdXRlcy9yb3V0ZXMnO1xyXG5pbXBvcnQgZGIgZnJvbSAnLi4vZGIvY29uZWN0aW9uJztcclxuXHJcblxyXG5cclxuY2xhc3MgU2VydmVyIHtcclxuXHJcbi8vICBjbGFzZSBwcml2YWRhIFxyXG4vLyBsdWVnbyBkZSBsb3MgZG9zIHB1bnRvcywgZGVzY3JpYm8gZWwgdGlwby5cclxuLy8gZGVjbGFybyBzaWVtcHJlIGFudGVzIHkgbHVlZ28gZW4gZWwgY29uc3RydWN0b3JcclxuICAgIHByaXZhdGUgYXBwIDogQXBwbGljYXRpb247XHJcbiAgICBwcml2YXRlIHBvcnQgOiBzdHJpbmcgXHJcbiAgICBwcml2YXRlIGFwaVBhdGhzID0ge1xyXG4gICAgICAgIHVzdWFyaW9zIDogJy9hcGkvdXN1YXJpb3MnXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmFwcCA9IGV4cHJlc3MoKVxyXG4gICAgICAgIHRoaXMucG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgJzgwMDAnXHJcbiAgICAgICAgdGhpcy5jb25lY3Rpb25EQigpXHJcbiAgICAgICAgdGhpcy5taWRkbGV3YXJlcygpXHJcbiAgICAgICAgdGhpcy5yb3V0ZXMoKVxyXG4gICAgfVxyXG5cclxuICAgIGxpc3Rlbigpe1xyXG4gICAgICAgIHRoaXMuYXBwLmxpc3Rlbih0aGlzLnBvcnQgLCAoKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgc2Vydmlkb3IgY29ycmllbmRvIGVuIGVsIHB1ZXJ0byAgJHt0aGlzLnBvcnR9YClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbmVjdGFyIGJhc2UgZGUgZGF0b3NcclxuXHJcbiAgICBtaWRkbGV3YXJlcygpe1xyXG4gICAgICAgIC8vIGNvcnNcclxuICAgICAgICB0aGlzLmFwcC51c2UoY29ycygpKVxyXG5cclxuICAgICAgICAvLyBwYXJzZW8gZGVsIGJvZHlcclxuXHJcbiAgICAgICAgdGhpcy5hcHAudXNlKGV4cHJlc3MuanNvbigpKVxyXG5cclxuICAgICAgICAvLyBwdWJsaWNcclxuICAgICAgICB0aGlzLmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycpKVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcm91dGVzKCl7XHJcblxyXG4gICAgICAgIHRoaXMuYXBwLnVzZSh0aGlzLmFwaVBhdGhzLnVzdWFyaW9zICwgdXN1YXJpb3NSb3V0ZXIgKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25lY3Rpb25EQigpe1xyXG5cclxuXHJcbiAgICAgICAgdHJ5e1xyXG5cclxuICAgICAgICAgICAgZGIuYXV0aGVudGljYXRlKClcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RiIG9ubGluZScpXHJcblxyXG4gICAgICAgIH1jYXRjaChlKXtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgIFNlcnZlciJdfQ==