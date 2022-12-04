import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from 'src/typeorm/entities/Profile';
import { User } from 'src/typeorm/entities/User';
import { ProfilesController } from './controllers/profiles/profiles.controller';
import { ProfilesService } from './services/profiles/profiles.service';

@Module({
  imports: [TypeOrmModule.forFeature([Profile, User])],
  controllers: [ProfilesController],
  providers: [ProfilesService],
})
export class ProfilesModule {}
