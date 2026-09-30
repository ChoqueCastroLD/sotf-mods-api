/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Past_End_TitleInputs */

const en_requests_past_end_title = /** @type {(inputs: Requests_Past_End_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`That page is empty`)
};

const es_requests_past_end_title = /** @type {(inputs: Requests_Past_End_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esa página está vacía`)
};

const de_requests_past_end_title = /** @type {(inputs: Requests_Past_End_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diese Seite ist leer`)
};

const fr_requests_past_end_title = /** @type {(inputs: Requests_Past_End_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cette page est vide`)
};

const it_requests_past_end_title = /** @type {(inputs: Requests_Past_End_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quella pagina è vuota`)
};

const nl_requests_past_end_title = /** @type {(inputs: Requests_Past_End_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die pagina is leeg`)
};

const pl_requests_past_end_title = /** @type {(inputs: Requests_Past_End_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta strona jest pusta`)
};

const pt_requests_past_end_title = /** @type {(inputs: Requests_Past_End_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Essa página está vazia`)
};

const ru_requests_past_end_title = /** @type {(inputs: Requests_Past_End_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Эта страница пуста`)
};

const sv_requests_past_end_title = /** @type {(inputs: Requests_Past_End_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den sidan är tom`)
};

const tr_requests_past_end_title = /** @type {(inputs: Requests_Past_End_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu sayfa boş`)
};

const zh_requests_past_end_title = /** @type {(inputs: Requests_Past_End_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`该页为空`)
};

const ja_requests_past_end_title = /** @type {(inputs: Requests_Past_End_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このページは空です`)
};

/**
* | output |
* | --- |
* | "That page is empty" |
*
* @param {Requests_Past_End_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_past_end_title = /** @type {((inputs?: Requests_Past_End_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Past_End_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_past_end_title(inputs)
	if (locale === "de") return de_requests_past_end_title(inputs)
	if (locale === "fr") return fr_requests_past_end_title(inputs)
	if (locale === "it") return it_requests_past_end_title(inputs)
	if (locale === "nl") return nl_requests_past_end_title(inputs)
	if (locale === "pl") return pl_requests_past_end_title(inputs)
	if (locale === "pt") return pt_requests_past_end_title(inputs)
	if (locale === "ru") return ru_requests_past_end_title(inputs)
	if (locale === "sv") return sv_requests_past_end_title(inputs)
	if (locale === "tr") return tr_requests_past_end_title(inputs)
	if (locale === "zh") return zh_requests_past_end_title(inputs)
	if (locale === "ja") return ja_requests_past_end_title(inputs)
	return en_requests_past_end_title(inputs)
});
