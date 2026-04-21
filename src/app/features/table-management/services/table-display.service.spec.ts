import { TableDisplayService } from "./table-display.service";

describe('tableDisplayService', () => {

    let service: TableDisplayService;

    //  Arrange => Créer et configurer le SUT, u compris ses dépendances si besoin
    beforeEach(() => {
        service = new TableDisplayService();
    })

    describe('formatStatus', () => {
        it('should return "Available"', () => {
        // Act => Déclencher l'action dont on veut tester le résultat
        const status = service.formatStatus('available');

        // Assert Vérifier le résultat de l'action
        expect(status).toBe('Available');
        })

        it('should return "Occupied"', () => {
            expectFormattedStatus('occupied', 'Occupied');
        })

        it('should return "Being Cleaned"', () => {
            expectFormattedStatus('cleaning', 'Being Cleaned');
        })

        it('sould return "Reserved"', () => {
            expectFormattedStatus('reserved', 'Reserved');
        })

        it('should return "Unknown" if the requested status is not recognized', () => {
            expectFormattedStatus('invalid status', 'Unknown');
        })
    })

    describe('getStatusColor', () => {
        it('should return "bg-green-500 text-white"', () => {
            expectStatusColor('available', 'bg-green-500 text-white');
        })
        it('should return "bg-red-500 text-white"', () => {
            expectStatusColor('occupied', 'bg-red-500 text-white');
        })
        it('should return "bg-yellow-500 text-black"', () => {
            expectStatusColor('cleaning', 'bg-yellow-500 text-black');
        })
        it('should return "bg-blue-500 text-white"', () => {
            expectStatusColor('reserved', 'bg-blue-500 text-white');
        })
        it('should return "bg-gray-500 text-white" if the requested color is not recognized', () => {
            expectStatusColor('invalid color', 'bg-gray-500 text-white');
        })
    })


    function expectFormattedStatus(status: string, expected: string){
        expect(service.formatStatus(status)).toBe(expected);
    }

    function expectStatusColor(status: string, expected: string){
        expect(service.getStatusColor(status)).toBe(expected);
    }
});