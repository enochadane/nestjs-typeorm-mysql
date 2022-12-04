import { Controller, Post, Param, ParseIntPipe, Body } from '@nestjs/common';
import { CreateUserProfileDto } from 'src/profiles/dtos/CreateUserProfile.dto';
import { ProfilesService } from 'src/profiles/services/profiles/profiles.service';

@Controller('profiles')
export class ProfilesController {
  constructor(private profileService: ProfilesService) {}

  @Post(':id')
  createUserProfile(
    @Param('id', ParseIntPipe) id: number,
    @Body() createUserProfileDto: CreateUserProfileDto,
  ) {
    return this.profileService.createUserProfile(id, createUserProfileDto);
  }
}
