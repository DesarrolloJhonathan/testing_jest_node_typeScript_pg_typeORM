import { env } from 'process'
import { DataSource } from 'typeorm'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
import { User } from './models/user.model'

export class AppDataSource {
    private static instanceDataSource: DataSource

    private constructor() {}

    public static getDataSource() {
        if (!this.instanceDataSource) {
            this.instanceDataSource = new DataSource({
                name: 'pruebas',
                type: 'postgres',
                host: env.DATABASE_HOST,
                port: Number(env.DATABASE_PORT),
                username: env.DATABASE_USER,
                password: env.DATABASE_PASSWORD,
                ssl: env.DATABASE_SSL == 'true' ? true : false,
                database: env.DATABASE_NAME,
                synchronize: true,
                logging: false,
                entities: [User,],
                namingStrategy: new SnakeNamingStrategy(),
            })
        }

        return this.instanceDataSource
    }
}
