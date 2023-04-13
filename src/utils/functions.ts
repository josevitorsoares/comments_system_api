export function verifyTypeVote(comment: any){
    if(comment.up_votes > comment.down_votes){
        comment.situacao = "Favorável";
    } else if (comment.up_votes < comment.down_votes){
        comment.situacao = "Desfavorável";
    } else {
        comment.situacao = "Neutra";
    }

    return comment;
}