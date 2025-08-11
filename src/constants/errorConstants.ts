// src/constants/errorConstants.ts

export const SIGNUP_ERROR = "Signup failed";
export const SIGNUP_NETWORK_ERROR = "Something went wrong while signing up. Please try again later.";
export const NETWORK_ERROR = "Network error. Please try again later.";
export const PASSWORD_LENGTH_ERROR = 'Password must be at least 6 characters.';

// Added for test link generation errors
export const TEST_LINK_GENERATION_SUCCESS = "✅ Test link generated and sent to candidate.";
export const TEST_LINK_GENERATION_FAILURE = "❌ Failed to generate test link.";
export const TEST_LINK_NETWORK_ERROR = "❌ Network error. Please try again.";

export const ERROR_MESSAGES = {
  INVALID_TOKEN: 'Invalid or expired token.',
  CANDIDATE_NOT_FOUND: 'Candidate not found.',
  TOKEN_USED: 'This test link has already been used.',
  TOKEN_EXPIRED: 'This test link has expired.',
};
