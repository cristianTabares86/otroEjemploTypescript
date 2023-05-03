import {Model, Column, Table, DataType, ForeignKey, BelongsTo, CreatedAt, UpdatedAt, BelongsToMany, HasMany} from 'sequelize-typescript';
import {Team} from "./Team";

@Table
export class User extends Model {
 @Column
 nameUser!: string;

 @Column
 lastName!: string;

 @ForeignKey(() => Team)
 @Column
 teamId!: number;

@BelongsTo(() => Team)
team!: Team[];

//  @CreatedAt
//  @Column
//  createdAt!: Date;

//  @UpdatedAt
//  @Column
//  updatedAt!: Date;
}


