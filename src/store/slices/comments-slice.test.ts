import { describe, it, expect } from 'vitest';
import commentsReducer from './comments-slice';
import { fetchComments, postComment } from '../action';
import type { Comment } from '../../types/comment';

describe('commentsSlice', () => {
  const initialState = {
    comments: [],
    isCommentsLoading: false,
    hasCommentsError: false,
    isCommentPosting: false,
  };

  const mockComment: Comment = {
    id: '1',
    date: '2024-12-16T10:00:00.000Z',
    user: {
      name: 'Test User',
      avatarUrl: 'avatar.jpg',
      isPro: false,
    },
    comment: 'Great place to stay!',
    rating: 5,
  };

  it('должен вернуть начальное состояние при неизвестном действии', () => {
    expect(commentsReducer(undefined, { type: 'UNKNOWN_ACTION' })).toEqual(initialState);
  });

  describe('fetchComments', () => {
    it('должен установить isCommentsLoading в true при pending', () => {
      const state = commentsReducer(initialState, fetchComments.pending('', '1'));
      expect(state.isCommentsLoading).toBe(true);
      expect(state.hasCommentsError).toBe(false);
    });

    it('должен установить comments и isCommentsLoading в false при fulfilled', () => {
      const comments = [mockComment];
      const state = commentsReducer(initialState, fetchComments.fulfilled(comments, '', '1'));
      expect(state.comments).toEqual(comments);
      expect(state.isCommentsLoading).toBe(false);
    });

    it('должен заменить существующие комментарии новыми', () => {
      const stateWithComments = {
        ...initialState,
        comments: [mockComment],
      };
      const newComment = { ...mockComment, id: '2', comment: 'Another comment' };
      const state = commentsReducer(
        stateWithComments,
        fetchComments.fulfilled([newComment], '', '1')
      );
      expect(state.comments).toEqual([newComment]);
      expect(state.comments).toHaveLength(1);
    });

    it('должен установить hasCommentsError в true при rejected', () => {
      const state = commentsReducer(initialState, fetchComments.rejected(null, '', '1'));
      expect(state.isCommentsLoading).toBe(false);
      expect(state.hasCommentsError).toBe(true);
    });

    it('должен очистить ошибку при новом запросе', () => {
      const stateWithError = {
        ...initialState,
        hasCommentsError: true,
      };
      const state = commentsReducer(stateWithError, fetchComments.pending('', '1'));
      expect(state.hasCommentsError).toBe(false);
    });
  });

  describe('postComment', () => {
    const commentData = { comment: 'New comment', rating: 4 };

    it('должен установить isCommentPosting в true при pending', () => {
      const state = commentsReducer(
        initialState,
        postComment.pending('', { offerId: '1', commentData })
      );
      expect(state.isCommentPosting).toBe(true);
    });

    it('должен добавить новый комментарий при fulfilled', () => {
      const state = commentsReducer(
        initialState,
        postComment.fulfilled(mockComment, '', { offerId: '1', commentData })
      );
      expect(state.comments).toContain(mockComment);
      expect(state.comments).toHaveLength(1);
      expect(state.isCommentPosting).toBe(false);
    });

    it('должен добавить комментарий к существующим', () => {
      const existingComment = { ...mockComment, id: '1' };
      const stateWithComments = {
        ...initialState,
        comments: [existingComment],
      };
      const newComment = { ...mockComment, id: '2', comment: 'Another comment' };
      const state = commentsReducer(
        stateWithComments,
        postComment.fulfilled(newComment, '', { offerId: '1', commentData })
      );
      expect(state.comments).toHaveLength(2);
      expect(state.comments).toContain(existingComment);
      expect(state.comments).toContain(newComment);
    });

    it('должен установить isCommentPosting в false при rejected', () => {
      const stateWithPosting = {
        ...initialState,
        isCommentPosting: true,
      };
      const state = commentsReducer(
        stateWithPosting,
        postComment.rejected(null, '', { offerId: '1', commentData })
      );
      expect(state.isCommentPosting).toBe(false);
    });

    it('не должен изменять комментарии при rejected', () => {
      const existingComments = [mockComment];
      const stateWithComments = {
        ...initialState,
        comments: existingComments,
      };
      const state = commentsReducer(
        stateWithComments,
        postComment.rejected(null, '', { offerId: '1', commentData })
      );
      expect(state.comments).toEqual(existingComments);
    });
  });
});
