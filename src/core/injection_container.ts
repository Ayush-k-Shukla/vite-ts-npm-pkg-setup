import { Container } from 'inversify';
import 'reflect-metadata';
import { UserDatasourceImpl } from '../data/datasource/remote/user.datasource.impl';
import { UserRepositoryImpl } from '../data/repository_impl/user.repo_impl';

const di = new Container();

di.bind(UserDatasourceImpl).toSelf().inSingletonScope();
di.bind(UserRepositoryImpl).toSelf().inSingletonScope();

export { di };
