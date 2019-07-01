import {TitlePage} from './TitlePage';
import {Owner} from './Owner';
import {InventoryRegister} from './InventoryRegister';

export class ReservationNoteRequest {
  docType: string;
  titlePage: TitlePage;
  inventoryRegister: InventoryRegister;
  owners: Owner[];
}
