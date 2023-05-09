import { configure } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import mockFetch from "jest-fetch-mock";

mockFetch.enableMocks();

configure({ adapter: new Adapter() });
