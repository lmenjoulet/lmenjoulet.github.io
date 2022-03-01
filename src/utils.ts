import * as locales from './data/settings/locales.json';

export function getLanguageFromURL(pathname: string) {
	const langCodeMatch = pathname.match(/^\/(([a-z]{2})(-[A-Z]{2})?)\/?/);
	return langCodeMatch && locales.locales.find(locale => locale.locale === langCodeMatch[1]) ? langCodeMatch[1] : 'fr';
}