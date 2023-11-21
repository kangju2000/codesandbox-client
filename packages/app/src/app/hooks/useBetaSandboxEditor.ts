import { useAppState } from 'app/overmind';
import { useGlobalPersistedState } from './usePersistedState';

export const useBetaSandboxEditor = (): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
] => {
  const { user, hasLogIn } = useAppState();

  const [betaSandboxEditor, setBetaSandboxEditor] = useGlobalPersistedState<
    boolean
  >(
    'BETA_SANDBOX_EDITOR',
    hasLogIn && user ? !USER_IDS.includes(user.id) : true
  );

  return [betaSandboxEditor, setBetaSandboxEditor];
};

// Users that rely on live share
const USER_IDS = [
  '5155d272-71f0-4348-9db0-c0a6b62ddead', // alexnm stream
  '5b4c6a66-6e01-4fca-bfb7-c6f67925d8f5', // necolineCSB stream
  '9e82a8db-2c9b-4f44-bcb2-72fd91b96255', // alexnm prod
  'a348b75a-d2ed-41f1-bbe2-d824b3221bb7', // necolineCSB
  '1f95fe1c-cf89-45bb-91b2-72ebf6d55c5d',
  'aebdef26-1f9b-4d2b-8eca-ed5d20347e7f',
  '2bb46283-8c0d-4149-aa60-c7d3e5fac552',
  '7bf6c260-61cb-4ac1-b338-b4c19ca69ae8',
  '82a0c649-44c9-4139-a98e-021cc8ecc820',
  '345fe613-d37e-42c0-88eb-dad7c7bf83ca',
  '47dcee33-3d1b-4c78-8e06-5ec7821daba2',
  '54d0a4b5-eeb1-46f4-bcb8-30a6bc0b960d',
  '3f4fda56-3b75-4e22-91cf-d676dacc388f',
  '4cea5cc6-79f6-4609-82c4-55091397a828',
  '77a20d1a-bbda-454c-98ba-e2da622e8e54',
  'e64689e7-4d97-4cb6-ab3d-3bd28cfbe9bb',
  'cd81e695-5af0-42e3-911e-4afe786529b6',
  '7ea4a8f2-fa82-4fd9-bfe1-f475ff1e9a56',
  '322e1c29-8466-4c76-8883-575b1d098c55',
  '007429ba-d9cf-4551-9b34-3ef93e7d4dd9',
  '2ece4707-df4b-460d-89c6-edd067802bad',
  'd89bb2b1-48af-405f-b545-ed0d731ef534',
  'd592aa76-20d0-43f8-a2ae-0449f6d04717',
  '11a04e1f-2ed3-4b8d-97aa-e367589c9922',
  'd6c7aad4-15c2-4a09-8323-ce6fbf535d8a',
  'e110326d-21c6-4edc-8ff9-c7763e89cf82',
  '0cece214-7b5d-47a2-8041-c130e597be19',
  '31d66872-bda9-41a0-a6b7-6e2ae5a20a9e',
  'b0932665-553d-4473-b32f-98c172b1aa89',
  '6f5c37ca-cc92-4d26-9e13-6140791122f2',
  '860ea98c-56d0-4864-b29c-69ca3202dc1a',
  '4b873c1a-07ac-4119-ba3a-281e690e74fa',
  '6fdef7c0-fd84-4e3a-8934-d6f501a31645',
  '7574aeb0-e1b6-42dd-bad1-c8456bf9bd01',
  '4639e987-1fa9-4940-8c2d-202241bbf6b2',
  '1b5f683d-3cf6-49c7-bb85-57d0fdaafea1',
  '40aec828-e376-4062-be54-e495b3ea14e5',
  '5c8b340a-fcea-4847-a116-35248eeeae5a',
  '6b4d6e69-9a00-4283-9872-f6e10b0318eb',
  '526d7b9e-53ab-4eea-a300-c7f7605b1efe',
  'a348b75a-d2ed-41f1-bbe2-d824b3221bb7',
  'ce55febd-bd51-4e87-9326-e425937c3cf7',
  'b360f4c3-c547-4032-b718-999c81e10024',
  'ce2e8294-8472-445f-987e-cdb3aa913ca6',
  '457d5641-a9c8-46ba-ba85-64168768164e',
  '5466d60c-45ee-45b2-a141-bbbcb3abcc4f',
  'fd65c5ae-166e-4344-8625-e443e88e629c',
  '965b9c8a-aca1-4c82-98c2-efd6f6989378',
  '2eda9f26-d37c-482a-ade7-a59c9a08a863',
  'ae46fd71-87ca-4a95-b493-38ffbb63eb2a',
  'a9aa2d0e-2a62-4789-9abb-f949af10e55b',
  'f0b59010-71a1-4756-b89e-6d4619c87c5e',
  'f7b7cce6-198a-4d8a-816c-7da7af362e83',
  '755c4338-2c1d-4f98-a594-4e8768bd8dbb',
  '520e9380-3b7d-41a4-9b00-34e77616ad88',
  '1f656fdf-128f-4607-8de3-1f3a2f42f77e',
  '9475c979-57a7-4fb0-b048-6ad214ed3498',
  'bb9eaf93-aab8-4ff3-9f09-816156040292',
  '1ad74f40-01c8-4b10-ba12-09d91bfad2e0',
  '75b7c70c-3433-4a00-8fb4-809fe6100f8d',
  '78326cbc-e7b1-4d41-beae-79268269fc05',
  '1ce0292b-0847-4e82-a3af-baa309ebec5e',
  '67f2c806-ea84-41ee-a36d-81241a5597c2',
  '5892e667-6665-4fa7-88da-f4b4b520a08c',
  '70e41b93-451f-45c7-9fa8-306b4ac34427',
  '2e0d9bfd-d318-4ba6-9ac6-002fd71f18cf',
  '01034039-dffa-4fdf-8a03-969b43fe4b31',
  'eef53d43-03e4-448b-b4e3-b0112d7145a4',
  '9f85f1a6-24f8-4e54-bc4b-d533f11c9042',
  '181dcd77-d71e-4ea3-926d-a90460231d51',
  '9e17867f-8e3f-4467-b312-08c265709add',
  'b1070f54-2807-47ff-abcf-bcf978b9305e',
  'f9cdfe74-0282-44d3-9d0e-c5539bf59bb4',
  'ef947fd1-6922-4512-9ae4-9392a2b5e1ef',
  '280bd711-bcb7-4d2f-8b2e-85c23cee83e4',
  'f82ef1a5-8887-418d-9485-7ffedd516aa6',
  'cb368b8c-c424-4119-94b3-60e13a078604',
  'eda82258-eb4b-4ba6-8f97-6358e2bc9408',
  '1e95ba13-9b8d-45ea-9a6c-7819ff42e54c',
  '4ff10609-4f9c-488b-ae88-3acc2229fd83',
  '182968f2-5730-4af0-ab01-772ca73ce34f',
  '6a7bf575-2d6c-4841-8ad3-1d24801979a8',
  'c541b58e-9f0a-4498-a0ce-4f9d91b8c016',
  '680b6060-f882-416b-a7bd-47b90afe0764',
  '565b6def-86e8-4659-85d2-42c1509092b9',
  'a4571804-eaeb-4f72-98d8-a7c0649dba23',
  '705f613d-4898-454b-8f62-c0db4c8bc769',
  '6767fc2c-0e21-4555-b0c3-c80783e59250',
  '57fc8958-a516-4d5f-8f83-ed879c185ecb',
  '50d8e921-4464-4893-a55a-1d1a0ec7b893',
  'c594e319-66f7-461d-b4c5-218bd78f9b1e',
  'd95955e8-26e8-4da8-8877-e329410923e4',
  '7c373033-fe74-441e-84d1-8b632915294e',
  '5b96c605-ada9-46a7-bf01-42b28b9bfddd',
  '748cebd4-9d7c-4563-bcc9-27c1ba2e9a9e',
  '0a5b6c55-648c-4ade-a5c5-f6bd6d793507',
  '91f59d6f-24bd-454e-a9a4-d1347b9c938e',
  '4a083bdf-57aa-4782-8b6a-cef3628d05a2',
  'a7c2584d-37e4-4fbc-8c84-f451ee058c52',
  'c14ac787-0dbd-4dbf-98eb-c1311ae601a2',
  'f54c2631-c8dc-4a2a-b9f0-a4c5887f87d9',
  '5f7e83ec-ccde-444d-b054-6cc7aefc76ec',
  '4ffb07bb-a0e6-44fc-867f-73999748fe4d',
  '1e25db5e-1e76-4117-9b29-0d9f35528f31',
  'fa2d8889-22b7-455a-ae9f-a36e9a86efb4',
  '72c48e4f-ecd8-4f25-a6db-30c8831d4a02',
  '5520c33b-19a0-464f-807f-d1ee62d3acd1',
  'aa0213df-9539-4d1c-bc68-18563524b66c',
  '0539e9ef-036b-444d-a770-990e218f511f',
  '4f283c76-9962-414a-8708-824bf56e14b3',
  '98554c4c-1a64-4a4e-a55d-de09c63f7718',
  '85e36cf9-986c-4689-8846-67649b1d093c',
  '1cdaa838-00bd-4c25-92a6-36acbed646a0',
  '70c13ec1-f81d-44a9-a5a9-b30f250e1dc5',
  '9e3ca3ad-4cb8-4823-96f7-a949405e5f0a',
  '408d3f6a-5df5-4be8-888e-fa5bc916fa54',
  '5e0c4c35-3269-49a8-8a0d-30b047e613c1',
  '03b1b035-9db5-4694-b080-9d26e673889f',
  'f3e21b1d-53af-41a4-bef9-d548cc01ef79',
  'f7344103-a212-4898-8ae3-d25aefa1e9ca',
  'a36e2bff-02ff-405c-ba52-3ea089956adb',
  'b7b731a4-7de9-464f-b409-6197ecbc06b3',
  'd3fa554f-fce4-4266-864d-135433968e13',
  'c94ca5f3-723e-44bc-a1a1-bf9d95db461c',
  'e586d105-8906-43d8-98f6-eeb271adb988',
  '46f8c9e9-5102-4ca4-88d8-34c3bb85d2aa',
  '27317624-28c3-4e98-b816-66e60d4682b2',
  '0ad9cd1c-19d2-4e95-bdaa-c8905f327752',
  '0e8dc01f-ab68-407c-bec3-ddde5501b8c3',
  '97402690-4363-4529-9567-9f7e7178595d',
  '0baeabae-2729-45f8-80a0-a45e6c220c92',
  'ea8e542d-0983-4e0d-9fa0-c6eb60aca4e9',
  '6664d324-ee3f-413d-816c-d8b26179ae49',
  '3669affb-d2fc-4c48-bbf7-5f6ce3a34e06',
  '211536d3-a8a2-4528-a660-adcfcf254957',
  '1a5306da-efd1-4d7e-9eb6-e9416555f380',
  'd61e295f-55ee-4608-bc44-e008b9021a1d',
  '0ace743e-7673-492c-bd28-120f47a4b5fa',
  '98493118-6df8-48cb-bd47-773747d930c2',
  'cebe2129-17fc-401b-b164-54c251901e72',
  'f6ef31fd-a23a-4a02-afc2-bf7ed482c975',
  '7389bb66-90c6-4d62-b4dc-2ef95cbc02ad',
  'e67b7363-5c03-4eaa-a275-0deb9066f2d2',
  '688f948e-339c-4914-9513-71e3dd6ad5d4',
  '7455590a-ace9-42b7-b83e-3beabd9af3e7',
  '5089cf17-9a46-4fb7-a85d-ba4aa3f8bfc1',
  '9f03ae05-906c-4060-bec8-dfb8669a322b',
  '7a625336-76fb-421d-ab38-a2dfb8aaad3c',
  'd7f891a4-2b2a-427c-9130-b7637fcaa02d',
  '5bf24547-1a29-4a44-bf13-a26335a350a4',
  '74da168a-4f92-42bd-ba63-67dea0cd4c2c',
  'c516fa30-0ad1-4870-8d3f-addc80209d0b',
  'c521358d-078f-4a99-a1ea-878f2dd898c4',
  '735b0011-c58a-403f-830e-123e2824c780',
  'f7697c1b-1aea-42f1-963d-2b9800b8672f',
  '2d76839f-33a3-46b5-b0f6-28a8196720cf',
  'e3692648-187c-4357-a94f-686ca5813649',
  'c9d57469-6685-43a3-889b-907994ebd21d',
  '48285270-88c7-48a3-9932-87699fd4e13c',
  'a22631b8-63a8-4971-85ab-51801c582866',
];
