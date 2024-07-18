
export interface AllVehicleRes {
  status: boolean;
  data: Data;
  message: Message;
}

export interface Data {
  results: Results;
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
}

export interface Results {
  active: Vehicle[];
  reserved: Vehicle[];
  inUse: Vehicle[];
  outOfService: Vehicle[];
  all: Vehicle[];
  activeCount: number;
  reservedCount: number;
  inUseCount: number;
  outOfServiceCount: number;
  allCount: number;
}

export interface Active {
  _id: string;
  iot_number: string;
  manufacturer: Manufacturer;
  signal: number;
  unlocked: boolean;
  current_speed: number;
  speed_limit: number;
  error_code: ErrorCode;
  vehicleId: string;
  reserved: boolean;
  msg_serial_no: number;
  msg_protocol: number;
  imei: string;
  imsi: Imsi;
  battery_level: number;
  total_riding_time: number;
  total_riding_mileage: number;
  single_riding_time: number;
  single_riding_mileage: number;
  vehicle_posture: VehiclePosture;
  battery_voltage: number;
  vehicle_vibration: number;
  location: Location;
  vehicle_parameter: ActiveVehicleParameter;
  last_seen: Date;
  type: Type;
  iot_tag: string;
}

export enum ErrorCode {
  Empty = "",
  NoFault = "no fault",
  VibrationAlarm = "Vibration alarm",
}

export enum Imsi {
  Empty = "",
  Om = "OM",
  The460085639508901 = "460085639508901",
  The460086886105697 = "460086886105697",
}

export interface Location {
  latitude: number;
  longitude: number;
  business_type?: VehiclePosture;
  location_type?: LocationType;
  position?: Position;
  lat_hemisphere?: LatHemisphere;
  long_hemisphere?: LongHemisphere;
  hdop?: number;
  altitude?: number;
  height?: Height;
  mode?: LocationMode;
  azimuth?: number;
  gps_velocity?: string;
  signal?: Signal;
}

export enum VehiclePosture {
  Empty = "",
  FallDown = "fall down",
  Normal = "normal",
}

export enum Height {
  M = "M",
}

export enum LatHemisphere {
  N = "N",
}

export enum LocationType {
  Gps = "GPS",
}

export enum LongHemisphere {
  E = "E",
}

export enum LocationMode {
  AutonomousPositioning = "autonomous positioning",
}

export enum Position {
  Obtain = "obtain",
}

export interface Signal {
  gps_state: string;
  satellite_number: number;
  battery_capacity: number;
  gsm_signal: number;
}

export enum Manufacturer {
  Feigu = "FEIGU",
  Siltech = "SILTECH",
  Tbit = "TBIT",
}

export enum Type {
  EScooter = "E-Scooter",
  Empty = "",
}

export interface ActiveVehicleParameter {
  power?: number;
  vendor?: Imsi;
  mode?: VehicleParameterMode;
  charging?: boolean;
  battery1?: string;
  battery2?: Battery2;
  locked?: boolean;
  key?: number;
  user_id?: string;
  status?: Message;
  cycling_time?: Date;
  code?: string;
}

export enum Battery2 {
  The0V = "0V",
}

export enum VehicleParameterMode {
  HighSpeed = "high speed",
}

export enum Message {
  KeyErrorFailure = "key error / failure",
  ReturnAVehicle = "Return a vehicle",
  Success = "success",
}

export interface Vehicle {
  _id: string;
  iot_number: string;
  signal: number;
  unlocked: boolean;
  current_speed: number;
  speed_limit: number;
  error_code: ErrorCode;
  imei: string;
  battery_level: number;
  total_riding_time: number;
  total_riding_mileage: number;
  single_riding_time: number;
  single_riding_mileage: number;
  vehicle_posture: VehiclePosture;
  battery_voltage: number;
  vehicle_vibration: number;
  location: Location | null;
  vehicle_parameter: AllVehicleParameter | null;
  last_seen: Date;
  manufacturer?: Manufacturer;
  vehicleId?: string;
  reserved?: boolean;
  msg_serial_no?: number;
  msg_protocol?: number;
  imsi?: Imsi;
  type?: Type;
  iot_tag?: string;
}

export interface AllVehicleParameter {
  status?: Message;
  vehicle_borrow?: Message;
  vehicle_motion?: string;
  vehicle_motor?: string;
  vehicle_acc?: string;
  vehicle_state?: string;
  vehicle_bluetooth?: string;
  battery_lock?: string;
  ridding_status?: string;
  power_supply?: string;
  throttle_handle?: string;
  rear_wheel?: string;
  remaining_capacity?: string;
  relative_soc?: string;
  mcc?: number;
  mnc?: number;
  lac?: number;
  cell_id?: number;
  soc?: number;
  soh?: number;
  no_of_charge_discharge?: number;
  riding_current?: number;
  controller_temperature?: number;
  power?: number;
  vendor?: Imsi;
  user_id?: string;
  cycling_time?: Date;
  mode?: VehicleParameterMode;
  charging?: boolean;
  battery1?: string;
  battery2?: Battery2;
  locked?: boolean;
  code?: string;
  key?: number;
}

export interface MaintenanceLogData {
  vehicleManufacturer: string,
  vehicleArrivalDate: string,
  vehicleSerialNumber: string,
  vehicleShippingNumber: string,
  vehicleDimension: string,
  vehicleWeight: number,
  vehicleModel: string,
  throttleManufacturer: string,
  throttleSerialNumber: string,
  tyreMaufacturer: string,
  tyreSerialNumber: string,
  tyreTypeSize: string,
  tyreWeight: number,
  gsmNumber: number,
  simBrand: string,
  imeaNumber: string,
  year: number,
  licensePlate: string,
  iotTag: string,
  iotNumber: string,
  qrCode: string,
  ecuManufacturer: string,
  ecuSerialNumber: string,
  ecuDimension: string,
  motorMaufacturer: string,
  motorTorgue: string,
  motorOperatingVoltage: string,
  motorOperatingCurrent: string,
  motorPower: string,
  motorDimensions: string,
  batteryManufacturer: string,
  batterySerialNumber: string,
  batteryCurrent: string,
  batteryVoltage: string,
  batteryCapacity: string,
  batteryWeight: number,
  batteryConectorType: string,
  Dimensions: string
}

export interface IVehiclePartRes {
  data: VehiclePart[],
  message: string,
  status: boolean
}

export interface VehiclePart {
  vehicleId: string;
  part: string;
  company: string;
  cost: number;
  date: string;
  replacedBy: string;
  createdAt: string;
}

export interface VehiclePartQueryParams {
  includeZeroFare?: boolean;
  latest?: boolean;
  vehicleId?: string;
  part?: string;
}


export interface IIOTResponse {
  status: boolean;
  data: {
    iotTag: string;
  };
  message: string;
}

export interface IOTQueryParams {
  vehicleType?: string;
}

export interface ICreateVehicleRes {
  status: boolean;
  data: VehicleData;
  message: string;
}

export interface VehicleData {
  id?:string;
  type: string;
  licensePlate: string;
  iotTag: string;
  qrCode?: string;
}

export interface DatabaseVehicleData {
  id:string;
  vehicleManufacturer?: string;
  vehicleArrivalDate?: string;
  vehicleSerialNumber?: string;
  vehicleShippingNumber?: string;
  vehicleDimension?: string;
  vehicleWeight?: number;
  vehicleModel?: string;
  throttleManufacturer?: string;
  throttleSerialNumber?: string;
  tyreMaufacturer?: string;
  tyreSerialNumber?: string;
  tyreTypeSize?:string;
  tyreWeight?: number;
  gsmNumber?: number;
  simBrand?: string;
  imeaNumber?:string;
  year?: number;
  ecuManufacturer?: string;
  ecuSerialNumber?: string;
  ecuDimension?: string;
  motorMaufacturer?: string;
  motorTorgue?: string;
  motorOperatingVoltage?: string;
  motorOperatingCurrent?: string;
  motorPower?: string;
  motorDimensions?: string;
  batteryManufacturer?: string;
  batterySerialNumber?: string;
  batteryCurrent?: string;
  batteryVoltage?: string;
  batteryCapacity?: string;
  batteryWeight?: number;
  batteryConectorType?: string;
  Dimensions?: string;
}