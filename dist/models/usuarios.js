"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var conection_1 = __importDefault(require("../db/conection"));
var Usuario = conection_1.default.define('Usuario', {
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    // createdAt : {
    //     type : DataTypes.STRING
    // },
    // updatedAt : {
    //     type : DataTypes.STRING
    // }
});
exports.default = Usuario;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXN1YXJpb3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2RlbHMvdXN1YXJpb3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx1Q0FBc0M7QUFDdEMsOERBQWlDO0FBR2pDLElBQU0sT0FBTyxHQUFHLG1CQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBQztJQUNoQyxNQUFNLEVBQUc7UUFDTCxJQUFJLEVBQUUscUJBQVMsQ0FBQyxNQUFNO0tBQ3pCO0lBQ0QsS0FBSyxFQUFHO1FBQ0osSUFBSSxFQUFFLHFCQUFTLENBQUMsTUFBTTtLQUN6QjtJQUNELE1BQU0sRUFBRztRQUNMLElBQUksRUFBRSxxQkFBUyxDQUFDLE9BQU87S0FDMUI7SUFDRCxnQkFBZ0I7SUFDaEIsOEJBQThCO0lBQzlCLEtBQUs7SUFDTCxnQkFBZ0I7SUFDaEIsOEJBQThCO0lBQzlCLElBQUk7Q0FFUCxDQUFDLENBQUE7QUFFRixrQkFBZSxPQUFPLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhVHlwZXMgfSBmcm9tIFwic2VxdWVsaXplXCI7XHJcbmltcG9ydCBkYiBmcm9tIFwiLi4vZGIvY29uZWN0aW9uXCI7XHJcblxyXG5cclxuY29uc3QgVXN1YXJpbyA9IGRiLmRlZmluZSgnVXN1YXJpbycse1xyXG4gICAgbm9tYnJlIDoge1xyXG4gICAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkdcclxuICAgIH0sXHJcbiAgICBlbWFpbCA6IHtcclxuICAgICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HXHJcbiAgICB9LFxyXG4gICAgZXN0YWRvIDoge1xyXG4gICAgICAgIHR5cGU6IERhdGFUeXBlcy5CT09MRUFOICwgXHJcbiAgICB9LFxyXG4gICAgLy8gY3JlYXRlZEF0IDoge1xyXG4gICAgLy8gICAgIHR5cGUgOiBEYXRhVHlwZXMuU1RSSU5HXHJcbiAgICAvLyB9LFxyXG4gICAgLy8gdXBkYXRlZEF0IDoge1xyXG4gICAgLy8gICAgIHR5cGUgOiBEYXRhVHlwZXMuU1RSSU5HXHJcbiAgICAvLyB9XHJcbiAgICBcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzdWFyaW8iXX0=