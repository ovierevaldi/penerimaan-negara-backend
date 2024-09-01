import { User } from "./user";
import { Pemasukan } from "src/typeorm/pajak.entity";
import { ListWilayah } from "./wilayah.entity";

const entities = [User, Pemasukan, ListWilayah];

export { User, Pemasukan, ListWilayah };

export default entities