/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Mine_OpenInputs */

const en_jams_mine_open = /** @type {(inputs: Jams_Mine_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open for submissions`)
};

const es_jams_mine_open = /** @type {(inputs: Jams_Mine_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abiertos a inscripción`)
};

const de_jams_mine_open = /** @type {(inputs: Jams_Mine_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Offen für Einreichungen`)
};

const fr_jams_mine_open = /** @type {(inputs: Jams_Mine_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ouverts aux participations`)
};

const it_jams_mine_open = /** @type {(inputs: Jams_Mine_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aperti alle iscrizioni`)
};

const nl_jams_mine_open = /** @type {(inputs: Jams_Mine_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open voor inzendingen`)
};

const pl_jams_mine_open = /** @type {(inputs: Jams_Mine_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otwarte na zgłoszenia`)
};

const pt_jams_mine_open = /** @type {(inputs: Jams_Mine_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abertos a inscrições`)
};

const ru_jams_mine_open = /** @type {(inputs: Jams_Mine_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Открыт приём работ`)
};

const sv_jams_mine_open = /** @type {(inputs: Jams_Mine_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öppna för bidrag`)
};

const tr_jams_mine_open = /** @type {(inputs: Jams_Mine_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başvuruya açık`)
};

const zh_jams_mine_open = /** @type {(inputs: Jams_Mine_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`开放投稿`)
};

const ja_jams_mine_open = /** @type {(inputs: Jams_Mine_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`応募受付中`)
};

/**
* | output |
* | --- |
* | "Open for submissions" |
*
* @param {Jams_Mine_OpenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_mine_open = /** @type {((inputs?: Jams_Mine_OpenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Mine_OpenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_mine_open(inputs)
	if (locale === "de") return de_jams_mine_open(inputs)
	if (locale === "fr") return fr_jams_mine_open(inputs)
	if (locale === "it") return it_jams_mine_open(inputs)
	if (locale === "nl") return nl_jams_mine_open(inputs)
	if (locale === "pl") return pl_jams_mine_open(inputs)
	if (locale === "pt") return pt_jams_mine_open(inputs)
	if (locale === "ru") return ru_jams_mine_open(inputs)
	if (locale === "sv") return sv_jams_mine_open(inputs)
	if (locale === "tr") return tr_jams_mine_open(inputs)
	if (locale === "zh") return zh_jams_mine_open(inputs)
	if (locale === "ja") return ja_jams_mine_open(inputs)
	return en_jams_mine_open(inputs)
});
