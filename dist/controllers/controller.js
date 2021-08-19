"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
var usuarios_1 = __importDefault(require("../models/usuarios"));
var getUsuarios = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var usuario;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, usuarios_1.default.findAll()];
            case 1:
                usuario = _a.sent();
                res.json({ success: true, message: usuario });
                return [2 /*return*/];
        }
    });
}); };
exports.getUsuarios = getUsuarios;
var getUsuario = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, usuario;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, usuarios_1.default.findByPk(id)];
            case 1:
                usuario = _a.sent();
                if (!usuario) {
                    return [2 /*return*/, res.status(404).json({ success: false, message: "no existe un usuario con el id " + id })];
                }
                res.json({ success: true, usuario: usuario });
                return [2 /*return*/];
        }
    });
}); };
exports.getUsuario = getUsuario;
var postUsuario = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var body, existeEmail, usuario, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                body = req.body;
                if (!body) {
                    return [2 /*return*/, res.status(400).json({ success: false, message: "body nullss" })];
                }
                return [4 /*yield*/, usuarios_1.default.findOne({
                        where: { email: body.email }
                    })];
            case 1:
                existeEmail = _a.sent();
                if (existeEmail) {
                    return [2 /*return*/, res.status(404).json({ success: false, message: "correo registrado, intente con otro" })];
                }
                _a.label = 2;
            case 2:
                _a.trys.push([2, 4, , 5]);
                usuario = usuarios_1.default.build(body);
                return [4 /*yield*/, usuario.save()];
            case 3:
                _a.sent();
                res.json({ success: true, usuario: usuario });
                return [3 /*break*/, 5];
            case 4:
                e_1 = _a.sent();
                res.status(500).json({ success: false, message: "hable con el administrador" });
                console.log(e_1);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.postUsuario = postUsuario;
var putUsuario = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, body, usuario, existeEmail, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                body = req.body;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 5, , 6]);
                return [4 /*yield*/, usuarios_1.default.findByPk(id)];
            case 2:
                usuario = _a.sent();
                if (!usuario) {
                    return [2 /*return*/, res.status(404).json({ success: false, message: "el usuario con el id " + id + " no existe" })];
                }
                return [4 /*yield*/, usuarios_1.default.findOne({
                        where: { email: body.email }
                    })];
            case 3:
                existeEmail = _a.sent();
                if (existeEmail) {
                    return [2 /*return*/, res.status(404).json({ success: false, message: "correo registrado, intente con otro" })];
                }
                return [4 /*yield*/, usuario.update(body)];
            case 4:
                _a.sent();
                res.json({ success: true, usuario: usuario });
                return [3 /*break*/, 6];
            case 5:
                e_2 = _a.sent();
                res.status(500).json({ success: false, message: "hable con el administrador" });
                console.log(e_2);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.putUsuario = putUsuario;
var deleteUsuario = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, usuario, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, usuarios_1.default.findByPk(id)];
            case 1:
                usuario = _a.sent();
                if (!usuario) {
                    return [2 /*return*/, res.status(404).json({ success: false, message: "el usuario con el id " + id + " no existe" })];
                }
                // eliminar de manera fisica
                // usuario.destroy()/
                usuario.update({ estado: false });
                res.json({ success: true, usuario: usuario });
                return [3 /*break*/, 3];
            case 2:
                e_3 = _a.sent();
                res.status(500).json({ success: false, message: "hable con el administrador" });
                console.log(e_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbnRyb2xsZXJzL2NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsZ0VBQXlDO0FBS2xDLElBQU0sV0FBVyxHQUFHLFVBQU0sR0FBWSxFQUFHLEdBQWM7Ozs7b0JBRTlDLHFCQUFNLGtCQUFPLENBQUMsT0FBTyxFQUFFLEVBQUE7O2dCQUFqQyxPQUFPLEdBQUcsU0FBdUI7Z0JBQ25DLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUcsSUFBSSxFQUFHLE9BQU8sRUFBRyxPQUFPLEVBQUMsQ0FBQyxDQUFBOzs7O0tBQ2pELENBQUE7QUFKWSxRQUFBLFdBQVcsZUFJdkI7QUFFTSxJQUFNLFVBQVUsR0FBRyxVQUFRLEdBQVksRUFBRyxHQUFjOzs7OztnQkFFcEQsRUFBRSxHQUFLLEdBQUcsQ0FBQyxNQUFNLEdBQWYsQ0FBZ0I7Z0JBQ1QscUJBQU0sa0JBQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUE7O2dCQUFwQyxPQUFPLEdBQUcsU0FBMEI7Z0JBRTFDLElBQUcsQ0FBQyxPQUFPLEVBQUM7b0JBQ1Isc0JBQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUcsS0FBSyxFQUFFLE9BQU8sRUFBQyxvQ0FBa0MsRUFBSSxFQUFDLENBQUMsRUFBQztpQkFDbEc7Z0JBRUQsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBRyxJQUFJLEVBQUcsT0FBTyxTQUFBLEVBQUMsQ0FBQyxDQUFBOzs7O0tBQ3ZDLENBQUE7QUFWWSxRQUFBLFVBQVUsY0FVdEI7QUFFTSxJQUFNLFdBQVcsR0FBRyxVQUFPLEdBQVksRUFBRyxHQUFjOzs7OztnQkFFcEQsSUFBSSxHQUFLLEdBQUcsS0FBUixDQUFTO2dC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RUFBRSxHQUFLLEdBQUcsQ0FBQyxNQUFNLEdBQWYsQ0FBZ0I7Z0JBRVQscUJBQU0sa0JBQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUE7O2dCQUFwQyxPQUFPLEdBQUcsU0FBMEI7Z0JBRTFDLElBQUcsQ0FBQyxPQUFPLEVBQUM7b0JBQ1Isc0JBQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUcsS0FBSyxFQUFFLE9BQU8sRUFBQywwQkFBd0IsRUFBRSxlQUFZLEVBQUMsQ0FBQyxFQUFBO2lCQUVqRztnQkFFRCw0QkFBNEI7Z0JBQzVCLHFCQUFxQjtnQkFFckIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFBO2dCQUU3QixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBTyxFQUFHLElBQUksRUFBRyxPQUFPLFNBQUEsRUFBQyxDQUFDLENBQUE7Ozs7Z0JBSXJDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBRyxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsQ0FBQyxDQUFBO2dCQUM3RSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUMsQ0FBQyxDQUFBOzs7OztLQUVyQixDQUFBO0FBMUJZLFFBQUEsYUFBYSxpQkEwQnpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tIFwiZXhwcmVzc1wiO1xyXG5pbXBvcnQgVXN1YXJpbyBmcm9tIFwiLi4vbW9kZWxzL3VzdWFyaW9zXCI7XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXN1YXJpb3MgPSBhc3luYyhyZXE6IFJlcXVlc3QgLCByZXMgOiBSZXNwb25zZSk9PntcclxuXHJcbmNvbnN0IHVzdWFyaW8gPSBhd2FpdCBVc3VhcmlvLmZpbmRBbGwoKVxyXG4gICAgcmVzLmpzb24oe3N1Y2Nlc3MgOiB0cnVlICwgbWVzc2FnZSA6IHVzdWFyaW99KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXN1YXJpbyA9IGFzeW5jICAocmVxOiBSZXF1ZXN0ICwgcmVzIDogUmVzcG9uc2UpPT57XHJcblxyXG4gICAgY29uc3Qge2lkfSA9ICByZXEucGFyYW1zO1xyXG4gICAgY29uc3QgdXN1YXJpbyA9IGF3YWl0IFVzdWFyaW8uZmluZEJ5UGsoaWQpXHJcblxyXG4gICAgaWYoIXVzdWFyaW8pe1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7c3VjY2VzcyA6IGZhbHNlLCBtZXNzYWdlOmBubyBleGlzdGUgdW4gdXN1YXJpbyBjb24gZWwgaWQgJHtpZH1gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzLmpzb24oe3N1Y2Nlc3MgOiB0cnVlICwgdXN1YXJpb30pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0VXN1YXJpbyA9IGFzeW5jIChyZXE6IFJlcXVlc3QgLCByZXMgOiBSZXNwb25zZSk9PntcclxuXHJcbiAgICBjb25zdCB7Ym9keX0gPSAgcmVxO1xyXG4gICAgaWYoIWJvZHkpe1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7c3VjY2VzcyA6IGZhbHNlLCBtZXNzYWdlOmBib2R5IG51bGxzc2B9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGV4aXN0ZUVtYWlsID0gYXdhaXQgVXN1YXJpby5maW5kT25lKHtcclxuICAgICAgICB3aGVyZToge2VtYWlsOiBib2R5LmVtYWlsfVxyXG4gICAgfSlcclxuXHJcbiAgICBpZihleGlzdGVFbWFpbCl7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHtzdWNjZXNzIDogZmFsc2UsIG1lc3NhZ2U6YGNvcnJlbyByZWdpc3RyYWRvLCBpbnRlbnRlIGNvbiBvdHJvYH0pXHJcbiAgICB9XHJcblxyXG4gICAgdHJ5e1xyXG5cclxuICAgICAgICBjb25zdCB1c3VhcmlvID0gVXN1YXJpby5idWlsZChib2R5KSAgICAgXHJcbiAgICAgICAgYXdhaXQgdXN1YXJpby5zYXZlKClcclxuXHJcbiAgICAgICAgcmVzLmpzb24oe3N1Y2Nlc3MgOiB0cnVlICwgdXN1YXJpb30pXHJcbiAgICB9Y2F0Y2goZSl7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe3N1Y2Nlc3M6IGZhbHNlICwgbWVzc2FnZTpgaGFibGUgY29uIGVsIGFkbWluaXN0cmFkb3JgfSlcclxuICAgICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcHV0VXN1YXJpbyA9IGFzeW5jIChyZXE6IFJlcXVlc3QgLCByZXMgOiBSZXNwb25zZSk9PntcclxuXHJcbiAgICBjb25zdCB7aWR9ID0gIHJlcS5wYXJhbXM7XHJcbiAgICBjb25zdCB7Ym9keX0gPSAgcmVxO1xyXG5cclxuICAgIC8vIHZlcmlmaWNvIHF1ZSBubyBleGlzdGEgdW4gdXN1YXJpbyBjb24gZWwgbWlzbW8gY29ycmVvXHJcbiAgXHJcblxyXG4gICAgdHJ5e1xyXG5cclxuICAgICAgICBjb25zdCB1c3VhcmlvID0gYXdhaXQgVXN1YXJpby5maW5kQnlQayhpZCkgXHJcblxyXG4gICAgICAgIGlmKCF1c3VhcmlvKXtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oe3N1Y2Nlc3MgOiBmYWxzZSwgbWVzc2FnZTpgZWwgdXN1YXJpbyBjb24gZWwgaWQgJHtpZH0gbm8gZXhpc3RlYH0pXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBleGlzdGVFbWFpbCA9IGF3YWl0IFVzdWFyaW8uZmluZE9uZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7ZW1haWw6IGJvZHkuZW1haWx9XHJcbiAgICAgICAgfSlcclxuICAgIFxyXG4gICAgICAgIGlmKGV4aXN0ZUVtYWlsKXtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHtzdWNjZXNzIDogZmFsc2UsIG1lc3NhZ2U6YGNvcnJlbyByZWdpc3RyYWRvLCBpbnRlbnRlIGNvbiBvdHJvYH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhd2FpdCB1c3VhcmlvLnVwZGF0ZShib2R5KVxyXG4gICAgICAgIHJlcy5qc29uKHtzdWNjZXNzIDogdHJ1ZSAsIHVzdWFyaW99KVxyXG4gICAgfWNhdGNoKGUpe1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtzdWNjZXNzOiBmYWxzZSAsIG1lc3NhZ2U6YGhhYmxlIGNvbiBlbCBhZG1pbmlzdHJhZG9yYH0pXHJcbiAgICAgICAgY29uc29sZS5sb2coZSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZVVzdWFyaW8gPSBhc3luYyAocmVxOiBSZXF1ZXN0ICwgcmVzIDogUmVzcG9uc2UpPT57XHJcblxyXG4gICAgXHJcbiAgICBcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCB7aWR9ID0gIHJlcS5wYXJhbXM7XHJcblxyXG4gICAgICAgIGNvbnN0IHVzdWFyaW8gPSBhd2FpdCBVc3VhcmlvLmZpbmRCeVBrKGlkKSBcclxuXHJcbiAgICAgICAgaWYoIXVzdWFyaW8pe1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oe3N1Y2Nlc3MgOiBmYWxzZSwgbWVzc2FnZTpgZWwgdXN1YXJpbyBjb24gZWwgaWQgJHtpZH0gbm8gZXhpc3RlYH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBlbGltaW5hciBkZSBtYW5lcmEgZmlzaWNhXHJcbiAgICAgICAgLy8gdXN1YXJpby5kZXN0cm95KCkvXHJcblxyXG4gICAgICAgIHVzdWFyaW8udXBkYXRlKHtlc3RhZG86ZmFsc2V9KVxyXG5cclxuICAgICAgICAgcmVzLmpzb24oe3N1Y2Nlc3MgOiB0cnVlICwgdXN1YXJpb30pXHJcblxyXG5cclxuICAgIH1jYXRjaChlKXtcclxuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7c3VjY2VzczogZmFsc2UgLCBtZXNzYWdlOmBoYWJsZSBjb24gZWwgYWRtaW5pc3RyYWRvcmB9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICB9XHJcbn0iXX0=