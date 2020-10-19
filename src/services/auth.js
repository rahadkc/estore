import { isEquivalent } from '../utils';

const tokenKey = "admin";

export function login(user) {
  const isEqual = isEquivalent(user)
  if (isEqual) {
    localStorage.setItem(tokenKey, true);
  }
  return isEqual;
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const admin = localStorage.getItem(tokenKey);
    return admin;
  } catch (ex) {
    return null;
  }
}

export default {
  login,
  logout,
  getCurrentUser
};
