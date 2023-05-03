import {Model, Column, Table, HasMany, ForeignKey, BelongsTo, CreatedAt, UpdatedAt} from 'sequelize-typescript';
import {User} from "./User"

@Table
export class Team extends Model<Team> {
  @Column
  name!: string;

}
