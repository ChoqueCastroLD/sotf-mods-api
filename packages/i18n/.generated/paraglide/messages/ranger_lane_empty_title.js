/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Lane_Empty_TitleInputs */

const en_ranger_lane_empty_title = /** @type {(inputs: Ranger_Lane_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nothing to review`)
};

const es_ranger_lane_empty_title = /** @type {(inputs: Ranger_Lane_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nada que revisar`)
};

const de_ranger_lane_empty_title = /** @type {(inputs: Ranger_Lane_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nichts zu prüfen`)
};

const fr_ranger_lane_empty_title = /** @type {(inputs: Ranger_Lane_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rien à examiner`)
};

const it_ranger_lane_empty_title = /** @type {(inputs: Ranger_Lane_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niente da esaminare`)
};

const nl_ranger_lane_empty_title = /** @type {(inputs: Ranger_Lane_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niets te beoordelen`)
};

const pl_ranger_lane_empty_title = /** @type {(inputs: Ranger_Lane_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nic do sprawdzenia`)
};

const pt_ranger_lane_empty_title = /** @type {(inputs: Ranger_Lane_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nada para revisar`)
};

const ru_ranger_lane_empty_title = /** @type {(inputs: Ranger_Lane_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверять нечего`)
};

const sv_ranger_lane_empty_title = /** @type {(inputs: Ranger_Lane_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inget att granska`)
};

const tr_ranger_lane_empty_title = /** @type {(inputs: Ranger_Lane_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İncelenecek bir şey yok`)
};

const zh_ranger_lane_empty_title = /** @type {(inputs: Ranger_Lane_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有待审核的内容`)
};

const ja_ranger_lane_empty_title = /** @type {(inputs: Ranger_Lane_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`確認する項目はありません`)
};

/**
* | output |
* | --- |
* | "Nothing to review" |
*
* @param {Ranger_Lane_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_lane_empty_title = /** @type {((inputs?: Ranger_Lane_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Lane_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_lane_empty_title(inputs)
	if (locale === "de") return de_ranger_lane_empty_title(inputs)
	if (locale === "fr") return fr_ranger_lane_empty_title(inputs)
	if (locale === "it") return it_ranger_lane_empty_title(inputs)
	if (locale === "nl") return nl_ranger_lane_empty_title(inputs)
	if (locale === "pl") return pl_ranger_lane_empty_title(inputs)
	if (locale === "pt") return pt_ranger_lane_empty_title(inputs)
	if (locale === "ru") return ru_ranger_lane_empty_title(inputs)
	if (locale === "sv") return sv_ranger_lane_empty_title(inputs)
	if (locale === "tr") return tr_ranger_lane_empty_title(inputs)
	if (locale === "zh") return zh_ranger_lane_empty_title(inputs)
	if (locale === "ja") return ja_ranger_lane_empty_title(inputs)
	return en_ranger_lane_empty_title(inputs)
});
