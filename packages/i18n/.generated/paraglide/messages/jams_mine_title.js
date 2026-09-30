/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Mine_TitleInputs */

const en_jams_mine_title = /** @type {(inputs: Jams_Mine_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod Jams`)
};

const es_jams_mine_title = /** @type {(inputs: Jams_Mine_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod Jams`)
};

const de_jams_mine_title = /** @type {(inputs: Jams_Mine_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod-Jams`)
};

const fr_jams_mine_title = /** @type {(inputs: Jams_Mine_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod Jams`)
};

const it_jams_mine_title = /** @type {(inputs: Jams_Mine_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod Jam`)
};

const nl_jams_mine_title = /** @type {(inputs: Jams_Mine_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod Jams`)
};

const pl_jams_mine_title = /** @type {(inputs: Jams_Mine_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod Jamy`)
};

const pt_jams_mine_title = /** @type {(inputs: Jams_Mine_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod Jams`)
};

const ru_jams_mine_title = /** @type {(inputs: Jams_Mine_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мод-джемы`)
};

const sv_jams_mine_title = /** @type {(inputs: Jams_Mine_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod Jams`)
};

const tr_jams_mine_title = /** @type {(inputs: Jams_Mine_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod Jam'leri`)
};

const zh_jams_mine_title = /** @type {(inputs: Jams_Mine_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组 Jam`)
};

const ja_jams_mine_title = /** @type {(inputs: Jams_Mine_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod ジャム`)
};

/**
* | output |
* | --- |
* | "Mod Jams" |
*
* @param {Jams_Mine_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_mine_title = /** @type {((inputs?: Jams_Mine_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Mine_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_mine_title(inputs)
	if (locale === "de") return de_jams_mine_title(inputs)
	if (locale === "fr") return fr_jams_mine_title(inputs)
	if (locale === "it") return it_jams_mine_title(inputs)
	if (locale === "nl") return nl_jams_mine_title(inputs)
	if (locale === "pl") return pl_jams_mine_title(inputs)
	if (locale === "pt") return pt_jams_mine_title(inputs)
	if (locale === "ru") return ru_jams_mine_title(inputs)
	if (locale === "sv") return sv_jams_mine_title(inputs)
	if (locale === "tr") return tr_jams_mine_title(inputs)
	if (locale === "zh") return zh_jams_mine_title(inputs)
	if (locale === "ja") return ja_jams_mine_title(inputs)
	return en_jams_mine_title(inputs)
});
