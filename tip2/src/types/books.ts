export interface IBook {
id: string;
title: string;
author: string;
year: number;
genre: string;
isAvailable: boolean;
description?: string; // опционально
coverImage?: string; // опционально
}
export interface NavigationStats {
  booksCount: number;
  readersCount: number;
}
