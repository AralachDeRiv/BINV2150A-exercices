import { Request } from "express";
import { ERole, User } from "./user.model";

/**
 * Requête Express enrichie par le middleware AuthService.authorize :
 * après ce middleware, req.user contient l'utilisateur authentifié.
 */
export interface AuthenticatedRequest extends Request {
  // MODIF
  user?: TokenPayload;
}

// MODIF
// A voir en fonction de si veut ajouter d'autres roles dans le futur => enum
export interface TokenPayload {
  id: number;
  email: string;
  role: ERole;
}
