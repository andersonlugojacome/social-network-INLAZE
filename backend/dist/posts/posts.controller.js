"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsController = void 0;
const common_1 = require("@nestjs/common");
const posts_service_1 = require("./posts.service");
const posts_dto_1 = require("./dto/posts.dto");
let PostsController = class PostsController {
    constructor(PostsService) {
        this.PostsService = PostsService;
    }
    createPosts(res, createPostsDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const Posts = yield this.PostsService.createPosts(createPostsDTO);
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Posts Successfully Created',
                Posts
            });
        });
    }
    getPostss(res) {
        return __awaiter(this, void 0, void 0, function* () {
            const Postss = yield this.PostsService.getPostss();
            return res.status(common_1.HttpStatus.OK).json(Postss);
        });
    }
    getPosts(res, PostsID) {
        return __awaiter(this, void 0, void 0, function* () {
            const Posts = yield this.PostsService.getPosts(PostsID);
            if (!Posts)
                throw new common_1.NotFoundException('Posts does not exist!');
            return res.status(common_1.HttpStatus.OK).json(Posts);
        });
    }
    deletePosts(res, PostsID) {
        return __awaiter(this, void 0, void 0, function* () {
            const PostsDeleted = yield this.PostsService.deletePosts(PostsID);
            if (!PostsDeleted)
                throw new common_1.NotFoundException('Posts does not exist!');
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Posts Deleted Successfully',
                PostsDeleted
            });
        });
    }
    updatePosts(res, createPostsDTO, PostsID) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedPosts = yield this.PostsService.updatePosts(PostsID, createPostsDTO);
            if (!updatedPosts)
                throw new common_1.NotFoundException('Posts does not exist!');
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Posts Updated Successfully',
                updatedPosts
            });
        });
    }
};
exports.PostsController = PostsController;
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, posts_dto_1.CreatePostsDTO]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "createPosts", null);
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "getPostss", null);
__decorate([
    (0, common_1.Get)('/:PostsID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('PostsID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "getPosts", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('PostsID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "deletePosts", null);
__decorate([
    (0, common_1.Put)('/update'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Query)('PostsID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, posts_dto_1.CreatePostsDTO, Object]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "updatePosts", null);
exports.PostsController = PostsController = __decorate([
    (0, common_1.Controller)('Posts'),
    __metadata("design:paramtypes", [posts_service_1.PostsService])
], PostsController);
//# sourceMappingURL=posts.controller.js.map