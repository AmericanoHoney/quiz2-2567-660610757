// You can define interfaces for all React components here.
// Do not forget to export properly.

interface ReplyProps {
    username: string;
    userImagePath: string;
    commentText: string;
    likeNum: number;
    replies: ({
        username: string;
        userImagePath: string;
        replyText: string;
        likeNum: number;
    } | undefined)[];
}
export type { ReplyProps };

interface ReplyReplyProps {
    username: string;
    userImagePath: string;
    replyText: string;
    likeNum: number;
}
export type { ReplyReplyProps };