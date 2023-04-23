import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { environment } from 'src/environments/environment';
import { IAuthCredentials } from '../models/credentials';
import { SnackbarService } from '../../shared/services/snackbar.service';
import { IRegisterData } from '../models/register-data';
import { IToken } from '../models/token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private snackbarService: SnackbarService,
  ) {}

  login(credentials: IAuthCredentials): Observable<IToken> {
    return this.http.post<IToken>(
      `${environment.apiUrl}/auth/authenticate`,
      credentials,
    );
  }

  register(credentials: IRegisterData): Observable<string> {
    return this.http
      .post<string>(`${environment.apiUrl}/auth/register`, credentials)
      .pipe(tap(() => this.snackbarService.openSnackBar('confirm your email')));
  }

  logout(): void {
    return;
  }
}
