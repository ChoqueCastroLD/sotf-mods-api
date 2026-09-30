/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Mine_AllInputs */

const en_jams_mine_all = /** @type {(inputs: Jams_Mine_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All jams`)
};

const es_jams_mine_all = /** @type {(inputs: Jams_Mine_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos los jams`)
};

const de_jams_mine_all = /** @type {(inputs: Jams_Mine_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle Jams`)
};

const fr_jams_mine_all = /** @type {(inputs: Jams_Mine_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tous les jams`)
};

const it_jams_mine_all = /** @type {(inputs: Jams_Mine_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutti i jam`)
};

const nl_jams_mine_all = /** @type {(inputs: Jams_Mine_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle jams`)
};

const pl_jams_mine_all = /** @type {(inputs: Jams_Mine_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystkie jamy`)
};

const pt_jams_mine_all = /** @type {(inputs: Jams_Mine_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos os jams`)
};

const ru_jams_mine_all = /** @type {(inputs: Jams_Mine_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все джемы`)
};

const sv_jams_mine_all = /** @type {(inputs: Jams_Mine_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla jams`)
};

const tr_jams_mine_all = /** @type {(inputs: Jams_Mine_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm jam'ler`)
};

const zh_jams_mine_all = /** @type {(inputs: Jams_Mine_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`所有 Jam`)
};

const ja_jams_mine_all = /** @type {(inputs: Jams_Mine_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべてのジャム`)
};

/**
* | output |
* | --- |
* | "All jams" |
*
* @param {Jams_Mine_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_mine_all = /** @type {((inputs?: Jams_Mine_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Mine_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_mine_all(inputs)
	if (locale === "de") return de_jams_mine_all(inputs)
	if (locale === "fr") return fr_jams_mine_all(inputs)
	if (locale === "it") return it_jams_mine_all(inputs)
	if (locale === "nl") return nl_jams_mine_all(inputs)
	if (locale === "pl") return pl_jams_mine_all(inputs)
	if (locale === "pt") return pt_jams_mine_all(inputs)
	if (locale === "ru") return ru_jams_mine_all(inputs)
	if (locale === "sv") return sv_jams_mine_all(inputs)
	if (locale === "tr") return tr_jams_mine_all(inputs)
	if (locale === "zh") return zh_jams_mine_all(inputs)
	if (locale === "ja") return ja_jams_mine_all(inputs)
	return en_jams_mine_all(inputs)
});
