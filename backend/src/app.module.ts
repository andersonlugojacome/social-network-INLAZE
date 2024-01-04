import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { ProductModule } from './product/product.module';
import { UsersModule } from './users/users.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/socialNetwork', {
      //useNewUrlParser: true, // Esta opción ya no es necesaria en versiones recientes de Mongoose, pero aún puedes incluirla
     // useUnifiedTopology: true, // Otras opciones de configuración de Mongoose
      //useCreateIndex: true,
      //useFindAndModify: false,
    }),
    ProductModule,
    UsersModule,
    AuthModule,
    PostsModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
