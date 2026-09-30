/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ date: NonNullable<unknown> }} Jams_Mine_ClosesInputs */

const en_jams_mine_closes = /** @type {(inputs: Jams_Mine_ClosesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Closes ${i?.date}`)
};

const es_jams_mine_closes = /** @type {(inputs: Jams_Mine_ClosesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Cierra el ${i?.date}`)
};

const de_jams_mine_closes = /** @type {(inputs: Jams_Mine_ClosesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Endet am ${i?.date}`)
};

const fr_jams_mine_closes = /** @type {(inputs: Jams_Mine_ClosesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Clôture le ${i?.date}`)
};

const it_jams_mine_closes = /** @type {(inputs: Jams_Mine_ClosesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Chiude il ${i?.date}`)
};

const nl_jams_mine_closes = /** @type {(inputs: Jams_Mine_ClosesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sluit op ${i?.date}`)
};

const pl_jams_mine_closes = /** @type {(inputs: Jams_Mine_ClosesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zamyka się ${i?.date}`)
};

const pt_jams_mine_closes = /** @type {(inputs: Jams_Mine_ClosesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Encerra em ${i?.date}`)
};

const ru_jams_mine_closes = /** @type {(inputs: Jams_Mine_ClosesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Закрывается ${i?.date}`)
};

const sv_jams_mine_closes = /** @type {(inputs: Jams_Mine_ClosesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Stänger ${i?.date}`)
};

const tr_jams_mine_closes = /** @type {(inputs: Jams_Mine_ClosesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} tarihinde kapanır`)
};

const zh_jams_mine_closes = /** @type {(inputs: Jams_Mine_ClosesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`截止于 ${i?.date}`)
};

const ja_jams_mine_closes = /** @type {(inputs: Jams_Mine_ClosesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`締め切り：${i?.date}`)
};

/**
* | output |
* | --- |
* | "Closes {date}" |
*
* @param {Jams_Mine_ClosesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_mine_closes = /** @type {((inputs: Jams_Mine_ClosesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Mine_ClosesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_mine_closes(inputs)
	if (locale === "de") return de_jams_mine_closes(inputs)
	if (locale === "fr") return fr_jams_mine_closes(inputs)
	if (locale === "it") return it_jams_mine_closes(inputs)
	if (locale === "nl") return nl_jams_mine_closes(inputs)
	if (locale === "pl") return pl_jams_mine_closes(inputs)
	if (locale === "pt") return pt_jams_mine_closes(inputs)
	if (locale === "ru") return ru_jams_mine_closes(inputs)
	if (locale === "sv") return sv_jams_mine_closes(inputs)
	if (locale === "tr") return tr_jams_mine_closes(inputs)
	if (locale === "zh") return zh_jams_mine_closes(inputs)
	if (locale === "ja") return ja_jams_mine_closes(inputs)
	return en_jams_mine_closes(inputs)
});
