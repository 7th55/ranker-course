import { Body, Controller, Logger, Post } from '@nestjs/common';
import { CreatePollDto, JoinPollDto } from './dtos';

@Controller('polls')
export class PollsController {
  @Post()
  async create(@Body() createPoll: CreatePollDto) {
    Logger.log('In Create!');

    return createPoll;
  }

  @Post('/join')
  async join(@Body() joinPoll: JoinPollDto) {
    Logger.log('In join!');

    return joinPoll;
  }

  @Post('/rejoin')
  async rejoin() {
    Logger.log('In rejoin!');
  }
}
