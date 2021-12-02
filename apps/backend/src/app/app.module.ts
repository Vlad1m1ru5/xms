import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '@xms/backend-auth';
import { MarkdownModule } from '@xms/backend-markdown';
import { RoleModule } from '@xms/backend-role';
import { UserModule } from '@xms/backend-user';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://admin:adminp@content.vy86z.mongodb.net/test?retryWrites=true&w=majority',
      useNewUrlParser: true,
      synchronize: true,
      logging: false,
      autoLoadEntities: true,
    }),
    AuthModule,
    MarkdownModule,
    RoleModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
