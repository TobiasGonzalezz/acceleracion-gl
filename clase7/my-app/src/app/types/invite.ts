type Owner = [string, string, number]

export type Invite = {
    name: string;
    place: string;
    content: string;
    date: Date | string;
    time: Date | string;
    owner: Owner;
}