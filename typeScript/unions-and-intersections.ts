function padLeft(value: string, padding: string | number) { // 유니언타입은 여러 타입 중 하나가 될 수 있는 값을 의미한다.
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
    }

    if (typeof padding === 'string') {
        return padding + value;
    }

    throw new Error(`Expected string or number, got '${padding}'.`);
}


/*********************************************************/

type NetworkLoadingState = {
    state: "loading";
};

type NetworkFailedState = {
    state: "failed";
    code: number;
};

type NetworkSuccessState = {
    state: "success";
    response: {
        title: string;
        duration: number;
        summary: string;
    };
};
// ---생략---
type NetworkState =
    | NetworkLoadingState
    | NetworkFailedState
    | NetworkSuccessState;

function networkStatus(state: NetworkState): string {

    switch (state.state) {
        case "loading":
            return "Downloading...";
        case "failed":
            // 여기서 타입은 NetworkFailedState일 것이며,
            // 따라서 `code` 필드에 접근할 수 있습니다.
            return `Error ${state.code} downloading`;
        case "success":
            return `Downloaded ${state.response.title} - ${state.response.summary}`;
    }
}

/*********************************************************/

interface ErrorHandling {
    success: boolean;
    error?: { message: string };
}

interface ArtworksData {
    artworks: { title: string }[];
}

interface ArtistsData {
    artists: { name: string }[];
}

// 이 인터페이스들은
// 하나의 에러 핸들링과 자체 데이터로 구성됩니다.

type ArtworksResponse = ArtworksData & ErrorHandling;
type ArtistsResponse = ArtistsData & ErrorHandling;

const handleArtistsResponse = (response: ArtistsResponse) => {
    if (response.error) {
        console.error(response.error.message);
        return;
    }

    console.log(response.artists);
};

/*********************************************************/


