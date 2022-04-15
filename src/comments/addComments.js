class Api {
    constructor(
        involvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/',
    ) {
        this.carId = 'b2zuy7eMXykf5uW3eblG';
        this.root = involvementApi;
        this.comments = `${involvementApi}${this.carId}/comments`;
    }
    getComment = async(root = this.comments, item_id) => {
        console.log(item_id, root, 'root')
        try {
            console.log(item_id)
            const url = `${this.comments}?item_id=${item_id}`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            return response.json();
        } catch (error) {
            return [];
        }
    };

    addComment = async(
        bodyData,
    ) => {
        await fetch(this.comments, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bodyData),
        });
    };
}

export default Api;